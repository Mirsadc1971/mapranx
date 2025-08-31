'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import Link from 'next/link';

export default function LocationsPage() {
  const [locations] = useState([
    {
      id: 1,
      name: 'Manage 369 - Main Office',
      address: '3434 N Halsted St, Chicago, IL 60657',
      phone: '(312) 555-0123',
      trackedKeywords: 12,
      avgPosition: 3.2,
      lastScanned: '2 hours ago',
      status: 'active'
    },
    {
      id: 2,
      name: 'Manage 369 - Glenview',
      address: '1825 Glenview Rd, Glenview, IL 60025',
      phone: '(847) 555-0456',
      trackedKeywords: 8,
      avgPosition: 2.8,
      lastScanned: '1 day ago',
      status: 'active'
    },
    {
      id: 3,
      name: 'Manage 369 - Oak Park',
      address: '1010 Lake St, Oak Park, IL 60301',
      phone: '(708) 555-0789',
      trackedKeywords: 10,
      avgPosition: 4.5,
      lastScanned: '3 days ago',
      status: 'active'
    }
  ]);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Locations</h1>
            <p className="text-gray-600 mt-1">Manage and track all your business locations</p>
          </div>
          <Link 
            href="/dashboard/scan"
            className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
          >
            + Add Location
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <p className="text-gray-600 text-sm">Total Locations</p>
            <p className="text-3xl font-bold text-gray-900 mt-1">3</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <p className="text-gray-600 text-sm">Active Tracking</p>
            <p className="text-3xl font-bold text-green-600 mt-1">3</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <p className="text-gray-600 text-sm">Total Keywords</p>
            <p className="text-3xl font-bold text-purple-600 mt-1">30</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <p className="text-gray-600 text-sm">Avg. Position</p>
            <p className="text-3xl font-bold text-blue-600 mt-1">3.5</p>
          </div>
        </div>

        {/* Locations Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">All Locations</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    NAP Details
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Keywords
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Avg. Position
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Scan
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
                {locations.map((location) => (
                  <tr key={location.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{location.name}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{location.address}</div>
                      <div className="text-sm text-gray-500">{location.phone}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <span className="text-sm font-semibold text-purple-600">
                        {location.trackedKeywords}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <span className={`inline-flex items-center justify-center w-12 h-8 rounded-full text-sm font-bold ${
                        location.avgPosition <= 3 ? 'bg-green-100 text-green-800' : 
                        location.avgPosition <= 5 ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {location.avgPosition}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                      {location.lastScanned}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {location.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-purple-600 hover:text-purple-900 mr-3">
                        Scan
                      </button>
                      <button className="text-blue-600 hover:text-blue-900 mr-3">
                        View
                      </button>
                      <button className="text-gray-600 hover:text-gray-900">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 bg-white rounded-lg hover:shadow-md transition-all text-left">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-semibold text-gray-900">Bulk Import</p>
                  <p className="text-sm text-gray-600">Import multiple locations via CSV</p>
                </div>
              </div>
            </button>
            <button className="p-4 bg-white rounded-lg hover:shadow-md transition-all text-left">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔄</span>
                <div>
                  <p className="font-semibold text-gray-900">Scan All</p>
                  <p className="text-sm text-gray-600">Run scan for all active locations</p>
                </div>
              </div>
            </button>
            <button className="p-4 bg-white rounded-lg hover:shadow-md transition-all text-left">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📊</span>
                <div>
                  <p className="font-semibold text-gray-900">Compare</p>
                  <p className="text-sm text-gray-600">Compare location performance</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}