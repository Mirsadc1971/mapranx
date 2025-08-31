'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';

export default function ScanPage() {
  const [businessName, setBusinessName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [keywords, setKeywords] = useState('');
  const [locations, setLocations] = useState('');
  const [scanning, setScanning] = useState(false);
  const [scanResults, setScanResults] = useState<{
    businessName: string;
    totalScans: number;
    pointsUsed: number;
    results: Array<{
      keyword: string;
      location: string;
      position: number;
      mapPack: boolean;
    }>;
  } | null>(null);

  const handleScan = async () => {
    setScanning(true);
    
    // Simulate scan for now - will connect to real API
    setTimeout(() => {
      setScanResults({
        businessName,
        totalScans: 5,
        pointsUsed: 5,
        results: [
          { keyword: keywords.split(',')[0]?.trim() || 'property management', location: locations.split(',')[0]?.trim() || 'Chicago, IL', position: 3, mapPack: true },
          { keyword: keywords.split(',')[0]?.trim() || 'property management', location: 'Nearby', position: 5, mapPack: true },
        ]
      });
      setScanning(false);
    }, 3000);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">New Scan</h1>
          <p className="text-gray-600 mt-1">Track your business rankings across Google Maps</p>
        </div>

        {/* Points Balance */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-purple-100">Available Points</p>
              <p className="text-3xl font-bold">495</p>
            </div>
            <div className="text-right">
              <p className="text-purple-100">Points per scan</p>
              <p className="text-2xl font-semibold">1 point</p>
            </div>
          </div>
        </div>

        {/* Scan Form */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Business Information (NAP)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Business Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business Name *
              </label>
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="e.g., Manage 369"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="e.g., (312) 555-0123"
              />
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business Address *
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="e.g., 3434 N Halsted St, Chicago, IL 60657"
              />
            </div>

            {/* Keywords */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Keywords to Track (comma separated) *
              </label>
              <textarea
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                rows={3}
                placeholder="e.g., property management chicago, apartment management near me, HOA management"
              />
            </div>

            {/* Locations */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Locations to Search (comma separated) *
              </label>
              <textarea
                value={locations}
                onChange={(e) => setLocations(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                rows={3}
                placeholder="e.g., Chicago IL, 60657, Lakeview Chicago, Near North Side"
              />
              <p className="text-sm text-gray-500 mt-2">
                Tip: Use ZIP codes for hyperlocal tracking or neighborhood names for broader coverage
              </p>
            </div>
          </div>

          {/* Scan Settings */}
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-4">Scan Settings</h3>
            <div className="space-y-3">
              <label className="flex items-center">
                <input type="checkbox" defaultChecked className="mr-3 h-4 w-4 text-purple-600 rounded" />
                <span className="text-gray-700">Include Google Maps Pack results</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" defaultChecked className="mr-3 h-4 w-4 text-purple-600 rounded" />
                <span className="text-gray-700">Track competitor positions</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-3 h-4 w-4 text-purple-600 rounded" />
                <span className="text-gray-700">Generate heatmap visualization</span>
              </label>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-8 flex justify-between items-center">
            <div className="text-sm text-gray-600">
              This scan will use approximately <span className="font-semibold">
                {keywords.split(',').filter(k => k.trim()).length * locations.split(',').filter(l => l.trim()).length} points
              </span>
            </div>
            <button
              onClick={handleScan}
              disabled={!businessName || !address || !phone || !keywords || !locations || scanning}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {scanning ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Scanning...
                </span>
              ) : 'Start Scan'}
            </button>
          </div>
        </div>

        {/* Results */}
        {scanResults && (
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Scan Results</h2>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800">
                  ✅ Scan complete! Found your business in {scanResults.results.length} locations.
                </p>
              </div>
              
              <div className="space-y-3">
                {scanResults.results.map((result, index) => (
                  <div key={index} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                    <div>
                      <p className="font-semibold text-gray-900">{result.keyword}</p>
                      <p className="text-sm text-gray-600">{result.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-purple-600">#{result.position}</p>
                      {result.mapPack && (
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Map Pack</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                  View Full Report
                </button>
                <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Export Results
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}