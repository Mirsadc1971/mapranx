import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MR</span>
              </div>
              <span className="font-bold text-xl">MapRanx</span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 font-medium">
                Demo
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-gray-900 font-medium">
                Pricing
              </Link>
              <Link href="/dashboard" className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Track Your Google Maps Rankings
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Like a Pro
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            The most affordable local SEO rank tracking platform. Monitor your business rankings, 
            track competitors, and dominate local search results.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/dashboard" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-200">
              Start Free Trial
            </Link>
            <Link href="/demo" className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-semibold text-lg hover:border-gray-400 transition-all duration-200">
              View Demo
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500">No credit card required • 14-day free trial</p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Everything You Need to Dominate Local SEO
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '📍', title: 'Rank Tracking', desc: 'Monitor your Google Maps rankings for unlimited keywords' },
              { icon: '🗺️', title: 'Heat Maps', desc: 'Visualize your local search presence with interactive heat maps' },
              { icon: '📊', title: 'Competitor Analysis', desc: 'Track and outrank your competitors in local search' },
              { icon: '📈', title: 'Detailed Reports', desc: 'Professional white-label reports for your clients' },
              { icon: '🔗', title: 'Citation Tracking', desc: 'Monitor your business listings across the web' },
              { icon: '⭐', title: 'Review Monitoring', desc: 'Track reviews from Google, Yelp, and more in one place' },
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-200">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl mb-8 text-purple-100">Start at just $19/month. No hidden fees.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="font-semibold text-lg mb-2">Starter</h3>
              <p className="text-3xl font-bold mb-2">$19<span className="text-sm font-normal">/mo</span></p>
              <p className="text-sm text-purple-100">1 location • 50 keywords</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 border-2 border-white/40 transform scale-105">
              <h3 className="font-semibold text-lg mb-2">Professional</h3>
              <p className="text-3xl font-bold mb-2">$49<span className="text-sm font-normal">/mo</span></p>
              <p className="text-sm">5 locations • 250 keywords</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="font-semibold text-lg mb-2">Business</h3>
              <p className="text-3xl font-bold mb-2">$99<span className="text-sm font-normal">/mo</span></p>
              <p className="text-sm text-purple-100">20 locations • 1000 keywords</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Boost Your Local Rankings?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of businesses already tracking their Google Maps rankings with MapRanx
          </p>
          <Link href="/dashboard" className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-200">
            Start Your Free Trial
          </Link>
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
  );
}