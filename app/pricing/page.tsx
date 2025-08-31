'use client'

import { useState } from 'react'
import Link from 'next/link'
import { loadStripe } from '@stripe/stripe-js'

const plans = [
  {
    name: 'Trial',
    price: 8.77,
    priceId: 'price_1S20WfKa1f5rFCitJLrhfcjH',
    tagline: 'Test the power of MapRanx with your first scan.',
    features: [
      '100 scan points',
      'One-time purchase',
      'Full heatmap generation',
      'Competitor tracking',
      'Export reports',
      'No subscription required'
    ],
    popular: false,
    oneTime: true
  },
  {
    name: 'Starter',
    price: 18.77,
    priceId: 'price_1S20WfKa1f5rFCitcF4i4tIp',
    tagline: 'Best for freelancers and single businesses.',
    features: [
      '500 points/month',
      'Track multiple keywords',
      'Monthly ranking reports',
      'Competitor analysis',
      'CSV & PDF exports',
      'Email support'
    ],
    popular: false,
    oneTime: false
  },
  {
    name: 'Professional',
    price: 38.77,
    priceId: 'price_1S20WgKa1f5rFCitlP5Vcja3',
    tagline: 'Most popular — built for consultants and small agencies.',
    features: [
      '2,000 points/month',
      'Automated scans',
      'White-label reports',
      'Advanced competitor tracking',
      'Priority support',
      'Custom branding'
    ],
    popular: true,
    oneTime: false
  },
  {
    name: 'Agency',
    price: 98.77,
    priceId: 'price_1S20WgKa1f5rFCite31lzWUU',
    tagline: 'Scale with unlimited clients, reports, and API access.',
    features: [
      '5,000 points/month',
      'Team access',
      'API integration',
      'Unlimited white-label reports',
      'Dedicated account manager',
      'Custom integrations'
    ],
    popular: false,
    oneTime: false
  }
]

export default function PricingPage() {
  const [loading, setLoading] = useState<string | null>(null)

  const handleCheckout = async (priceId: string, isOneTime: boolean) => {
    setLoading(priceId)
    
    try {
      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId,
          mode: isOneTime ? 'payment' : 'subscription'
        }),
      })

      const { sessionId } = await response.json()
      
      if (sessionId) {
        const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
        await stripe?.redirectToCheckout({ sessionId })
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(null)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MR</span>
              </div>
              <span className="font-bold text-xl">MapRanx</span>
            </div>
            <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Pricing Header */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full px-6 py-2 mb-6">
            <span className="text-xl">💰</span>
            <span className="text-lg font-bold text-green-700">95% Cheaper Than Agencies</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            DIY Software Pricing
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Agencies charge $500-2000/month. We charge 95% less for better results.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl shadow-lg ${
                  plan.popular ? 'ring-2 ring-purple-600 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 italic">{plan.tagline}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600 ml-1">
                      {plan.oneTime ? '' : '/mo'}
                    </span>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={() => handleCheckout(plan.priceId, plan.oneTime)}
                    disabled={loading !== null}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-xl'
                        : plan.oneTime
                        ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    } ${loading === plan.priceId ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {loading === plan.priceId ? 'Processing...' : 
                     plan.oneTime ? 'Get Trial' : 'Start Free 14-Day Trial'}
                  </button>
                  
                  {!plan.oneTime && (
                    <p className="text-xs text-gray-500 text-center mt-3">
                      Cancel anytime
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">What are scan points?</h3>
              <p className="text-gray-600">Scan points are used to generate heatmaps and track rankings. Each scan consumes points based on the area and keywords tracked.</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Can I change plans anytime?</h3>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and are prorated.</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Do unused points roll over?</h3>
              <p className="text-gray-600">Points reset monthly with your billing cycle. We recommend choosing a plan that matches your typical usage.</p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Is there a free trial?</h3>
              <p className="text-gray-600">All monthly plans include a 14-day free trial. No credit card required to start.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">MR</span>
            </div>
            <span className="font-bold text-xl text-white">MapRanx</span>
          </div>
          <p className="text-sm">© 2024 MapRanx. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}