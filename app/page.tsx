import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">MR</span>
              </div>
              <span className="font-bold text-2xl">MapRanx</span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/demo" className="text-gray-600 hover:text-gray-900 font-medium hidden sm:block">
                Book a Demo
              </Link>
              <Link href="/login" className="text-gray-600 hover:text-gray-900 font-medium">
                Log in
              </Link>
              <Link href="/pricing" className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                Start for $8.77
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with $8.77 Feature */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          {/* Software vs Agency Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full px-6 py-2 mb-4">
            <span className="text-2xl">💻</span>
            <span className="text-lg font-bold text-green-700">DIY Software - Not an Expensive Agency!</span>
          </div>
          
          {/* $8.77 Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-2 mb-8">
            <span className="text-2xl">🚀</span>
            <span className="text-lg font-bold text-purple-700">Start for just $8.77 - 100x Cheaper than Agencies!</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Self-Service Rank Tracking
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Software, Not Agency
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Why Pay $500+/Month for an Agency? Get Instant Results with Our Automated Software
          </p>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
            MapRanx is DIY local rank tracking software that puts YOU in control. No meetings, no contracts, 
            no waiting for reports. Get instant ranking data anytime—for 100x less than traditional agencies.
          </p>
          
          {/* Main CTA with $8.77 */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-3xl mx-auto mb-12 border border-purple-100">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-4xl">💰</span>
                  <h3 className="text-2xl font-bold text-gray-900">Try MapRanx Today</h3>
                </div>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-purple-600">$8.77</span>
                  <span className="text-gray-600 ml-2">one-time trial</span>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    100 scan points included
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Full heatmap generation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Competitor tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Export reports (PDF/CSV)
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <Link href="/pricing" className="block w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-bold text-xl hover:shadow-xl transition-all duration-200 text-center">
                  Get Started for $8.77 →
                </Link>
                <p className="text-sm text-gray-500 text-center">No subscription required • Test before you commit</p>
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">Then upgrade to:</p>
                  <div className="flex justify-center gap-4 text-sm">
                    <span className="text-gray-700"><strong>$18.77/mo</strong> Starter</span>
                    <span className="text-gray-700"><strong>$38.77/mo</strong> Pro</span>
                    <span className="text-gray-700"><strong>$98.77/mo</strong> Agency</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <p className="text-sm text-gray-500 mb-8">Trusted by 10,000+ SEO professionals and agencies worldwide</p>
          <div className="flex justify-center items-center gap-8 flex-wrap opacity-60">
            <span className="text-gray-600 font-semibold">As featured on</span>
            <span className="text-gray-600">Search Engine Journal</span>
            <span className="text-gray-600">Moz</span>
            <span className="text-gray-600">Ahrefs Blog</span>
            <span className="text-gray-600">Local SEO Guide</span>
          </div>
        </div>
      </section>

      {/* Software vs Agency Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
            Why Choose Software Over Agencies?
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            See why 10,000+ businesses switched from expensive agencies to MapRanx
          </p>
          
          {/* Comparison Table */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                <div className="p-6">
                  <h3 className="text-xl font-bold">Feature</h3>
                </div>
                <div className="p-6 text-center border-l border-white/20">
                  <h3 className="text-xl font-bold">MapRanx Software</h3>
                  <p className="text-sm opacity-90 mt-1">DIY Platform</p>
                </div>
                <div className="p-6 text-center border-l border-white/20">
                  <h3 className="text-xl font-bold">Traditional Agencies</h3>
                  <p className="text-sm opacity-90 mt-1">(Like MapRanks)</p>
                </div>
              </div>
              
              <div className="divide-y divide-gray-200">
                <div className="grid grid-cols-3">
                  <div className="p-6 font-medium text-gray-900">Starting Price</div>
                  <div className="p-6 text-center bg-green-50">
                    <span className="text-2xl font-bold text-green-600">$8.77</span>
                    <p className="text-sm text-gray-600">One-time trial</p>
                  </div>
                  <div className="p-6 text-center bg-red-50">
                    <span className="text-2xl font-bold text-red-600">$500+</span>
                    <p className="text-sm text-gray-600">Per month minimum</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3">
                  <div className="p-6 font-medium text-gray-900">Results Speed</div>
                  <div className="p-6 text-center bg-green-50">
                    <span className="text-green-600 font-bold">Instant</span>
                    <p className="text-sm text-gray-600">Real-time scanning</p>
                  </div>
                  <div className="p-6 text-center bg-red-50">
                    <span className="text-red-600 font-bold">3-7 Days</span>
                    <p className="text-sm text-gray-600">Wait for reports</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3">
                  <div className="p-6 font-medium text-gray-900">Control</div>
                  <div className="p-6 text-center bg-green-50">
                    <span className="text-green-600 font-bold">100% Yours</span>
                    <p className="text-sm text-gray-600">Run unlimited scans</p>
                  </div>
                  <div className="p-6 text-center bg-red-50">
                    <span className="text-red-600 font-bold">Limited</span>
                    <p className="text-sm text-gray-600">Request changes</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3">
                  <div className="p-6 font-medium text-gray-900">Contracts</div>
                  <div className="p-6 text-center bg-green-50">
                    <span className="text-green-600 font-bold">No Contracts</span>
                    <p className="text-sm text-gray-600">Cancel anytime</p>
                  </div>
                  <div className="p-6 text-center bg-red-50">
                    <span className="text-red-600 font-bold">6-12 Months</span>
                    <p className="text-sm text-gray-600">Locked in</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3">
                  <div className="p-6 font-medium text-gray-900">Meetings Required</div>
                  <div className="p-6 text-center bg-green-50">
                    <span className="text-green-600 font-bold">Never</span>
                    <p className="text-sm text-gray-600">Self-service</p>
                  </div>
                  <div className="p-6 text-center bg-red-50">
                    <span className="text-red-600 font-bold">Weekly/Monthly</span>
                    <p className="text-sm text-gray-600">Time consuming</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/pricing" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-bold text-xl hover:shadow-xl transition-all duration-200">
              <span>Switch to Software - Save 95%</span>
              <span className="text-2xl">→</span>
            </Link>
            <p className="text-sm text-gray-500 mt-4">
              * MapRanx is not affiliated with MapRanks or any other agency. We provide DIY software, not agency services.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
            Your all-in-one local search ranking tool
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Everything you need to dominate local search and Google Maps
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="text-purple-600 text-5xl mb-4">📍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hyperlocal Tracking</h3>
              <p className="text-lg text-gray-600 mb-6">
                Check how your site ranks for any keyword in any zip code, neighborhood, or city. 
                No more relying on generic tools—this is true local.
              </p>
              <Link href="/pricing" className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700">
                Try for $8.77 →
              </Link>
            </div>
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-8">
              <div className="bg-white rounded-lg shadow-lg p-4">
                <div className="h-48 bg-gradient-to-br from-purple-50 to-blue-50 rounded flex items-center justify-center">
                  <span className="text-6xl">🗺️</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-8">
              <div className="bg-white rounded-lg shadow-lg p-4">
                <div className="h-48 bg-gradient-to-br from-blue-50 to-purple-50 rounded flex items-center justify-center">
                  <span className="text-6xl">📊</span>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="text-blue-600 text-5xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Maps and Organic SERP Views</h3>
              <p className="text-lg text-gray-600 mb-6">
                Get full visibility into both Maps and traditional search rankings. 
                Toggle between views and spot ranking shifts fast.
              </p>
              <Link href="/pricing" className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700">
                Start tracking for $8.77 →
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="text-green-600 text-5xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Local Rank Tracker with Real Insights</h3>
              <p className="text-lg text-gray-600 mb-6">
                Visualize ranking trends over time, compare competitors, and identify keyword 
                opportunities that drive local visibility.
              </p>
              <Link href="/pricing" className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700">
                Get insights for $8.77 →
              </Link>
            </div>
            <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8">
              <div className="bg-white rounded-lg shadow-lg p-4">
                <div className="h-48 bg-gradient-to-br from-green-50 to-blue-50 rounded flex items-center justify-center">
                  <span className="text-6xl">🎯</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white text-center">
            <div className="text-6xl mb-6">🏢</div>
            <h3 className="text-3xl font-bold mb-4">Built for Agencies and Multi-Location Brands</h3>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Track hundreds of keywords across multiple locations. Set up recurring scans, 
              get alerts, and export white-labeled reports.
            </p>
            <div className="inline-block bg-white/10 backdrop-blur rounded-xl p-6">
              <p className="text-2xl font-bold mb-2">Start with just $8.77</p>
              <p className="text-sm opacity-90">Test with 100 points • No commitment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why MapRanx Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
            Why MapRanx wins?
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            SEO agencies need a Google Maps rank tracker that is built for local search success. 
            Here&apos;s why MapRanx stands out:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { icon: '📍', title: 'Hyper-accurate, street-level rank tracking' },
              { icon: '🗺️', title: 'Interactive heatmaps to visualize rankings' },
              { icon: '📊', title: 'Automated, white-label reports for agencies' },
              { icon: '💼', title: 'Integrated Google Business Profile management' },
              { icon: '🔔', title: 'Real-time competitor tracking & alerts' },
              { icon: '💰', title: 'Start for just $8.77 - lowest entry price' },
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <p className="font-semibold text-gray-900">{feature.title}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-600 mb-8">
              If your focus is Google Maps rankings, local SEO, and agency efficiency, 
              MapRanx is the clear winner.
            </p>
            <p className="text-xl font-bold text-gray-900 mb-8">
              Ready to save time, money and get the best all-in-one solution for dominating Google Maps?
            </p>
          </div>
        </div>
      </section>

      {/* Everything You Get Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything You Get with MapRanx
            </h2>
            <p className="text-xl text-gray-600">Built for Growth. Packed with Value.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Keep Your Credits, Use Them When It Counts
                </h3>
                <p className="text-gray-600">
                  Unused scan credits don&apos;t go to waste—they roll over automatically. 
                  Maximize your investment and scale campaigns without worrying about monthly limits.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Scale Without the Cost Spike
                </h3>
                <p className="text-gray-600">
                  MapRanx is built for agencies and multi-location businesses that need affordability 
                  with room to grow. Get powerful features at every tier—without paying extra every time you scale.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Manage SABs Without the Hassle
                </h3>
                <p className="text-gray-600">
                  Track and optimize Service Area Businesses with tools built specifically for 
                  non-storefront brands. Easily manage multiple locations, update profiles, and 
                  monitor rankings from one simple dashboard.
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Run Audits That Actually Help You Rank
                </h3>
                <p className="text-gray-600">
                  Go deeper than surface-level checks with customizable audits that reveal real SEO 
                  opportunities. Get insights you can act on—without needing extra tools or spreadsheets.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  See Exactly Where You Rank, Not Just an Average
                </h3>
                <p className="text-gray-600">
                  Track local rankings down to the street or ZIP code with pinpoint accuracy. 
                  Every scan reflects how real customers see your business in Maps results.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Deliver Reports That Look Like Your Agency Made Them
                </h3>
                <p className="text-gray-600">
                  Create fully branded, white-labeled reports that make your agency look pro. 
                  Automate delivery and impress clients with data they actually understand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Start with our $8.77 trial, then choose your plan
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Trial */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border-2 border-purple-200">
              <div className="text-center mb-4">
                <h3 className="font-bold text-lg text-gray-900">Trial</h3>
                <p className="text-sm text-gray-600 mt-1">Test before you commit</p>
              </div>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-purple-600">$8.77</span>
                <p className="text-sm text-gray-600 mt-1">one-time</p>
              </div>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  100 scan points
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Full features access
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Export reports
                </li>
              </ul>
              <Link href="/pricing" className="block w-full py-3 bg-purple-600 text-white rounded-lg font-semibold text-center hover:bg-purple-700 transition">
                Start Trial
              </Link>
            </div>

            {/* Starter */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-center mb-4">
                <h3 className="font-bold text-lg text-gray-900">Starter</h3>
                <p className="text-sm text-gray-600 mt-1">For freelancers</p>
              </div>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-gray-900">$18.77</span>
                <p className="text-sm text-gray-600 mt-1">/month</p>
              </div>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  500 points/month
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Track multiple keywords
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Monthly reports
                </li>
              </ul>
              <Link href="/pricing" className="block w-full py-3 bg-gray-100 text-gray-900 rounded-lg font-semibold text-center hover:bg-gray-200 transition">
                Choose Starter
              </Link>
            </div>

            {/* Professional */}
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-6 text-white shadow-xl transform scale-105">
              <div className="bg-yellow-400 text-purple-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">
                MOST POPULAR
              </div>
              <div className="text-center mb-4">
                <h3 className="font-bold text-lg">Professional</h3>
                <p className="text-sm opacity-90 mt-1">For consultants</p>
              </div>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold">$38.77</span>
                <p className="text-sm opacity-90 mt-1">/month</p>
              </div>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">✓</span>
                  2,000 points/month
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">✓</span>
                  White-label reports
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">✓</span>
                  Priority support
                </li>
              </ul>
              <Link href="/pricing" className="block w-full py-3 bg-white text-purple-600 rounded-lg font-semibold text-center hover:bg-gray-100 transition">
                Choose Professional
              </Link>
            </div>

            {/* Agency */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-center mb-4">
                <h3 className="font-bold text-lg text-gray-900">Agency</h3>
                <p className="text-sm text-gray-600 mt-1">For agencies</p>
              </div>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-gray-900">$98.77</span>
                <p className="text-sm text-gray-600 mt-1">/month</p>
              </div>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  5,000 points/month
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Unlimited clients
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  API access
                </li>
              </ul>
              <Link href="/pricing" className="block w-full py-3 bg-gray-100 text-gray-900 rounded-lg font-semibold text-center hover:bg-gray-200 transition">
                Choose Agency
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            The Best Local Rank Tracker Tool for SEO
          </h2>
          <p className="text-xl mb-8 opacity-90">
            MapRanx&apos;s features, customization, and simplicity make it the #1 local rank tracker tool 
            for agencies and local businesses that want to work smarter, not harder.
          </p>
          <p className="text-lg mb-10 opacity-90">
            Would you rather rely on outdated ranking reports—or get automated, white-label reports 
            that impress clients instantly?
          </p>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
            <div className="text-5xl font-bold mb-4">$8.77</div>
            <p className="text-xl mb-2">Start Your MapRanx Journey</p>
            <p className="text-sm opacity-90">100 scan points • No subscription required</p>
          </div>

          <Link href="/pricing" className="inline-block px-10 py-5 bg-white text-purple-600 rounded-lg font-bold text-xl hover:shadow-2xl transition-all duration-200">
            Get Started for Just $8.77 →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">MR</span>
                </div>
                <span className="font-bold text-xl text-white">MapRanx</span>
              </div>
              <p className="text-sm">The most accurate local rank tracker for SEO professionals.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/features" className="hover:text-white">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link href="/demo" className="hover:text-white">Book Demo</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
                <li><Link href="/community" className="hover:text-white">Community</Link></li>
                <li><Link href="/api" className="hover:text-white">API Docs</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2024 MapRanx. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}