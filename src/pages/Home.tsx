import { ArrowRight, Shield, Truck, HeadphonesIcon, Star, Zap, Monitor, Cpu, Wifi } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const featuredProducts = [
  {
    id: 1,
    name: 'Mechanical Gaming Keyboard',
    category: 'Computer Accessories',
    price: '4,500',
    rating: 4.8,
    reviews: 124,
    image: 'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'Smart Watch Pro Series',
    category: 'Smart Gadgets',
    price: '12,999',
    rating: 4.9,
    reviews: 87,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'New',
  },
  {
    id: 3,
    name: 'Wireless Noise-Cancelling Earbuds',
    category: 'Smart Gadgets',
    price: '6,800',
    rating: 4.7,
    reviews: 203,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'Hot',
  },
  {
    id: 4,
    name: 'Ergonomic Wireless Mouse',
    category: 'Computer Accessories',
    price: '2,200',
    rating: 4.6,
    reviews: 156,
    image: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: null,
  },
];

const stats = [
  { value: '500+', label: 'Products' },
  { value: '2,000+', label: 'Happy Customers' },
  { value: '5+', label: 'Years Experience' },
  { value: '100%', label: 'Authentic Items' },
];

const features = [
  {
    icon: Shield,
    title: 'Genuine Products',
    desc: 'All products are 100% authentic and sourced from trusted manufacturers.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    desc: 'Quick and reliable delivery across Karachi and major cities of Pakistan.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    desc: 'Our dedicated team is always ready to help you with any queries.',
  },
];

const categories = [
  {
    title: 'Computer Accessories',
    desc: 'Keyboards, mice, monitors, cables and more',
    icon: Monitor,
    color: 'from-blue-500/20 to-cyan-500/20',
    border: 'border-blue-500/30',
    iconColor: 'text-blue-400',
  },
  {
    title: 'Smart Gadgets',
    desc: 'Smartwatches, earbuds, smart home devices and more',
    icon: Wifi,
    color: 'from-cyan-500/20 to-teal-500/20',
    border: 'border-cyan-500/30',
    iconColor: 'text-cyan-400',
  },
];

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-slate-900 flex items-center overflow-hidden">
        {/* Background grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-6">
                <Zap size={12} />
                Premium Tech Store in Karachi
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Power Up Your
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Digital Life
                </span>
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
                Discover the latest computer accessories and smart gadgets at TRIZENT Solutions. Quality products, competitive prices, and expert service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('products')}
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
                >
                  Explore Products
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-200"
                >
                  Contact Us
                </button>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
                {stats.map((s) => (
                  <div key={s.label} className="text-center sm:text-left">
                    <div className="text-2xl font-bold text-white">{s.value}</div>
                    <div className="text-slate-400 text-xs mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero image grid */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-52 shadow-2xl shadow-black/50">
                  <img
                    src="https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Keyboard"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-36 shadow-2xl shadow-black/50">
                  <img
                    src="https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Smart Watch"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-2xl overflow-hidden h-36 shadow-2xl shadow-black/50">
                  <img
                    src="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Earbuds"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-52 shadow-2xl shadow-black/50">
                  <img
                    src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Monitor"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-800/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4 p-6 bg-slate-800 rounded-2xl border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                  <f.icon size={22} className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{f.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Shop by Category</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Browse through our curated collection of premium tech products
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((cat) => (
              <button
                key={cat.title}
                onClick={() => onNavigate('products')}
                className={`group relative p-8 rounded-2xl bg-gradient-to-br ${cat.color} border ${cat.border} hover:scale-[1.02] transition-all duration-300 text-left overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-40 h-40 opacity-5 rounded-full bg-white blur-2xl group-hover:opacity-10 transition-opacity" />
                <div className={`w-14 h-14 rounded-2xl bg-slate-800 border ${cat.border} flex items-center justify-center mb-5`}>
                  <cat.icon size={28} className={cat.iconColor} />
                </div>
                <h3 className="text-white text-xl font-bold mb-2">{cat.title}</h3>
                <p className="text-slate-400 text-sm mb-5">{cat.desc}</p>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 group-hover:gap-3 transition-all">
                  Shop Now <ArrowRight size={16} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Featured Products</h2>
              <p className="text-slate-400">Hand-picked top products for you</p>
            </div>
            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors group"
            >
              View All <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.badge && (
                    <span className={`absolute top-3 left-3 px-2.5 py-1 text-xs font-bold rounded-full ${
                      product.badge === 'Best Seller' ? 'bg-amber-500 text-white' :
                      product.badge === 'New' ? 'bg-green-500 text-white' :
                      'bg-red-500 text-white'
                    }`}>
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-cyan-400/80 text-xs font-medium mb-1">{product.category}</p>
                  <h3 className="text-white font-semibold text-sm mb-2 leading-snug">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-3">
                    <Star size={12} className="text-amber-400 fill-amber-400" />
                    <span className="text-amber-400 text-xs font-semibold">{product.rating}</span>
                    <span className="text-slate-500 text-xs">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold">PKR {product.price}</span>
                    <button
                      onClick={() => onNavigate('contact')}
                      className="px-3 py-1.5 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400/60 text-cyan-400 text-xs font-semibold rounded-lg transition-all duration-200"
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 overflow-hidden p-10 lg:p-16 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Upgrade Your Setup?
              </h2>
              <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
                Visit our store or contact us today. We're located at Gulshan e Maymar, Karachi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => onNavigate('products')}
                  className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-cyan-500/25"
                >
                  Browse Products
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-8 py-3.5 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-200"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
