"use client"

import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { trackEvent } from '@/lib/gtm'

interface Message {
  id: string;
  text: string;
  is_user: boolean;
  timestamp: number;
}

interface UserInfo {
  id: string;
  ip: string;
  referer: string;
  user_agent: string;
}

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)
  const [error, setError] = useState<string | null>(null)

  const registerUser = useCallback(async () => {
    try {
      const response = await fetch('/api/register-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          referer: document.referrer,
          userAgent: navigator.userAgent,
        }),
      })
      const data = await response.json()
      if (response.ok) {
        setUserInfo(data)
      } else {
        console.warn('User registration failed:', data.error)
        // Generate a temporary user ID if registration fails
        setUserInfo({
          id: `temp-${Date.now()}`,
          ip: 'unknown',
          referer: document.referrer,
          user_agent: navigator.userAgent
        })
      }
    } catch (error) {
      console.error('Error registering user:', error)
      // Generate a temporary user ID if registration fails
      setUserInfo({
        id: `temp-${Date.now()}`,
        ip: 'unknown',
        referer: document.referrer,
        user_agent: navigator.userAgent
      })
    }
  }, [])

  useEffect(() => {
    registerUser()
  }, [registerUser])

  const pollMessages = useCallback(async () => {
    if (userInfo) {
      try {
        const response = await fetch(`/api/messages?userId=${userInfo.id}`)
        if (response.ok) {
          const data = await response.json()
          if (Array.isArray(data.messages)) {
            setMessages(data.messages)
          } else {
            console.warn('Unexpected response format:', data)
          }
        } else {
          console.warn('Failed to fetch messages:', await response.text())
        }
      } catch (error) {
        console.error('Error fetching messages:', error)
      }
    }
  }, [userInfo])

  useEffect(() => {
    const interval = setInterval(pollMessages, 5000)
    return () => clearInterval(interval)
  }, [pollMessages])

  const toggleChat = () => {
    setIsOpen(!isOpen)
    trackEvent('chat_toggle', { action: isOpen ? 'close' : 'open' })
  }

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (inputMessage.trim() && userInfo) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: inputMessage,
        is_user: true,
        timestamp: Date.now(),
      }
      setMessages(prevMessages => [...prevMessages, newMessage])
      setInputMessage('')

      try {
        const response = await fetch('/api/send-message', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: userInfo.id,
            message: inputMessage,
          }),
        })
        if (!response.ok) {
          console.warn('Failed to send message:', await response.text())
        }
        trackEvent('chat_message_sent', { userId: userInfo.id })
      } catch (error) {
        console.error('Error sending message:', error)
      }
    }
  }

  return (
    <>
      <Button
        className="fixed bottom-4 right-4 rounded-full p-4 bg-[#54B837] hover:bg-[#54B837]/90"
        onClick={toggleChat}
      >
        <MessageCircle size={24} />
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="bg-[#54B837] text-white p-4 flex justify-between items-center">
              <h3 className="font-bold">Live Chat</h3>
              <Button variant="ghost" size="icon" onClick={toggleChat}>
                <X size={24} />
              </Button>
            </div>
            <div className="h-80 overflow-y-auto p-4 bg-gray-100">
              {error && (
                <div className="text-red-500 mb-2">{error}</div>
              )}
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-2 ${
                    message.is_user ? 'text-right' : 'text-left'
                  }`}
                >
                  <span
                    className={`inline-block p-2 rounded-lg ${
                      message.is_user
                        ? 'bg-[#54B837] text-white'
                        : 'bg-white text-gray-800'
                    }`}
                  >
                    {message.text}
                  </span>
                </div>
              ))}
            </div>
            <form onSubmit={sendMessage} className="p-4 bg-white flex">
              <Input
                type="text"
                placeholder="Type your message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-grow mr-2"
              />
              <Button type="submit" className="bg-[#54B837] hover:bg-[#54B837]/90">
                <Send size={20} />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default LiveChat

