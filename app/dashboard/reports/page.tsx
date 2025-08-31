'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';

export default function ReportsPage() {
  const [reportType, setReportType] = useState('ranking');
  const [dateRange, setDateRange] = useState('30');

  const reports = [
    {
      id: 1,
      name: 'Monthly Ranking Report - November 2024',
      type: 'ranking',
      date: '2024-11-01',
      status: 'completed',
      locations: 3,
      keywords: 30,
      icon: '📊'
    },
    {
      id: 2,
      name: 'Competitor Analysis - Q4 2024',
      type: 'competitor',
      date: '2024-10-15',
      status: 'completed',
      locations: 3,
      keywords: 25,
      icon: '🎯'
    },
    {
      id: 3,
      name: 'NAP Consistency Audit',
      type: 'nap',
      date: '2024-10-01',
      status: 'completed',
      locations: 3,
      keywords: 0,
      icon: '📍'
    },
    {
      id: 4,
      name: 'White Label Report - Client ABC',
      type: 'whitelabel',
      date: '2024-09-28',
      status: 'completed',
      locations: 1,
      keywords: 15,
      icon: '🏷️'
    }
  ];

  const reportTypes = [
    { value: 'all', label: 'All Reports', icon: '📁' },
    { value: 'ranking', label: 'Ranking Reports', icon: '📊' },
    { value: 'competitor', label: 'Competitor Analysis', icon: '🎯' },
    { value: 'nap', label: 'NAP Audits', icon: '📍' },
    { value: 'whitelabel', label: 'White Label', icon: '🏷️' },
  ];

  const metrics = [
    { label: 'Total Reports', value: '42', change: '+5', trend: 'up' },
    { label: 'This Month', value: '8', change: '+2', trend: 'up' },
    { label: 'Scheduled', value: '3', change: '0', trend: 'stable' },
    { label: 'Avg. Score', value: '87%', change: '+3%', trend: 'up' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
            <p className="text-gray-600 mt-1">Generate and manage your ranking reports</p>
          </div>
          <button className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
            + Generate Report
          </button>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {metrics.map((metric, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-600 text-sm">{metric.label}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{metric.value}</p>
                </div>
                <span className={`text-sm font-semibold ${
                  metric.trend === 'up' ? 'text-green-600' : 
                  metric.trend === 'down' ? 'text-red-600' : 
                  'text-gray-500'
                }`}>
                  {metric.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Generate */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Quick Report Generator</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Report Type
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
                <option>Ranking Report</option>
                <option>Competitor Analysis</option>
                <option>NAP Audit</option>
                <option>Custom Report</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
                <option>All Locations</option>
                <option>Main Office</option>
                <option>Glenview</option>
                <option>Oak Park</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date Range
              </label>
              <select 
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              >
                <option value="7">Last 7 days</option>
                <option value="30">Last 30 days</option>
                <option value="90">Last 90 days</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium">
                Generate Now
              </button>
            </div>
          </div>
        </div>

        {/* Report Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {reportTypes.map((type) => (
            <button
              key={type.value}
              onClick={() => setReportType(type.value)}
              className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                reportType === type.value
                  ? 'bg-purple-600 text-white'
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="mr-2">{type.icon}</span>
              {type.label}
            </button>
          ))}
        </div>

        {/* Reports Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Recent Reports</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Report
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Coverage
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {reports.map((report) => (
                  <tr key={report.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{report.icon}</span>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{report.name}</div>
                          <div className="text-xs text-gray-500">ID: RPT-{String(report.id).padStart(4, '0')}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-600 capitalize">{report.type}</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="text-sm">
                        <div className="font-semibold text-purple-600">{report.locations} locations</div>
                        {report.keywords > 0 && (
                          <div className="text-gray-500">{report.keywords} keywords</div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-sm text-gray-600">
                        {new Date(report.date).toLocaleDateString()}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {report.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-medium">
                      <button className="text-purple-600 hover:text-purple-900 mr-3">
                        View
                      </button>
                      <button className="text-blue-600 hover:text-blue-900 mr-3">
                        Download
                      </button>
                      <button className="text-gray-600 hover:text-gray-900">
                        Share
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Report Templates */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Report Templates</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all cursor-pointer">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📊</span>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Monthly Performance</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Comprehensive monthly ranking analysis with trend data
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-gray-500">30-day coverage</span>
                    <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
                      Use Template
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all cursor-pointer">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🎯</span>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Competitor Benchmark</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Compare your rankings against top competitors
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-gray-500">5 competitors max</span>
                    <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
                      Use Template
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all cursor-pointer">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🏷️</span>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">White Label Client Report</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Professional branded reports for your clients
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-gray-500">Custom branding</span>
                    <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
                      Use Template
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule Reports */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">Automate Your Reporting</h3>
              <p className="text-purple-100">Schedule reports to run automatically and deliver to your inbox</p>
            </div>
            <button className="px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:shadow-lg">
              Schedule Report
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}