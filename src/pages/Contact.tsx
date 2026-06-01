import { MapPin, Phone, Clock, Mail, MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactDetails = [
    {
      icon: MapPin,
      label: 'Store Address',
      value: 'Mezzanine-1, Sb-39, Sector X-4,\nGulshan e Maymar, Karachi',
      link: null,
    },
    {
      icon: Phone,
      label: 'Phone / WhatsApp',
      value: '0320-8750927',
      link: 'tel:03208750927',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'trizentsolutions@gmail.com',
      link: 'mailto:trizentsolutions@gmail.com',
    },
    {
      icon: Clock,
      label: 'Store Hours',
      value: 'Monday – Saturday\n10:00 AM – 8:00 PM',
      link: null,
    },
  ];

  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-slate-900">
      {/* Header */}
      <div className="relative bg-slate-800/60 border-b border-slate-700/50 py-14 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-500/8 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Contact Us</h1>
          <p className="text-slate-400 max-w-xl">
            Have a question or ready to order? Reach out to us — we're happy to help.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Details */}
          <div>
            <h2 className="text-white text-xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-5 mb-10">
              {contactDetails.map((item) => (
                <div
                  key={item.label}
                  className="flex gap-4 p-5 bg-slate-800 border border-slate-700 rounded-2xl hover:border-cyan-500/30 transition-all duration-200 group"
                >
                  <div className="w-11 h-11 bg-cyan-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                    <item.icon size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs font-medium mb-1">{item.label}</p>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-white font-medium text-sm hover:text-cyan-400 transition-colors whitespace-pre-line"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium text-sm whitespace-pre-line">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Owner card */}
            <div className="p-6 bg-gradient-to-br from-slate-800 to-slate-800/80 border border-cyan-500/20 rounded-2xl">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  M
                </div>
                <div>
                  <p className="text-white font-semibold">Moazzam</p>
                  <p className="text-slate-400 text-sm">Owner, TRIZENT Solutions</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                "We are dedicated to providing the best tech products at competitive prices. Feel free to reach out for any inquiries or custom orders."
              </p>
            </div>

            {/* Map placeholder */}
            <div className="mt-6 rounded-2xl overflow-hidden border border-slate-700 bg-slate-800 h-48 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={28} className="text-cyan-400 mx-auto mb-2" />
                <p className="text-slate-400 text-sm font-medium">Gulshan e Maymar, Karachi</p>
                <p className="text-slate-500 text-xs mt-1">Mezzanine-1, Sb-39, Sector X-4</p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center">
                  <MessageSquare size={18} className="text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-white font-bold text-lg">Send a Message</h2>
                  <p className="text-slate-400 text-xs">We'll respond within 24 hours</p>
                </div>
              </div>

              {submitted && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                  <p className="text-green-400 text-sm font-medium">
                    Message sent successfully! We'll get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-300 text-xs font-semibold uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 focus:border-cyan-500/60 text-white placeholder-slate-500 rounded-xl outline-none transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 text-xs font-semibold uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="03XX-XXXXXXX"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 focus:border-cyan-500/60 text-white placeholder-slate-500 rounded-xl outline-none transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 text-xs font-semibold uppercase tracking-wider mb-2">
                    Subject *
                  </label>
                  <select
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 focus:border-cyan-500/60 text-white rounded-xl outline-none transition-colors text-sm"
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="order-status">Order Status</option>
                    <option value="return-exchange">Return / Exchange</option>
                    <option value="warranty">Warranty Claim</option>
                    <option value="custom-order">Custom Order</option>
                    <option value="general">General Question</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 text-xs font-semibold uppercase tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us what you need..."
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 focus:border-cyan-500/60 text-white placeholder-slate-500 rounded-xl outline-none transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 group"
                >
                  Send Message
                  <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              <div className="mt-6 pt-5 border-t border-slate-700 text-center">
                <p className="text-slate-500 text-xs">
                  Prefer a direct call?{' '}
                  <a href="tel:03208750927" className="text-cyan-400 hover:text-cyan-300 font-medium">
                    0320-8750927
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* About section */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { title: 'Visit Our Store', desc: 'Come see our products in person at our Gulshan e Maymar store.', action: 'Get Directions' },
            { title: 'Call Us Directly', desc: 'Speak with our team for instant assistance and product advice.', action: 'Call Now' },
            { title: 'WhatsApp Us', desc: 'Message us on WhatsApp for quick responses and order inquiries.', action: 'Message Us' },
          ].map((item) => (
            <div key={item.title} className="p-6 bg-slate-800 border border-slate-700 rounded-2xl hover:border-cyan-500/30 transition-all duration-200 text-center">
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">{item.desc}</p>
              <a
                href="tel:03208750927"
                className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors"
              >
                {item.action}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
