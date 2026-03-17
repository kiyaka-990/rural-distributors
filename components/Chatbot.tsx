'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { X, Send, MessageCircle, Minimize2, Phone, Mail, Sparkles } from 'lucide-react';
import { BOT_RESPONSES } from '@/lib/data';
import RdeLogo from './RdeLogo';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  time: string;
  type?: 'text' | 'quick-actions' | 'welcome';
  reactions?: string[];
}

const QUICK_ACTIONS = [
  { icon: '🏗️', label: 'Building Works', query: 'Tell me about building works' },
  { icon: '⚡', label: 'Electrical Works', query: 'Tell me about electrical works' },
  { icon: '🛣️', label: 'Road Services', query: 'Tell me about road services' },
  { icon: '🔩', label: 'Civil Works', query: 'Tell me about civil works' },
  { icon: '💰', label: 'Get a Quote', query: 'How do I get a quote?' },
  { icon: '📍', label: 'Our Location', query: 'Where are you located?' },
  { icon: '📞', label: 'Contact Us', query: 'How can I contact you?' },
  { icon: '🏆', label: 'Our Experience', query: 'Tell me about your experience' },
];

const EMOJI_REACTIONS = ['👍', '❤️', '🔥', '👏', '💯'];

function getBotResponse(message: string): string {
  const m = message.toLowerCase();
  if (m.includes('building') || m.includes('hospital') || m.includes('school') || m.includes('hotel') || m.includes('commercial'))
    return "🏗️ **Building Works — Our Flagship Division**\n\nWith over **10 years of excellence**, we've constructed:\n\n• High-rise residential & commercial towers\n• Hotel resorts & hospitality venues\n• Banks & financial institutions\n• Hospitals & healthcare facilities\n• Schools & educational campuses\n• Fuel stations & retail complexes\n\nEvery project is delivered on time, within budget, and to the highest Kenyan standards. 🏆\n\nReady to start your project? Let's talk!";
  if (m.includes('electrical') || m.includes('power') || m.includes('cctv') || m.includes('alarm') || m.includes('generator'))
    return "⚡ **Electrical Works — Powering Modern Infrastructure**\n\nOur electrical team handles:\n\n• 25MW power backup systems\n• Transformer & generator installations\n• Fire detection & alarm systems\n• CCTV security networks\n• Data & voice infrastructure\n• TV networking & PA systems\n\nFrom concept to commissioning — we power it all! 🔌";
  if (m.includes('civil') || m.includes('substat') || m.includes('tower') || m.includes('drainage') || m.includes('cable'))
    return "🔩 **Civil Works — Infrastructure Built to Last**\n\nOur civil engineering expertise includes:\n\n• 132/33kV substation transformer bays\n• Equipment foundations & structures\n• Access roads & site development\n• Cable trenches & oil pits\n• Drainage & stormwater works\n• Cell towers up to **90 metres**\n\nBuilt with precision. Standing for generations. 💪";
  if (m.includes('road') || m.includes('asphalt') || m.includes('seal') || m.includes('rehabilit') || m.includes('highway'))
    return "🛣️ **Road Services — Smooth, Durable Solutions**\n\nWe deliver:\n\n• Road sealing & surface treatment\n• Full asphalting & resurfacing\n• Road rehabilitation projects\n• Drainage improvements\n• Pavement markings & signage\n\nOur teams are highly skilled and **see no task as impossible**. We pride ourselves on delivering every project on time. 🚧";
  if (m.includes('locat') || m.includes('where') || m.includes('address') || m.includes('office') || m.includes('find'))
    return "📍 **Find Us Here**\n\n**7th Floor, Cianda House**\nKoinange Street, Nairobi, Kenya\n\n📬 P.O. Box 19055 – 00500, Nairobi\n\n🕐 **Office Hours:**\nMonday – Friday: 8:00 AM – 5:00 PM\nSaturday: 9:00 AM – 1:00 PM\n\nWe're in the heart of Nairobi CBD — easy to find! Visit our Contact page for a full interactive map. 🗺️";
  if (m.includes('contact') || m.includes('phone') || m.includes('email') || m.includes('call') || m.includes('reach'))
    return "📞 **Let's Connect!**\n\n**Phone:** +254 722 313 131\n**Email:** ruraldist22@gmail.com\n**Address:** 7th Floor, Cianda House, Koinange St, Nairobi\n\n💬 Or just keep chatting here — I'm available 24/7!\n\nOur human team responds within **24 hours** on business days. We'd love to hear about your project! 🙌";
  if (m.includes('quote') || m.includes('price') || m.includes('cost') || m.includes('how much') || m.includes('budget'))
    return "💰 **Getting Your Quote is Easy!**\n\nHere's how:\n\n**Option 1 — Contact Form** 📝\nFill in our online form at /contact with your project details\n\n**Option 2 — Call Us** 📞\n+254 722 313 131\n\n**Option 3 — Email** ✉️\nruraldist22@gmail.com\n\n**For a faster quote, include:**\n• Project type & scope\n• Location\n• Approximate timeline\n• Any specific requirements\n\nWe respond within **24 hours**! No obligation, completely free. 🎯";
  if (m.includes('experience') || m.includes('history') || m.includes('about') || m.includes('who are') || m.includes('founded'))
    return "🏆 **Our Story — A Decade of Excellence**\n\nFounded in **2015** in Nairobi, Kenya, Rural Distributors Enterprises Limited has grown from humble beginnings to become one of Kenya's premier construction specialists.\n\n**What we've achieved:**\n✅ 150+ projects completed\n✅ Private & government clients served\n✅ High-rises, hospitals, roads, substations\n✅ 25MW electrical installations\n✅ Cell towers up to 90 metres\n\n**Our ambition:** East & Central Africa — and beyond! 🌍";
  if (m.includes('mission') || m.includes('vision') || m.includes('value') || m.includes('goal'))
    return "🎯 **Our Purpose & Direction**\n\n**Mission:** To be a world-class construction company forming long-term client relationships — delivering cost-effective services without compromising quality.\n\n**Vision:** To be the leading construction company in our chosen markets, known for reliable execution and world-class technical sophistication.\n\n**Core Values:**\n🔒 Safety First\n⭐ Professionalism\n🤝 Integrity\n💡 Ingenuity\n\nThese aren't just words — they're how we operate every day.";
  if (m.includes('hello') || m.includes('hi') || m.includes('hey') || m.includes('good morning') || m.includes('good afternoon'))
    return "👋 Hello there! Wonderful to meet you!\n\nI'm the RDE virtual assistant, here to help you learn about our construction services, get a quote, find our location, or anything else you need.\n\nWhat can I help you with today? 😊";
  if (m.includes('thank') || m.includes('thanks') || m.includes('appreciate'))
    return "😊 You're very welcome! It's our pleasure to help.\n\nIs there anything else you'd like to know about Rural Distributors Enterprises Limited? We're always happy to assist — whether it's about our services, a new project idea, or just general construction advice! 🏗️";
  if (m.includes('finish') || m.includes('plaster') || m.includes('tile') || m.includes('paint') || m.includes('pav') || m.includes('brick'))
    return "🧱 **Specialist Finishing — Craftsmanship in Every Detail**\n\nOur finishing specialists handle:\n\n• Brickwork & formwork\n• Plastering (internal & external)\n• Concrete floors & slabs\n• Tiling (all surfaces)\n• Interior & exterior painting\n• Paving & hard landscaping\n\nThe details matter. We deliver finishes that last a lifetime and look stunning from day one. ✨";
  return "Thank you for your message! 😊 I want to make sure I give you the most helpful answer possible.\n\nFor detailed or technical enquiries, our team is best placed to assist:\n\n📞 **+254 722 313 131**\n✉️ **ruraldist22@gmail.com**\n\nOr use the **Contact Form** on our website — we respond within 24 hours!\n\nIs there anything else I can help you with right now? 🌟";
}

function formatMessage(text: string) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong style="color:#e8c96a;font-weight:600">$1</strong>')
    .replace(/\n/g, '<br />');
}

function getTimeString() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(false);
  const [unread, setUnread] = useState(0);
  const [showNotif, setShowNotif] = useState(false);
  const [msgReactions, setMsgReactions] = useState<Record<number, string>>({});
  const [reactionPickerFor, setReactionPickerFor] = useState<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const hasOpened = useRef(false);

  // Proactive notification after 4 seconds
  useEffect(() => {
    const t = setTimeout(() => {
      if (!open) { setShowNotif(true); setUnread(1); }
    }, 4000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const addBotMessage = useCallback((text: string, delay = 0) => {
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now() + delay, text, isBot: true, time: getTimeString() }]);
    }, delay);
  }, []);

  // Welcome sequence
  useEffect(() => {
    if (open && !hasOpened.current) {
      hasOpened.current = true;
      setUnread(0);
      setShowNotif(false);

      // Staggered welcome messages
      setTimeout(() => setTyping(true), 300);
      setTimeout(() => {
        setTyping(false);
        setMessages([{
          id: 1,
          text: "👋 **Welcome to Rural Distributors Enterprises Limited!**\n\nI'm **Rafiki**, your personal RDE assistant. I'm here 24/7 to answer any questions about our construction services, help you get a quote, or guide you to the right team. 😊",
          isBot: true,
          time: getTimeString(),
        }]);
      }, 1200);

      setTimeout(() => setTyping(true), 1800);
      setTimeout(() => {
        setTyping(false);
        setMessages(prev => [...prev, {
          id: 2,
          text: "We've been building Kenya's future since **2015** — from towering commercial buildings to highways, electrical systems, and civil infrastructure. 🏗️\n\nWhat can I help you with today?",
          isBot: true,
          time: getTimeString(),
        }]);
        setShowQuickActions(true);
      }, 3000);

      setTimeout(() => inputRef.current?.focus(), 3200);
    }
  }, [open]);

  function sendMessage(text?: string) {
    const msg = (text ?? input).trim();
    if (!msg) return;
    setInput('');
    setShowQuickActions(false);

    const userMsg: Message = { id: Date.now(), text: msg, isBot: false, time: getTimeString() };
    setMessages(prev => [...prev, userMsg]);
    setTyping(true);

    const delay = 800 + Math.random() * 600;
    setTimeout(() => {
      setTyping(false);
      const response = getBotResponse(msg);
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: response,
        isBot: true,
        time: getTimeString(),
      }]);
      // Show quick actions again after every 2nd bot message
      setMessages(prev => {
        const botCount = prev.filter(m => m.isBot).length;
        if (botCount % 3 === 0) setShowQuickActions(true);
        return prev;
      });
    }, delay);
  }

  function handleReaction(msgId: number, emoji: string) {
    setMsgReactions(prev => ({ ...prev, [msgId]: emoji }));
    setReactionPickerFor(null);
  }

  const handleOpen = () => {
    setOpen(true);
    setMinimized(false);
    setUnread(0);
    setShowNotif(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Proactive notification bubble */}
      {showNotif && !open && (
        <div
          className="max-w-[220px] rounded-2xl rounded-br-sm px-4 py-3 text-sm border cursor-pointer shadow-xl"
          style={{
            background: 'rgba(13,27,62,0.97)',
            backdropFilter: 'blur(20px)',
            borderColor: 'rgba(26,107,60,0.4)',
            animation: 'notifPop 0.4s cubic-bezier(0.34,1.56,0.64,1) both',
          }}
          onClick={handleOpen}
        >
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full bg-green-light" style={{ boxShadow: '0 0 6px #22883f', animation: 'pulse 2s infinite' }} />
            <span className="text-xs font-semibold" style={{ color: '#22883f' }}>Rafiki · RDE Assistant</span>
          </div>
          <p className="text-xs leading-relaxed" style={{ color: 'rgba(240,244,255,0.8)' }}>
            👋 Hi! Need help with a construction project? I'm here to assist!
          </p>
          <button
            onClick={(e) => { e.stopPropagation(); setShowNotif(false); setUnread(0); }}
            className="absolute top-2 right-2 text-white/30 hover:text-white/70 transition-colors"
          >
            <X size={12} />
          </button>
        </div>
      )}

      {/* Chat panel */}
      {open && (
        <div
          className="flex flex-col rounded-3xl overflow-hidden border border-glass shadow-2xl"
          style={{
            width: '360px',
            height: minimized ? '72px' : '560px',
            backdropFilter: 'blur(30px)',
            background: 'rgba(11,22,50,0.97)',
            animation: 'chatOpen 0.35s cubic-bezier(0.34,1.56,0.64,1) both',
            transition: 'height 0.35s cubic-bezier(0.34,1.56,0.64,1)',
          }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 p-4 flex-shrink-0 cursor-pointer"
            style={{ background: 'linear-gradient(135deg, rgba(26,107,60,0.3), rgba(13,27,62,0.6))', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
            onClick={() => setMinimized(!minimized)}
          >
            {/* Avatar with pulse ring */}
            <div className="relative flex-shrink-0">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center border-2 overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #1a6b3c, #152547)', borderColor: '#22883f', boxShadow: '0 0 16px rgba(26,107,60,0.4)' }}
              >
                <RdeLogo size={36} />
              </div>
              <div
                className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center"
                style={{ background: '#22883f', borderColor: 'rgba(11,22,50,0.97)' }}
              >
                <Sparkles size={7} color="white" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-sm flex items-center gap-2">
                Rafiki
                <span className="text-[10px] px-2 py-0.5 rounded-full font-medium" style={{ background: 'rgba(26,107,60,0.25)', color: '#22883f' }}>AI</span>
              </div>
              <div className="text-xs flex items-center gap-1.5 mt-0.5" style={{ color: 'rgba(240,244,255,0.5)' }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#22883f', boxShadow: '0 0 5px #22883f' }} />
                RDE Virtual Assistant · Online
              </div>
            </div>
            <div className="flex items-center gap-1">
              <a href="tel:+254722313131"
                onClick={(e) => e.stopPropagation()}
                className="w-8 h-8 rounded-full flex items-center justify-center border transition-all hover:bg-green-pale hover:border-green-light/40"
                style={{ borderColor: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)' }}
                title="Call us">
                <Phone size={13} />
              </a>
              <a href="mailto:ruraldist22@gmail.com"
                onClick={(e) => e.stopPropagation()}
                className="w-8 h-8 rounded-full flex items-center justify-center border transition-all hover:bg-green-pale hover:border-green-light/40"
                style={{ borderColor: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)' }}
                title="Email us">
                <Mail size={13} />
              </a>
              <button onClick={(e) => { e.stopPropagation(); setMinimized(!minimized); }}
                className="w-8 h-8 rounded-full flex items-center justify-center border transition-all hover:bg-green-pale"
                style={{ borderColor: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)' }}>
                <Minimize2 size={13} />
              </button>
              <button onClick={(e) => { e.stopPropagation(); setOpen(false); }}
                className="w-8 h-8 rounded-full flex items-center justify-center border transition-all hover:bg-red-500/20 hover:border-red-400/30"
                style={{ borderColor: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)' }}>
                <X size={13} />
              </button>
            </div>
          </div>

          {!minimized && (
            <>
              {/* Messages */}
              <div
                className="flex-1 overflow-y-auto p-4 flex flex-col gap-3"
                style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(26,107,60,0.3) transparent' }}
              >
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex gap-2.5 ${msg.isBot ? 'items-end' : 'flex-row-reverse items-end'}`}
                    style={{ animation: 'msgIn 0.35s ease both' }}
                  >
                    {/* Bot avatar */}
                    {msg.isBot && (
                      <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden"
                        style={{ background: 'linear-gradient(135deg, #1a6b3c, #152547)', border: '1px solid rgba(34,136,63,0.4)' }}>
                        <RdeLogo size={24} />
                      </div>
                    )}
                    <div className="flex flex-col max-w-[82%]" style={{ alignItems: msg.isBot ? 'flex-start' : 'flex-end' }}>
                      <div
                        className="px-4 py-2.5 text-sm leading-relaxed relative group"
                        style={{
                          borderRadius: msg.isBot ? '18px 18px 18px 4px' : '18px 18px 4px 18px',
                          background: msg.isBot ? 'rgba(255,255,255,0.06)' : 'linear-gradient(135deg, #1a6b3c, #22883f)',
                          border: msg.isBot ? '1px solid rgba(255,255,255,0.07)' : 'none',
                        }}
                        dangerouslySetInnerHTML={{ __html: formatMessage(msg.text) }}
                      />
                      <div className="flex items-center gap-2 mt-1 px-1">
                        <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.25)' }}>{msg.time}</span>
                        {msgReactions[msg.id] && (
                          <span className="text-xs">{msgReactions[msg.id]}</span>
                        )}
                        {msg.isBot && (
                          <button
                            onClick={() => setReactionPickerFor(reactionPickerFor === msg.id ? null : msg.id)}
                            className="text-[10px] opacity-0 hover:opacity-100 transition-opacity text-white/30 hover:text-white/60"
                          >
                            +😊
                          </button>
                        )}
                      </div>
                      {/* Reaction picker */}
                      {reactionPickerFor === msg.id && (
                        <div
                          className="flex gap-1 px-2 py-1.5 rounded-full border mt-1"
                          style={{ background: 'rgba(13,27,62,0.95)', backdropFilter: 'blur(20px)', borderColor: 'rgba(255,255,255,0.1)', animation: 'reactionIn 0.2s ease both' }}
                        >
                          {EMOJI_REACTIONS.map(e => (
                            <button key={e} onClick={() => handleReaction(msg.id, e)}
                              className="text-base hover:scale-125 transition-transform px-0.5">
                              {e}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                {typing && (
                  <div className="flex items-end gap-2.5" style={{ animation: 'msgIn 0.3s ease both' }}>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-sm flex-shrink-0 overflow-hidden"
                      style={{ background: 'linear-gradient(135deg, #1a6b3c, #152547)', border: '1px solid rgba(34,136,63,0.4)' }}>
                      <RdeLogo size={24} />
                    </div>
                    <div className="px-4 py-3 rounded-[18px] rounded-bl-[4px]"
                      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.07)' }}>
                      <div className="flex gap-1.5 items-center h-4">
                        {[0, 1, 2].map(i => (
                          <div key={i} className="w-1.5 h-1.5 rounded-full"
                            style={{ background: '#22883f', animation: `typingBounce 1.2s ${i * 0.2}s ease-in-out infinite` }} />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Quick actions */}
                {showQuickActions && !typing && messages.length > 0 && (
                  <div style={{ animation: 'msgIn 0.4s 0.2s ease both' }}>
                    <div className="text-[10px] uppercase tracking-widest mb-2 px-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
                      Quick questions
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {QUICK_ACTIONS.map((a) => (
                        <button
                          key={a.label}
                          onClick={() => sendMessage(a.query)}
                          className="flex items-center gap-2 px-3 py-2.5 rounded-xl border text-left text-xs font-medium transition-all hover:scale-[1.02]"
                          style={{
                            background: 'rgba(26,107,60,0.12)',
                            borderColor: 'rgba(26,107,60,0.25)',
                            color: 'rgba(240,244,255,0.8)',
                          }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(26,107,60,0.25)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(34,136,63,0.5)'; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(26,107,60,0.12)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(26,107,60,0.25)'; }}
                        >
                          <span className="text-base leading-none">{a.icon}</span>
                          <span className="leading-tight">{a.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input area */}
              <div className="p-3 flex-shrink-0" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="flex gap-2 items-center">
                  <input
                    ref={inputRef}
                    className="flex-1 rounded-full px-4 py-2.5 text-sm text-white placeholder:text-white/25 outline-none transition-all"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                    placeholder="Ask Rafiki anything..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                    onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = 'rgba(34,136,63,0.5)'; (e.target as HTMLInputElement).style.boxShadow = '0 0 0 3px rgba(26,107,60,0.12)'; }}
                    onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.08)'; (e.target as HTMLInputElement).style.boxShadow = 'none'; }}
                  />
                  <button
                    onClick={() => sendMessage()}
                    disabled={!input.trim()}
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 disabled:opacity-40"
                    style={{ background: 'linear-gradient(135deg, #1a6b3c, #22883f)', boxShadow: input.trim() ? '0 4px 15px rgba(26,107,60,0.5)' : 'none' }}
                    onMouseEnter={(e) => { if (input.trim()) (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.1)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = ''; }}
                  >
                    <Send size={15} />
                  </button>
                </div>
                <div className="text-center mt-2">
                  <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.2)' }}>
                    Powered by RDE · ruraldist22@gmail.com
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* Trigger button */}
      <button
        onClick={open ? () => setOpen(false) : handleOpen}
        className="relative w-14 h-14 rounded-full flex items-center justify-center text-white transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg, #1a6b3c, #22883f)',
          boxShadow: '0 8px 30px rgba(26,107,60,0.5)',
          animation: open ? 'none' : 'pulseGlow 3s ease-in-out infinite',
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.1)'; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = ''; }}
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        <div style={{ transition: 'transform 0.3s, opacity 0.3s', transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }}>
          {open ? <X size={22} /> : <MessageCircle size={22} />}
        </div>
        {/* Unread badge */}
        {!open && unread > 0 && (
          <div
            className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
            style={{ background: '#e8c96a', color: '#0d1b3e', animation: 'notifBadge 0.4s cubic-bezier(0.34,1.56,0.64,1) both' }}
          >
            {unread}
          </div>
        )}
      </button>

      <style>{`
        @keyframes chatOpen {
          from { opacity:0; transform:scale(0.85) translateY(24px); }
          to   { opacity:1; transform:scale(1) translateY(0); }
        }
        @keyframes msgIn {
          from { opacity:0; transform:translateY(12px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes notifPop {
          from { opacity:0; transform:scale(0.8) translateY(12px); }
          to   { opacity:1; transform:scale(1) translateY(0); }
        }
        @keyframes notifBadge {
          from { transform:scale(0); }
          to   { transform:scale(1); }
        }
        @keyframes reactionIn {
          from { opacity:0; transform:scale(0.8) translateY(4px); }
          to   { opacity:1; transform:scale(1) translateY(0); }
        }
        @keyframes typingBounce {
          0%,80%,100% { transform:translateY(0); }
          40%          { transform:translateY(-6px); }
        }
        @keyframes pulseGlow {
          0%,100% { box-shadow:0 8px 30px rgba(26,107,60,0.5); }
          50%      { box-shadow:0 8px 50px rgba(26,107,60,0.8), 0 0 0 10px rgba(26,107,60,0.08); }
        }
        @keyframes pulse {
          0%,100% { opacity:1; }
          50%      { opacity:0.3; }
        }
      `}</style>
    </div>
  );
}
