'use client';

import DashboardLayout from '@/components/DashboardLayout';

export default function BillingPage() {
  
  const currentPlan = {
    name: 'Professional',
    price: '$38.77',
    billing: 'monthly',
    nextBilling: 'December 1, 2024',
    pointsUsed: 1247,
    pointsTotal: 2000
  };

  const plans = [
    {
      id: 'trial',
      name: 'Trial',
      price: '$8.77',
      billing: 'one-time',
      points: 100,
      features: [
        '100 scan points',
        'Basic rank tracking',
        'Single location',
        'Email support',
        '7-day data retention'
      ],
      current: false
    },
    {
      id: 'starter',
      name: 'Starter',
      price: '$18.77',
      billing: 'per month',
      points: 500,
      features: [
        '500 scan points/month',
        'Advanced rank tracking',
        'Up to 3 locations',
        'Priority email support',
        '30-day data retention',
        'Basic reporting'
      ],
      current: false
    },
    {
      id: 'professional',
      name: 'Professional',
      price: '$38.77',
      billing: 'per month',
      points: 2000,
      features: [
        '2,000 scan points/month',
        'All tracking features',
        'Unlimited locations',
        'Priority support',
        '90-day data retention',
        'Advanced reporting',
        'API access',
        'White-label reports'
      ],
      current: true,
      popular: true
    },
    {
      id: 'agency',
      name: 'Agency',
      price: '$98.77',
      billing: 'per month',
      points: 5000,
      features: [
        '5,000 scan points/month',
        'Everything in Professional',
        'Dedicated account manager',
        'Custom integrations',
        '1-year data retention',
        'Bulk operations',
        'Advanced API access',
        'Custom branding'
      ],
      current: false
    }
  ];

  const invoices = [
    { id: 'INV-2024-011', date: 'Nov 1, 2024', amount: '$38.77', status: 'paid' },
    { id: 'INV-2024-010', date: 'Oct 1, 2024', amount: '$38.77', status: 'paid' },
    { id: 'INV-2024-009', date: 'Sep 1, 2024', amount: '$38.77', status: 'paid' },
    { id: 'INV-2024-008', date: 'Aug 1, 2024', amount: '$8.77', status: 'paid' },
  ];

  const pointsPercentage = (currentPlan.pointsUsed / currentPlan.pointsTotal) * 100;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Billing</h1>
            <p className="text-gray-600 mt-1">Manage your subscription and billing details</p>
          </div>
          <button className="px-5 py-2.5 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700">
            Manage Payment Method
          </button>
        </div>

        {/* Current Plan Overview */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-purple-100 text-sm">CURRENT PLAN</p>
              <h2 className="text-3xl font-bold mt-1">{currentPlan.name}</h2>
              <p className="text-xl mt-2">{currentPlan.price}/{currentPlan.billing}</p>
              <p className="text-purple-100 mt-4">Next billing date: {currentPlan.nextBilling}</p>
            </div>
            <div className="text-right">
              <p className="text-purple-100 text-sm">POINTS USAGE</p>
              <p className="text-3xl font-bold mt-1">
                {currentPlan.pointsUsed.toLocaleString()} / {currentPlan.pointsTotal.toLocaleString()}
              </p>
              <div className="w-48 bg-purple-800 rounded-full h-3 mt-3">
                <div 
                  className="bg-white rounded-full h-3 transition-all duration-300"
                  style={{ width: `${pointsPercentage}%` }}
                ></div>
              </div>
              <p className="text-purple-100 text-sm mt-2">{Math.round(pointsPercentage)}% used this month</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all text-left">
            <span className="text-2xl mb-3 block">💳</span>
            <h3 className="font-semibold text-gray-900">Payment Method</h3>
            <p className="text-sm text-gray-600 mt-1">Update your credit card</p>
          </button>
          <button className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all text-left">
            <span className="text-2xl mb-3 block">📊</span>
            <h3 className="font-semibold text-gray-900">Buy More Points</h3>
            <p className="text-sm text-gray-600 mt-1">Add extra points to your account</p>
          </button>
          <button className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all text-left">
            <span className="text-2xl mb-3 block">📄</span>
            <h3 className="font-semibold text-gray-900">Download Invoices</h3>
            <p className="text-sm text-gray-600 mt-1">Get your billing history</p>
          </button>
        </div>

        {/* Available Plans */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Available Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div 
                key={plan.id}
                className={`relative border-2 rounded-xl p-6 ${
                  plan.current 
                    ? 'border-purple-500 bg-purple-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                {plan.current && (
                  <div className="absolute -top-3 right-4">
                    <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full">
                      CURRENT
                    </span>
                  </div>
                )}
                
                <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 text-sm ml-1">/{plan.billing}</span>
                </div>
                <p className="text-purple-600 font-semibold mt-2">
                  {plan.points.toLocaleString()} points
                </p>
                
                <ul className="mt-6 space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-green-500 mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full mt-6 py-2 rounded-lg font-medium transition-all ${
                    plan.current
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : plan.id === 'trial'
                      ? 'bg-gray-600 text-white hover:bg-gray-700'
                      : 'bg-purple-600 text-white hover:bg-purple-700'
                  }`}
                  disabled={plan.current}
                >
                  {plan.current ? 'Current Plan' : plan.id === 'trial' ? 'Downgrade' : 'Upgrade'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Invoice History */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Invoice History</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Invoice ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
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
                {invoices.map((invoice) => (
                  <tr key={invoice.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {invoice.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {invoice.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                      {invoice.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {invoice.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-purple-600 hover:text-purple-900 mr-3">
                        View
                      </button>
                      <button className="text-gray-600 hover:text-gray-900">
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Cancel/Pause Subscription */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="font-semibold text-gray-900 mb-2">Need to make changes?</h3>
          <p className="text-sm text-gray-600 mb-4">
            You can pause or cancel your subscription at any time. Your data will be preserved for 30 days.
          </p>
          <div className="flex gap-3">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-white">
              Pause Subscription
            </button>
            <button className="px-4 py-2 text-red-600 hover:text-red-700">
              Cancel Subscription
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}