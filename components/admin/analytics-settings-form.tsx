'use client';

import { useState } from 'react';

interface AnalyticsSettings {
  vercelAnalyticsEnabled: boolean;
  googleAnalyticsId: string;
  trackingConsent: boolean;
}

export default function AnalyticsSettingsForm() {
  const [settings, setSettings] = useState<AnalyticsSettings>({
    vercelAnalyticsEnabled: true,
    googleAnalyticsId: '',
    trackingConsent: true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Implement your settings update logic here
      // await fetch('/api/analytics/settings', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(settings),
      // });
      console.log('Updated analytics settings:', settings);
    } catch (error) {
      console.error('Failed to update settings:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
      <div>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            name="vercelAnalyticsEnabled"
            checked={settings.vercelAnalyticsEnabled}
            onChange={handleChange}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <span className="text-sm font-medium text-gray-700">Enable Vercel Analytics</span>
        </label>
      </div>

      <div>
        <label htmlFor="googleAnalyticsId" className="block text-sm font-medium text-gray-700">
          Google Analytics ID
        </label>
        <input
          type="text"
          id="googleAnalyticsId"
          name="googleAnalyticsId"
          value={settings.googleAnalyticsId}
          onChange={handleChange}
          placeholder="UA-XXXXXXXXX-X or G-XXXXXXXXXX"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            name="trackingConsent"
            checked={settings.trackingConsent}
            onChange={handleChange}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <span className="text-sm font-medium text-gray-700">
            Enable Cookie Consent Banner
          </span>
        </label>
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Save Analytics Settings
      </button>
    </form>
  );
}
