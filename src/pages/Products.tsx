import { useState } from 'react';
import { Search, SlidersHorizontal, Star, X, ChevronDown } from 'lucide-react';

interface ProductsProps {
  onNavigate: (page: string) => void;
}

const allProducts = [
  // Computer Accessories
  {
    id: 1,
    name: 'Mechanical Gaming Keyboard RGB',
    category: 'Computer Accessories',
    subcategory: 'Keyboards',
    price: 4500,
    rating: 4.8,
    reviews: 124,
    image: 'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'Best Seller',
    desc: 'Full mechanical switches with RGB backlighting, anti-ghosting technology.',
  },
  {
    id: 2,
    name: 'Ergonomic Wireless Mouse',
    category: 'Computer Accessories',
    subcategory: 'Mice',
    price: 2200,
    rating: 4.6,
    reviews: 156,
    image: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: null,
    desc: 'Comfortable ergonomic design with long battery life and silent clicks.',
  },
  {
    id: 3,
    name: '27" Full HD Gaming Monitor',
    category: 'Computer Accessories',
    subcategory: 'Monitors',
    price: 32000,
    rating: 4.7,
    reviews: 89,
    image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'Hot',
    desc: '144Hz refresh rate, 1ms response time, ideal for gaming and productivity.',
  },
  {
    id: 4,
    name: 'USB-C Hub 7-in-1',
    category: 'Computer Accessories',
    subcategory: 'Cables & Adapters',
    price: 3200,
    rating: 4.5,
    reviews: 211,
    image: 'https://images.pexels.com/photos/4792730/pexels-photo-4792730.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: null,
    desc: 'HDMI, USB 3.0, SD card reader and PD charging in one compact hub.',
  },
  {
    id: 5,
    name: 'Laptop Cooling Pad',
    category: 'Computer Accessories',
    subcategory: 'Cooling',
    price: 1800,
    rating: 4.4,
    reviews: 98,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
    badge: null,
    desc: 'Dual fan cooling pad with adjustable height and USB powered operation.',
  },
  {
    id: 6,
    name: 'Gaming Headset 7.1 Surround',
    category: 'Computer Accessories',
    subcategory: 'Audio',
    price: 5500,
    rating: 4.7,
    reviews: 143,
    image: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'New',
    desc: 'Virtual 7.1 surround sound with noise-cancelling microphone.',
  },
  {
    id: 7,
    name: 'Mechanical Wrist Rest',
    category: 'Computer Accessories',
    subcategory: 'Accessories',
    price: 950,
    rating: 4.3,
    reviews: 67,
    image: 'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=600',
    badge: null,
    desc: 'Memory foam wrist rest pad with non-slip base for long typing sessions.',
  },
  {
    id: 8,
    name: 'Webcam Full HD 1080p',
    category: 'Computer Accessories',
    subcategory: 'Cameras',
    price: 4800,
    rating: 4.6,
    reviews: 178,
    image: 'https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: null,
    desc: 'Crystal clear 1080p video with built-in stereo microphone.',
  },
  // Smart Gadgets
  {
    id: 9,
    name: 'Smart Watch Pro Series 6',
    category: 'Smart Gadgets',
    subcategory: 'Smart Watches',
    price: 12999,
    rating: 4.9,
    reviews: 87,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'New',
    desc: 'Heart rate monitor, GPS, sleep tracking and 7-day battery life.',
  },
  {
    id: 10,
    name: 'True Wireless Earbuds ANC',
    category: 'Smart Gadgets',
    subcategory: 'Earbuds',
    price: 6800,
    rating: 4.7,
    reviews: 203,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'Hot',
    desc: 'Active noise cancellation with 30hr total playtime and IPX5 rating.',
  },
  {
    id: 11,
    name: 'Smart Home Speaker',
    category: 'Smart Gadgets',
    subcategory: 'Smart Home',
    price: 8500,
    rating: 4.5,
    reviews: 112,
    image: 'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: null,
    desc: 'Voice-controlled smart speaker with 360-degree sound and home automation.',
  },
  {
    id: 12,
    name: 'Wireless Charging Pad 15W',
    category: 'Smart Gadgets',
    subcategory: 'Chargers',
    price: 1500,
    rating: 4.4,
    reviews: 289,
    image: 'https://images.pexels.com/photos/4526414/pexels-photo-4526414.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: null,
    desc: 'Fast wireless charging compatible with all Qi-enabled devices.',
  },
  {
    id: 13,
    name: 'Fitness Tracker Band',
    category: 'Smart Gadgets',
    subcategory: 'Smart Watches',
    price: 3500,
    rating: 4.5,
    reviews: 167,
    image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: null,
    desc: 'Track steps, calories, sleep and heart rate with 14-day battery life.',
  },
  {
    id: 14,
    name: 'Portable Bluetooth Speaker',
    category: 'Smart Gadgets',
    subcategory: 'Speakers',
    price: 5200,
    rating: 4.6,
    reviews: 194,
    image: 'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'Best Seller',
    desc: 'Waterproof portable speaker with 20-hour playtime and deep bass.',
  },
  {
    id: 15,
    name: 'Smart Plug Wi-Fi',
    category: 'Smart Gadgets',
    subcategory: 'Smart Home',
    price: 1200,
    rating: 4.3,
    reviews: 321,
    image: 'https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: null,
    desc: 'Control any appliance remotely via app with energy monitoring.',
  },
  {
    id: 16,
    name: 'Mini Drone with Camera',
    category: 'Smart Gadgets',
    subcategory: 'Drones',
    price: 18500,
    rating: 4.4,
    reviews: 54,
    image: 'https://images.pexels.com/photos/1087180/pexels-photo-1087180.jpeg?auto=compress&cs=tinysrgb&w=600',
    badge: 'New',
    desc: '4K camera drone with 20-min flight time and obstacle avoidance.',
  },
];

export default function Products({ onNavigate }: ProductsProps) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['All', 'Computer Accessories', 'Smart Gadgets'];

  const filtered = allProducts
    .filter((p) => {
      const matchCat = selectedCategory === 'All' || p.category === selectedCategory;
      const matchSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.subcategory.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-slate-900">
      {/* Page Header */}
      <div className="relative bg-slate-800/60 border-b border-slate-700/50 py-14 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute top-0 left-1/3 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Our Products</h1>
          <p className="text-slate-400 max-w-xl">
            Explore our wide range of premium computer accessories and smart gadgets.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 focus:border-cyan-500/50 text-white placeholder-slate-400 rounded-xl outline-none transition-colors text-sm"
            />
            {search && (
              <button onClick={() => setSearch('')} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white">
                <X size={16} />
              </button>
            )}
          </div>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none pl-4 pr-10 py-3 bg-slate-800 border border-slate-700 text-slate-300 rounded-xl outline-none text-sm cursor-pointer hover:border-slate-500 transition-colors focus:border-cyan-500/50"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/30'
                  : 'bg-slate-800 border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500'
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto text-slate-500 text-sm self-center">
            {filtered.length} product{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Products Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-slate-600 text-6xl mb-4">&#128269;</div>
            <p className="text-slate-400 text-lg">No products found for "{search}"</p>
            <button onClick={() => setSearch('')} className="mt-4 text-cyan-400 hover:text-cyan-300 text-sm">
              Clear search
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <div
                key={product.id}
                className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group flex flex-col"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.badge && (
                    <span
                      className={`absolute top-3 left-3 px-2.5 py-1 text-xs font-bold rounded-full ${
                        product.badge === 'Best Seller'
                          ? 'bg-amber-500 text-white'
                          : product.badge === 'New'
                          ? 'bg-green-500 text-white'
                          : 'bg-red-500 text-white'
                      }`}
                    >
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-cyan-400/80 text-xs font-medium mb-1">{product.subcategory}</p>
                  <h3 className="text-white font-semibold text-sm mb-2 leading-snug">{product.name}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-3 flex-1">{product.desc}</p>
                  <div className="flex items-center gap-1 mb-4">
                    <Star size={12} className="text-amber-400 fill-amber-400" />
                    <span className="text-amber-400 text-xs font-semibold">{product.rating}</span>
                    <span className="text-slate-500 text-xs">({product.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold text-base">
                      PKR {product.price.toLocaleString()}
                    </span>
                    <button
                      onClick={() => onNavigate('contact')}
                      className="px-3 py-1.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-500/40 hover:border-cyan-400/60 text-cyan-400 text-xs font-semibold rounded-lg transition-all duration-200"
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-16 p-8 bg-slate-800 rounded-2xl border border-slate-700 text-center">
          <h3 className="text-white text-xl font-bold mb-2">Looking for something specific?</h3>
          <p className="text-slate-400 mb-6 text-sm">
            Can't find what you're looking for? Contact us and we'll source it for you.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-7 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 shadow-md shadow-cyan-500/25"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
