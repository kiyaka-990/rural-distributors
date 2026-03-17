import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import Reveal from '@/components/Reveal';
import { CheckCircle, Target, Eye, Shield } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Rural Distributors Enterprises Limited',
  description: 'Learn about our history, mission, vision, and values as Nairobi\'s premier construction specialists since 2015.',
};

const timeline = [
  { year: '2015', event: 'Company incorporated in Nairobi under the Company Act Laws of Kenya' },
  { year: '2016', event: 'First major government institution contract secured' },
  { year: '2018', event: 'Expanded into electrical works and specialist installations' },
  { year: '2020', event: 'Launched road rehabilitation & civil works division' },
  { year: '2022', event: '100+ completed projects milestone achieved' },
  { year: '2024', event: 'Regional expansion into East & Central Africa initiated' },
];

const orgChart = [
  { level: 0, nodes: [{ label: 'Managing Director', highlight: 'gold' }] },
  { level: 1, nodes: [{ label: 'Financial Director', highlight: 'gold' }, { label: 'COO', highlight: 'green' }] },
  { level: 2, nodes: [{ label: 'Admin' }, { label: 'Financial Controller' }, { label: 'Engineers' }, { label: 'Project Managers' }] },
  { level: 3, nodes: [{ label: 'Human Resources' }, { label: 'Accounts' }, { label: 'Quantity Surveyors' }, { label: 'Joinery' }] },
  { level: 4, nodes: [{ label: 'Procurement' }, { label: 'Plant & Transport' }, { label: 'Site Supervisors' }, { label: 'Safety Officers' }] },
  { level: 5, nodes: [{ label: 'Skilled Workers', dim: true }, { label: 'Semi-Skilled', dim: true }, { label: 'Specialist Technicians', dim: true }, { label: 'Storekeepers', dim: true }] },
];

export default function About() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* Hero */}
        <section className="relative py-24 px-6 overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #0d1b3e 0%, #091220 100%)' }}>
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Reveal>
              <div className="section-label">Our Story</div>
              <h1 className="section-title text-5xl md:text-6xl">
                Built on <span className="accent">Passion</span>,
                <br />Driven by <span style={{ color: '#22883f' }}>Excellence</span>
              </h1>
              <p className="text-dim text-lg leading-relaxed max-w-2xl mx-auto mt-4">
                Since 2015, Rural Distributors Enterprises Limited has been Kenya's trusted
                partner in civil and construction excellence — from Nairobi's skyline to
                infrastructure across East & Central Africa.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <Reveal direction="left">
              <div className="section-label">Who We Are</div>
              <h2 className="section-title">
                Kenya's <span className="accent">Premier</span>
                <br />Construction Firm
              </h2>
              <div className="divider" />
              <div className="space-y-4 text-sm text-dim leading-relaxed">
                <p>
                  Rural Distributors Enterprises Limited is a Private Limited Company
                  incorporated in 2015 in Nairobi, Kenya. We specialise in Brickwork,
                  Formwork, Plastering, Concrete Floors, Concrete Slabs, Tiling, Painting
                  and Paving, as well as full building, civil, electrical, and road works.
                </p>
                <p>
                  Since inception, the firm has been providing building construction and
                  civil engineering works to both private companies and government
                  institutions, with a clear vision of delivering a comprehensive range of
                  quality services.
                </p>
                <p>
                  We are a versatile company with a reputation for outstanding quality
                  workmanship, which has broadened our focus with diversified new fields
                  of specialisation, modern technologies, and continued success by
                  offering best-in-class services to our clients.
                </p>
                <p className="font-medium" style={{ color: '#e8c96a' }}>
                  "We have set our services diversification as well as geographic broadening
                  of our business operations to fulfil our firm's missions not only in Kenya
                  but across far in East and Central Africa Regions."
                </p>
              </div>
            </Reveal>

            <Reveal direction="right">
              {/* Stats card */}
              <div className="glass rounded-3xl p-10 relative overflow-hidden mb-6">
                <div className="absolute inset-0 opacity-10"
                  style={{ background: 'conic-gradient(from 0deg, transparent, rgba(26,107,60,0.8) 60deg, transparent 120deg)', animation: 'spin 20s linear infinite', borderRadius: '24px' }} />
                <div className="relative text-center">
                  <div className="font-bebas text-[8rem] leading-none" style={{ color: 'rgba(26,107,60,0.3)' }}>2015</div>
                  <div className="text-xs tracking-[3px] uppercase mb-8" style={{ color: '#22883f' }}>Founded in Nairobi, Kenya</div>
                  <div className="grid grid-cols-3 gap-6">
                    {[{ n: '10+', l: 'Years Active' }, { n: '150+', l: 'Projects' }, { n: 'EAC', l: 'Regional Reach' }].map(({ n, l }) => (
                      <div key={l}>
                        <div className="font-bebas text-2xl" style={{ color: '#e8c96a' }}>{n}</div>
                        <div className="text-xs text-dim">{l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Value items */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: '🎯', title: 'Mission', desc: 'World-class contracting with long-term client partnerships' },
                  { icon: '👁️', title: 'Vision', desc: 'Leading construction company across chosen markets' },
                  { icon: '🔒', title: 'Integrity', desc: 'Safety, professionalism, and transparency always' },
                  { icon: '⚙️', title: 'Innovation', desc: 'Modern technologies and latest techniques' },
                ].map((v) => (
                  <div key={v.title} className="glass rounded-2xl p-4 border-l-2" style={{ borderLeftColor: '#22883f' }}>
                    <div className="font-semibold text-sm mb-1" style={{ color: '#e8c96a' }}>{v.icon} {v.title}</div>
                    <div className="text-xs text-dim">{v.desc}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-6" style={{ background: 'linear-gradient(135deg, rgba(26,107,60,0.07) 0%, transparent 60%)' }}>
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <div className="section-label">Direction</div>
              <h2 className="section-title">Mission <span className="accent">&</span> Vision</h2>
              <div className="divider" />
            </Reveal>
            <div className="grid md:grid-cols-3 gap-6 mt-4">
              {[
                {
                  icon: <Target size={28} />,
                  title: 'Our Mission',
                  text: 'To be a world-class construction contracting company and to form long-term relationships with our clients. To provide cost-effective services without compromising on the quality of work by using high-quality construction and engineering solutions.',
                },
                {
                  icon: <Eye size={28} />,
                  title: 'Our Vision',
                  text: 'To be the leading construction company in our chosen markets, sought after by potential clients and employees for our track record in reliable execution, cost-effectiveness, and world-class technical sophistication.',
                },
                {
                  icon: <Shield size={28} />,
                  title: 'Our Values',
                  text: 'We believe in maintaining the highest standards of safety, professionalism, integrity, and ingenuity that meet and exceed expectations while offering rapid and lasting solutions to all challenges.',
                },
              ].map((card, i) => (
                <Reveal key={card.title} delay={i * 100}>
                  <div className="glass rounded-3xl p-8 glass-hover h-full">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 border"
                      style={{ background: 'rgba(26,107,60,0.2)', borderColor: 'rgba(26,107,60,0.3)', color: '#22883f' }}>
                      {card.icon}
                    </div>
                    <h3 className="font-display text-xl font-bold mb-3">{card.title}</h3>
                    <p className="text-sm text-dim leading-relaxed">{card.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 px-6 max-w-4xl mx-auto">
          <Reveal>
            <div className="section-label">Our Journey</div>
            <h2 className="section-title">Company <span className="accent">Timeline</span></h2>
            <div className="divider" />
          </Reveal>
          <div className="relative mt-8 pl-8 border-l-2" style={{ borderColor: 'rgba(26,107,60,0.3)' }}>
            {timeline.map((item, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="mb-8 relative">
                  <div
                    className="absolute -left-[41px] top-1 w-4 h-4 rounded-full border-2"
                    style={{ background: '#0d1b3e', borderColor: '#22883f' }}
                  />
                  <div className="font-bebas text-lg mb-1" style={{ color: '#e8c96a' }}>{item.year}</div>
                  <p className="text-sm text-dim leading-relaxed">{item.event}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Org Chart */}
        <section className="py-20 px-6 max-w-5xl mx-auto">
          <Reveal>
            <div className="section-label">Structure</div>
            <h2 className="section-title">Organisation <span className="accent">Chart</span></h2>
            <div className="divider" />
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-col items-center gap-4 mt-6 overflow-x-auto pb-4">
              {orgChart.map((level, li) => (
                <div key={li} className="flex flex-col items-center w-full">
                  <div className="flex flex-wrap gap-3 justify-center">
                    {level.nodes.map((node) => (
                      <div
                        key={node.label}
                        className="px-4 py-2 rounded-xl text-sm font-medium border transition-all hover:scale-105"
                        style={{
                          background: node.highlight === 'gold'
                            ? 'rgba(201,168,76,0.15)'
                            : node.highlight === 'green'
                            ? 'rgba(26,107,60,0.2)'
                            : 'rgba(255,255,255,0.05)',
                          borderColor: node.highlight === 'gold'
                            ? 'rgba(201,168,76,0.4)'
                            : node.highlight === 'green'
                            ? 'rgba(26,107,60,0.4)'
                            : 'rgba(255,255,255,0.08)',
                          color: node.highlight === 'gold'
                            ? '#e8c96a'
                            : node.highlight === 'green'
                            ? '#22883f'
                            : node.dim
                            ? 'rgba(240,244,255,0.5)'
                            : '#f0f4ff',
                          backdropFilter: 'blur(10px)',
                        }}
                      >
                        {node.label}
                      </div>
                    ))}
                  </div>
                  {li < orgChart.length - 1 && (
                    <div className="w-0.5 h-6 mt-2" style={{ background: 'linear-gradient(to bottom, #22883f, rgba(26,107,60,0.2))' }} />
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
