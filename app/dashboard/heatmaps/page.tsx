'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';

export default function HeatmapsPage() {
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedKeyword, setSelectedKeyword] = useState('property management');
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');

  // Sample heatmap data - will be replaced with real data
  const heatmapData = {
    'Chicago, IL': { rank: 2, color: 'bg-green-500' },
    'Evanston, IL': { rank: 3, color: 'bg-green-400' },
    'Skokie, IL': { rank: 5, color: 'bg-yellow-500' },
    'Oak Park, IL': { rank: 4, color: 'bg-yellow-400' },
    'Glenview, IL': { rank: 1, color: 'bg-green-600' },
    'Wilmette, IL': { rank: 7, color: 'bg-yellow-300' },
    'Park Ridge, IL': { rank: 8, color: 'bg-orange-400' },
    'Des Plaines, IL': { rank: 12, color: 'bg-orange-300' },
    'Morton Grove, IL': { rank: 15, color: 'bg-red-400' },
    'Lincolnwood, IL': { rank: 18, color: 'bg-red-300' },
    'Niles, IL': { rank: 9, color: 'bg-orange-400' },
    'Schaumburg, IL': { rank: 11, color: 'bg-orange-300' },
  };

  const locations = [
    { value: 'all', label: 'All Locations' },
    { value: 'main', label: 'Manage 369 - Main Office' },
    { value: 'glenview', label: 'Manage 369 - Glenview' },
    { value: 'oak-park', label: 'Manage 369 - Oak Park' },
  ];

  const keywords = [
    'property management',
    'apartment management',
    'HOA management',
    'rental management',
    'property managers near me',
  ];


  const getRankEmoji = (rank: number) => {
    if (rank <= 3) return '🏆';
    if (rank <= 5) return '⭐';
    if (rank <= 10) return '📍';
    return '⚠️';
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Ranking Heatmaps</h1>
            <p className="text-gray-600 mt-1">Visualize your local search performance across different areas</p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                viewMode === 'grid' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              Grid View
            </button>
            <button 
              onClick={() => setViewMode('map')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                viewMode === 'map' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              Map View
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <select 
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {locations.map(loc => (
                  <option key={loc.value} value={loc.value}>{loc.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Keyword
              </label>
              <select 
                value={selectedKeyword}
                onChange={(e) => setSelectedKeyword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {keywords.map(keyword => (
                  <option key={keyword} value={keyword}>{keyword}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date Range
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Ranking Legend</h3>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-500 rounded"></div>
              <span className="text-sm text-gray-600">Top 3 (Excellent)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-yellow-500 rounded"></div>
              <span className="text-sm text-gray-600">4-5 (Good)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-orange-500 rounded"></div>
              <span className="text-sm text-gray-600">6-10 (Average)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-red-500 rounded"></div>
              <span className="text-sm text-gray-600">11+ (Needs Work)</span>
            </div>
          </div>
        </div>

        {/* Heatmap Grid */}
        {viewMode === 'grid' && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-semibold text-gray-900 mb-6">
              Rankings for &quot;{selectedKeyword}&quot; across Chicago Metro
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {Object.entries(heatmapData).map(([location, data]) => (
                <div
                  key={location}
                  className="relative group cursor-pointer transform transition-all hover:scale-105"
                >
                  <div className={`${data.color} rounded-lg p-4 text-white`}>
                    <div className="text-center">
                      <div className="text-2xl mb-1">{getRankEmoji(data.rank)}</div>
                      <div className="text-2xl font-bold">#{data.rank}</div>
                      <div className="text-xs mt-1 opacity-90">{location}</div>
                    </div>
                  </div>
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block z-10">
                    <div className="bg-gray-900 text-white text-xs rounded-lg py-2 px-3 whitespace-nowrap">
                      <div className="font-semibold">{location}</div>
                      <div>Rank: #{data.rank}</div>
                      <div>Last updated: 2 hours ago</div>
                    </div>
                    <div className="w-2 h-2 bg-gray-900 transform rotate-45 absolute left-1/2 -translate-x-1/2 -bottom-1"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Map View Placeholder */}
        {viewMode === 'map' && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Interactive Map View</h3>
                <p className="text-gray-500">
                  Google Maps integration will show pin markers with ranking colors
                </p>
                <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                  Enable Map View
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Performance Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Performing Areas */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-semibold text-gray-900 mb-4">🏆 Top Performing Areas</h3>
            <div className="space-y-3">
              {[
                { area: 'Glenview, IL', rank: 1, trend: 'up' },
                { area: 'Chicago, IL', rank: 2, trend: 'stable' },
                { area: 'Evanston, IL', rank: 3, trend: 'up' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-green-600">#{item.rank}</span>
                    <span className="font-medium text-gray-900">{item.area}</span>
                  </div>
                  <span className={`text-sm ${
                    item.trend === 'up' ? 'text-green-600' : 'text-gray-500'
                  }`}>
                    {item.trend === 'up' ? '↑ Improving' : '→ Stable'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Areas Needing Attention */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-semibold text-gray-900 mb-4">⚠️ Areas Needing Attention</h3>
            <div className="space-y-3">
              {[
                { area: 'Morton Grove, IL', rank: 15, trend: 'down' },
                { area: 'Lincolnwood, IL', rank: 18, trend: 'down' },
                { area: 'Schaumburg, IL', rank: 11, trend: 'stable' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-red-600">#{item.rank}</span>
                    <span className="font-medium text-gray-900">{item.area}</span>
                  </div>
                  <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
                    Improve →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Export Options */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">Export Heatmap Data</h3>
              <p className="text-purple-100">Download visual reports for presentations or analysis</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg backdrop-blur">
                Export as PDF
              </button>
              <button className="px-4 py-2 bg-white text-purple-600 rounded-lg hover:shadow-lg">
                Export as Image
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}