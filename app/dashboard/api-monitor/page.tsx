'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';

export default function ApiMonitorPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('24h');
  
  const apiStats = {
    totalCalls: '12,847',
    successRate: '99.8%',
    avgResponseTime: '142ms',
    remainingCredits: '487,153'
  };

  const endpoints = [
    { 
      name: 'Google Maps Places API', 
      status: 'operational', 
      calls: '4,231', 
      avgTime: '89ms',
      successRate: '99.9%',
      lastCall: '2 min ago'
    },
    { 
      name: 'Google Maps Geocoding', 
      status: 'operational', 
      calls: '3,892', 
      avgTime: '67ms',
      successRate: '100%',
      lastCall: '5 min ago'
    },
    { 
      name: 'Search Rankings API', 
      status: 'operational', 
      calls: '2,451', 
      avgTime: '234ms',
      successRate: '99.7%',
      lastCall: '1 min ago'
    },
    { 
      name: 'Business Details API', 
      status: 'degraded', 
      calls: '1,673', 
      avgTime: '412ms',
      successRate: '98.2%',
      lastCall: '8 min ago'
    },
    { 
      name: 'Reviews API', 
      status: 'operational', 
      calls: '600', 
      avgTime: '156ms',
      successRate: '99.5%',
      lastCall: '15 min ago'
    }
  ];

  const recentActivity = [
    { time: '10:42:15', endpoint: 'Places API', status: 'success', duration: '87ms', location: 'Chicago, IL' },
    { time: '10:41:58', endpoint: 'Geocoding', status: 'success', duration: '45ms', location: 'Glenview, IL' },
    { time: '10:41:32', endpoint: 'Rankings API', status: 'success', duration: '223ms', location: 'Oak Park, IL' },
    { time: '10:41:15', endpoint: 'Business API', status: 'error', duration: '1,245ms', location: 'Evanston, IL' },
    { time: '10:40:48', endpoint: 'Places API', status: 'success', duration: '92ms', location: 'Skokie, IL' },
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'operational': return 'bg-green-500';
      case 'degraded': return 'bg-yellow-500';
      case 'down': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'operational': return 'bg-green-100 text-green-800';
      case 'degraded': return 'bg-yellow-100 text-yellow-800';
      case 'down': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">API Monitor</h1>
            <p className="text-gray-600 mt-1">Track API usage and performance in real-time</p>
          </div>
          <div className="flex gap-3">
            <select 
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
            >
              <option value="1h">Last Hour</option>
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
            </select>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              Refresh
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total API Calls</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{apiStats.totalCalls}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 text-xl">📊</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Success Rate</p>
                <p className="text-2xl font-bold text-green-600 mt-1">{apiStats.successRate}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 text-xl">✅</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Avg Response Time</p>
                <p className="text-2xl font-bold text-blue-600 mt-1">{apiStats.avgResponseTime}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 text-xl">⚡</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Credits Remaining</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{apiStats.remainingCredits}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <span className="text-yellow-600 text-xl">💳</span>
              </div>
            </div>
          </div>
        </div>

        {/* API Endpoints Status */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">API Endpoints Status</h2>
          <div className="space-y-4">
            {endpoints.map((endpoint, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                <div className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(endpoint.status)} animate-pulse`}></div>
                  <div>
                    <p className="font-semibold text-gray-900">{endpoint.name}</p>
                    <div className="flex items-center gap-4 mt-1">
                      <span className={`text-xs px-2 py-1 rounded-full ${getStatusBadge(endpoint.status)}`}>
                        {endpoint.status}
                      </span>
                      <span className="text-xs text-gray-500">Last call: {endpoint.lastCall}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Calls</p>
                    <p className="font-semibold">{endpoint.calls}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Avg Time</p>
                    <p className="font-semibold">{endpoint.avgTime}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Success</p>
                    <p className="font-semibold text-green-600">{endpoint.successRate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Recent API Activity</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Endpoint</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentActivity.map((activity, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{activity.time}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{activity.endpoint}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{activity.location}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                      <span className={`font-mono ${
                        parseInt(activity.duration) > 500 ? 'text-red-600' : 'text-gray-900'
                      }`}>
                        {activity.duration}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        activity.status === 'success' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {activity.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Usage Warning */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <h3 className="font-semibold text-gray-900">API Usage Notice</h3>
              <p className="text-sm text-gray-600 mt-1">
                You&apos;ve used 72% of your monthly API credits. Consider upgrading to the Professional plan for 5x more credits.
              </p>
              <button className="mt-3 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 text-sm font-medium">
                Upgrade Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}