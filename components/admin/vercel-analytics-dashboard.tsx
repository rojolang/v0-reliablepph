'use client';

import { useState, useEffect } from 'react';

interface AnalyticsData {
  pageViews: number;
  visitors: number;
  topPages: { path: string; views: number }[];
}

export default function VercelAnalyticsDashboard() {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    pageViews: 0,
    visitors: 0,
    topPages: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        // Implement your Vercel Analytics API call here
        // const response = await fetch('/api/analytics');
        // const data = await response.json();
        // setAnalyticsData(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch analytics:', error);
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  if (loading) {
    return <div>Loading analytics...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Page Views</h3>
          <p className="mt-2 text-3xl font-semibold text-indigo-600">
            {analyticsData.pageViews.toLocaleString()}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Unique Visitors</h3>
          <p className="mt-2 text-3xl font-semibold text-indigo-600">
            {analyticsData.visitors.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Top Pages</h3>
        <div className="space-y-4">
          {analyticsData.topPages.map((page, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-gray-600">{page.path}</span>
              <span className="text-gray-900 font-medium">{page.views.toLocaleString()} views</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
