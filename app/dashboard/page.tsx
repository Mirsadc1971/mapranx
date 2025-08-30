'use client';

import DashboardLayout from '@/components/DashboardLayout';

export default function DashboardPage() {
  const metrics = [
    { 
      title: 'Average Position', 
      value: '4.2', 
      change: '+2.1', 
      trend: 'up',
      icon: '📈',
      bgColor: 'from-purple-500 to-purple-600'
    },
    { 
      title: 'Keywords in Top 3', 
      value: '42', 
      change: '+8', 
      trend: 'up',
      icon: '🎯',
      bgColor: 'from-blue-500 to-blue-600'
    },
    { 
      title: 'Total Citations', 
      value: '187', 
      change: '+12', 
      trend: 'up',
      icon: '🔗',
      bgColor: 'from-green-500 to-green-600'
    },
    { 
      title: 'Review Score', 
      value: '4.8', 
      change: '+0.2', 
      trend: 'up',
      icon: '⭐',
      bgColor: 'from-yellow-500 to-orange-500'
    },
  ];

  const recentActivity = [
    { time: '2 hours ago', action: 'Generated monthly report for Glenview location', type: 'report' },
    { time: '4 hours ago', action: 'Ranking improved: "property management glenview" #3 → #1', type: 'ranking' },
    { time: '1 day ago', action: 'New review received: 5 stars from John D.', type: 'review' },
    { time: '2 days ago', action: 'Citation added: Yelp listing verified', type: 'citation' },
  ];

  const topKeywords = [
    { keyword: 'property management glenview', position: 1, change: 2, searches: 1200 },
    { keyword: 'glenview property managers', position: 2, change: 1, searches: 890 },
    { keyword: 'apartment management near me', position: 3, change: 0, searches: 2100 },
    { keyword: 'hoa management glenview il', position: 5, change: -1, searches: 450 },
    { keyword: 'residential property management', position: 7, change: 3, searches: 3200 },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back! Here&apos;s your SEO performance overview.</p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Last 30 Days
              </span>
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-200">
              Export Report
            </button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${metric.bgColor}`}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{metric.icon}</span>
                  <span className={`text-sm font-semibold ${
                    metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.change}
                  </span>
                </div>
                <h3 className="text-gray-600 text-sm font-medium">{metric.title}</h3>
                <p className="text-3xl font-bold text-gray-900 mt-1">{metric.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Top Keywords */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Top Keywords</h2>
              <Link href="/dashboard/reports" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                View All →
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Keyword</th>
                    <th className="text-center py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                    <th className="text-center py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
                    <th className="text-right py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Searches</th>
                  </tr>
                </thead>
                <tbody>
                  {topKeywords.map((item, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 text-sm font-medium text-gray-900">{item.keyword}</td>
                      <td className="py-4 text-center">
                        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${
                          item.position <= 3 ? 'bg-green-100 text-green-800' : 
                          item.position <= 10 ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {item.position}
                        </span>
                      </td>
                      <td className="py-4 text-center">
                        <span className={`text-sm font-semibold ${
                          item.change > 0 ? 'text-green-600' : 
                          item.change < 0 ? 'text-red-600' : 
                          'text-gray-400'
                        }`}>
                          {item.change > 0 ? '↑' : item.change < 0 ? '↓' : '–'} {Math.abs(item.change)}
                        </span>
                      </td>
                      <td className="py-4 text-right text-sm text-gray-600">{item.searches.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    activity.type === 'ranking' ? 'bg-purple-500' :
                    activity.type === 'report' ? 'bg-blue-500' :
                    activity.type === 'review' ? 'bg-yellow-500' :
                    'bg-green-500'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold mb-2">Ready to boost your rankings?</h2>
              <p className="text-purple-100">Run a new scan to get the latest data from Google Maps</p>
            </div>
            <button className="px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
              Start New Scan
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

// Import Link
import Link from 'next/link';