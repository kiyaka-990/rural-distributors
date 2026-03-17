'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import Reveal from '@/components/Reveal';
import { COMPANY } from '@/lib/data';
import { Phone, Mail, MapPin, Clock, CheckCircle, Send } from 'lucide-react';

const serviceOptions = [
  'Building Works',
  'Civil Works',
  'Electrical Works',
  'Road Services',
  'Specialist Finishing',
  'Quantity Surveying',
  'Other / Multiple',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', service: '', message: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  }

  const contactItems = [
    { icon: <Phone size={18} />, label: 'Phone', value: COMPANY.phone, href: `tel:${COMPANY.phone}` },
    { icon: <Mail size={18} />, label: 'Email', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
    { icon: <MapPin size={18} />, label: 'Address', value: COMPANY.address, href: '#map' },
    { icon: <MapPin size={18} />, label: 'Post', value: COMPANY.poBox, href: undefined },
    { icon: <Clock size={18} />, label: 'Hours', value: 'Mon–Fri 8am–5pm · Sat 9am–1pm', href: undefined },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* Hero */}
        <section
          className="relative py-24 px-6 overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #0d1b3e 0%, #091220 100%)' }}
        >
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Reveal>
              <div className="section-label">Reach Out</div>
              <h1 className="section-title text-5xl md:text-6xl">
                Get In <span className="accent">Touch</span>
              </h1>
              <p className="text-dim text-lg leading-relaxed max-w-2xl mx-auto mt-4">
                Ready to build? Get in touch with our team for a free consultation and
                detailed project quotation. We respond within 24 hours.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Contact grid */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form — 3 cols */}
            <div className="lg:col-span-3">
              <Reveal>
                <div className="glass rounded-3xl p-8 md:p-10">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                        style={{ background: 'rgba(26,107,60,0.2)', border: '2px solid #22883f' }}
                      >
                        <CheckCircle size={36} style={{ color: '#22883f' }} />
                      </div>
                      <h3 className="font-display text-2xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-dim text-sm max-w-sm leading-relaxed">
                        Thank you for reaching out. Our team will get back to you within 24 hours.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="btn-outline mt-8 px-6 py-2.5 text-sm"
                      >
                        Send Another
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <h2 className="font-display text-2xl font-bold mb-1">Send Us a Message</h2>
                        <p className="text-dim text-sm">Fill in the form and we'll be in touch shortly.</p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        {[
                          { name: 'firstName', label: 'First Name', placeholder: 'John' },
                          { name: 'lastName', label: 'Last Name', placeholder: 'Kamau' },
                        ].map((f) => (
                          <div key={f.name}>
                            <label className="block text-xs font-semibold tracking-widest uppercase text-dim mb-2">
                              {f.label}
                            </label>
                            <input
                              name={f.name}
                              type="text"
                              placeholder={f.placeholder}
                              required
                              value={(form as any)[f.name]}
                              onChange={handleChange}
                              className="w-full bg-glass border border-glass rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 outline-none transition-all focus:border-green-light/50 focus:shadow-[0_0_0_3px_rgba(26,107,60,0.12)]"
                            />
                          </div>
                        ))}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold tracking-widest uppercase text-dim mb-2">
                          Email Address
                        </label>
                        <input
                          name="email"
                          type="email"
                          placeholder="john@company.com"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="w-full bg-glass border border-glass rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 outline-none transition-all focus:border-green-light/50 focus:shadow-[0_0_0_3px_rgba(26,107,60,0.12)]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold tracking-widest uppercase text-dim mb-2">
                          Phone Number
                        </label>
                        <input
                          name="phone"
                          type="tel"
                          placeholder="+254 7XX XXX XXX"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full bg-glass border border-glass rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 outline-none transition-all focus:border-green-light/50 focus:shadow-[0_0_0_3px_rgba(26,107,60,0.12)]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold tracking-widest uppercase text-dim mb-2">
                          Service of Interest
                        </label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className="w-full bg-glass border border-glass rounded-xl px-4 py-3 text-sm text-white outline-none transition-all focus:border-green-light/50"
                          style={{ background: 'rgba(255,255,255,0.06)' }}
                        >
                          <option value="" style={{ background: '#152547' }}>Select a service...</option>
                          {serviceOptions.map((s) => (
                            <option key={s} value={s} style={{ background: '#152547' }}>{s}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold tracking-widest uppercase text-dim mb-2">
                          Project Details
                        </label>
                        <textarea
                          name="message"
                          placeholder="Tell us about your project — location, scale, timeline, and requirements..."
                          rows={5}
                          required
                          value={form.message}
                          onChange={handleChange}
                          className="w-full bg-glass border border-glass rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 outline-none transition-all focus:border-green-light/50 resize-none focus:shadow-[0_0_0_3px_rgba(26,107,60,0.12)]"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70"
                      >
                        {loading ? (
                          <>
                            <span
                              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                              style={{ animation: 'spin 0.8s linear infinite' }}
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={16} /> Send Message
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>

            {/* Info — 2 cols */}
            <div className="lg:col-span-2 space-y-5">
              <Reveal direction="right">
                <div>
                  <h2 className="font-display text-2xl font-bold mb-2">
                    Let's Build{' '}
                    <em className="not-italic" style={{ color: '#e8c96a' }}>Something</em>{' '}
                    Great
                  </h2>
                  <p className="text-dim text-sm leading-relaxed">
                    Whether you're planning a new development, need specialist construction
                    services, or want to explore partnership opportunities — our team is ready.
                  </p>
                </div>
              </Reveal>

              {contactItems.map((item, i) => (
                <Reveal key={i} direction="right" delay={i * 70}>
                  <div className="glass rounded-2xl p-5 flex items-start gap-4 glass-hover">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 border"
                      style={{ background: 'rgba(26,107,60,0.2)', borderColor: 'rgba(26,107,60,0.3)', color: '#22883f' }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs font-semibold tracking-widest uppercase text-dim mb-0.5">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a href={item.href} className="text-sm hover:text-white transition-colors" style={{ color: '#f0f4ff' }}>
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-sm">{item.value}</span>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}

              {/* Company card */}
              <Reveal direction="right" delay={400}>
                <div className="glass rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-xl border-2 flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #1a6b3c, #152547)', borderColor: '#22883f' }}
                    >
                      ⚓
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Rural Distributors Enterprises</div>
                      <div className="text-xs text-dim">General Building Contractors & Suppliers</div>
                    </div>
                  </div>
                  <p className="text-xs text-dim leading-relaxed italic">
                    "We have set our services diversification as well as geographic
                    broadening of our business operations to fulfil our firm's missions
                    not only in Kenya but across far in East and Central Africa."
                  </p>
                  <div className="flex gap-5 mt-4 pt-4 border-t border-glass">
                    {[{ n: '2015', l: 'Founded' }, { n: 'NBO', l: 'HQ City' }, { n: 'EAC', l: 'Reach' }].map(({ n, l }) => (
                      <div key={l} className="text-center">
                        <div className="font-bebas text-xl leading-tight" style={{ color: '#e8c96a' }}>{n}</div>
                        <div className="text-[10px] text-dim uppercase tracking-wider">{l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Map */}
        <section id="map" className="py-10 px-6 max-w-7xl mx-auto pb-24">
          <Reveal>
            <div className="section-label">Find Us</div>
            <h2 className="section-title">Our <span className="accent">Location</span></h2>
            <div className="divider" />
            <div className="rounded-3xl overflow-hidden border border-glass relative" style={{ height: '420px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.818990878!2d36.8158!3d-1.2841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d4a4d1c8e1%3A0x1234567890abcdef!2sCianda%20House%2C%20Koinange%20St%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RDE Office Location"
              />
              <div
                className="absolute top-4 left-4 glass rounded-xl px-4 py-2.5 text-xs font-semibold tracking-wider"
                style={{ color: '#e8c96a' }}
              >
                📍 Cianda House, Koinange Street, Nairobi
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
