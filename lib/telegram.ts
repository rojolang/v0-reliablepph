import { contactConfig } from '@/config/contact'

export async function sendTelegramMessage(message: string) {
  const url = `https://api.telegram.org/bot${contactConfig.telegramBotToken}/sendMessage`
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: contactConfig.telegramChatId,
      text: message,
    }),
  })

  if (!response.ok) {
    throw new Error('Failed to send Telegram message')
  }

  return await response.json()
}

