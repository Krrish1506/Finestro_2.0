import { CheckCircle, Users, TrendingUp, Shield, FileText, Bell, BarChart, Share2, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "framer-motion";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    {
      icon: Users,
      title: "Centralized Client Management",
      description: "Manage all your clients, policies, and interactions in one unified platform."
    },
    {
      icon: FileText,
      title: "Document Management",
      description: "Secure storage for KYC documents, policy papers, and health cards with easy access."
    },
    {
      icon: TrendingUp,
      title: "Sales Analytics",
      description: "Track your performance with real-time insights and downloadable reports."
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Never miss a renewal or claim deadline with automated notifications."
    },
    {
      icon: BarChart,
      title: "Quote Comparison",
      description: "Compare policies across multiple providers to offer the best solutions."
    },
    {
      icon: Share2,
      title: "Marketing Toolkit",
      description: "Generate social media content and pamphlets to grow your business."
    }
  ];

  const testimonials = [
    {
      name: "Rajiv Shukla",
      role: "Senior Insurance Agent, Ahmedabad",
      quote: "Finestro transformed my workflow. I now manage 3x more clients with half the effort. The automated reminders alone saved me countless hours."
    },
    {
      name: "Priya Sharma",
      role: "Mutual Fund Advisor, Surat",
      quote: "The marketing toolkit is a game-changer. I can create professional social media posts in minutes and my client base has grown by 40%."
    },
    {
      name: "Amit Patel",
      role: "Insurance Agent, Baroda",
      quote: "Document management was always a headache. Now everything is organized, secure, and accessible from anywhere. Highly recommended!"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section — starts flush after 72px sticky nav */}
      <section 
        id="home"
        className="relative text-white pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[100vh] flex items-center"
        style={{
          background: 'linear-gradient(160deg, #0a1628 0%, #0052CC 35%, #0059E6 65%, #0066FF 100%)',
          paddingTop: '56px',
        }}
      >
        {/* Premium animated background elements - SUBTLE & BELOW CONTENT */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {/* Animated grid pattern - VERY SUBTLE */}
          <div className="absolute inset-0 bg-[linear-gradient(0_1px_0_rgba(59,130,246,0.05),0_0_0_rgba(59,130,246,0.05))] bg-[size:100%_2px] opacity-30"></div>
          
          {/* Animated gradient orbs - VERY FAINT */}
          <div className="absolute top-20 right-10 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/10 to-transparent blur-[150px] rounded-full animate-pulse-soft" style={{ pointerEvents: 'none' }}></div>
          <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-gradient-to-tr from-blue-400/10 via-blue-500/5 to-transparent blur-[160px] rounded-full" style={{ pointerEvents: 'none' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-400/5 to-blue-500/5 blur-[200px] rounded-full" style={{ pointerEvents: 'none' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Premium badge */}
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/40 text-white text-xs font-bold uppercase tracking-widest mb-16 backdrop-blur-md"
                initial={{ opacity: 0, y: -20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.08, y: -2 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="size-4 text-white" />
                </motion.div>
                <span>Modernizing Indian Fintech</span>
              </motion.div>

              {/* Main heading with enhanced styling */}
              <motion.h1 
                className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-black mb-6 leading-[1.15] tracking-tight"
                style={{ color: '#F0F9FF', textShadow: '0 2px 20px rgba(0,0,0,0.35)' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
              >
                <motion.span 
                  className="block"
                  style={{ color: '#FFFFFF' }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Streamline Your
                </motion.span>
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <span style={{
                    background: 'linear-gradient(90deg, #7DD3FC 0%, #38BDF8 50%, #BAE6FD 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 0 20px rgba(125,211,252,0.45))'
                  }}>
                    Insurance Business
                  </span>
                </motion.span>
              </motion.h1>

              {/* Enhanced subheading */}
              <motion.p 
                className="text-lg md:text-xl mb-16 leading-loose max-w-2xl font-medium"
                style={{ color: 'rgba(224, 242, 254, 0.92)', textShadow: '0 1px 8px rgba(0,0,0,0.25)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                The all-in-one infrastructure for agents across India. Manage clients, track claims, and grow your revenue with professional digital tools built for scale.
              </motion.p>

              {/* CTA Buttons — pill-shaped, generously spaced */}
              <motion.div 
                className="flex flex-col sm:flex-row items-center gap-12 pt-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                {/* Primary — white pill */}
                <motion.button
                  type="button"
                  onClick={() => onNavigate("auth")}
                  whileHover={{ scale: 1.04, y: -3 }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    height: '56px',
                    padding: '0 36px',
                    borderRadius: '9999px',
                    background: '#ffffff',
                    color: '#1d4ed8',
                    fontSize: '15px',
                    fontWeight: 700,
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 0 0 0 rgba(255,255,255,0), 0 8px 32px rgba(0,0,0,0.25)',
                    letterSpacing: '0.01em',
                    whiteSpace: 'nowrap',
                    transition: 'box-shadow 0.25s ease',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 28px rgba(255,255,255,0.55), 0 8px 32px rgba(0,0,0,0.25)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 0 0 rgba(255,255,255,0), 0 8px 32px rgba(0,0,0,0.25)'; }}
                >
                  Start Free Trial
                  <ArrowRight size={18} style={{ transition: 'transform 0.2s' }} />
                </motion.button>

                {/* Secondary — glass pill */}
                <motion.button
                  type="button"
                  onClick={() => onNavigate("products")}
                  whileHover={{ scale: 1.04, y: -3 }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    height: '56px',
                    padding: '0 36px',
                    borderRadius: '9999px',
                    background: 'rgba(255,255,255,0.12)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    color: '#ffffff',
                    fontSize: '15px',
                    fontWeight: 600,
                    border: '1.5px solid rgba(255,255,255,0.45)',
                    cursor: 'pointer',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12)',
                    letterSpacing: '0.01em',
                    whiteSpace: 'nowrap',
                    transition: 'background 0.25s ease, border-color 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.20)';
                    (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.70)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.12)';
                    (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.45)';
                  }}
                >
                  Explore Products
                  <ArrowRight size={18} style={{ opacity: 0.80 }} />
                </motion.button>
              </motion.div>

              {/* Trust indicators — stat strip */}
              <motion.div 
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '0',
                  marginTop: '52px',
                  paddingTop: '28px',
                  borderTop: '1px solid rgba(255,255,255,0.15)',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                {[
                  { value: '5000+', label: 'Active Agents', color: '#ffffff' },
                  { value: '₹500Cr+', label: 'Policies Managed', color: '#bae6fd' },
                  { value: '99.9%', label: 'Uptime', color: '#ffffff' },
                ].map((stat, i) => (
                  <div key={stat.label} style={{ display: 'flex', alignItems: 'center' }}>
                    {i > 0 && <div style={{ width: '1px', height: '48px', background: 'rgba(255,255,255,0.18)', margin: '0 32px' }} />}
                    <motion.div
                      style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + i * 0.12, duration: 0.6 }}
                    >
                      <div style={{ fontSize: '32px', fontWeight: 900, color: stat.color, letterSpacing: '-0.03em', lineHeight: 1 }}>{stat.value}</div>
                      <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.65)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{stat.label}</div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
              className="relative hidden lg:block"
            >
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/40 via-blue-400/20 to-transparent blur-4xl -z-10 rounded-[3rem]"></div>
              
              {/* Main image with premium styling */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: -10 }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1660099501266-f18132684a57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBpbnN1cmFuY2UlMjBhZ2VudCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2MDI2MTk1N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Finestro Digital Workspace"
                  className="rounded-[2.5rem] shadow-2xl border border-white/20 bg-white/5 backdrop-blur-sm"
                />
              </motion.div>

              {/* Floating card 1 - Enhanced */}
              <motion.div 
                className="absolute -bottom-8 -left-8 glass rounded-2xl shadow-2xl shadow-blue-500/30 border border-blue-300/20 p-5 backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5"
                initial={{ opacity: 0, x: -40, y: 40 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-12">
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white font-bold shadow-lg"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    ✓
                  </motion.div>
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Success</div>
                    <div className="text-sm font-bold text-white">Renewal Automated</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating card 2 - New */}
              <motion.div 
                className="absolute top-20 right-0 glass rounded-2xl shadow-2xl shadow-blue-600/30 border border-blue-300/20 p-5 backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5"
                initial={{ opacity: 0, x: 40, y: -40 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-12">
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    📈
                  </motion.div>
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Growth</div>
                    <div className="text-sm font-bold text-white">+42% Revenue</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating card 3 - New */}
              <motion.div 
                className="absolute bottom-32 -right-8 glass rounded-2xl shadow-2xl shadow-blue-500/30 border border-blue-300/20 p-5 backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5"
                initial={{ opacity: 0, x: 40, y: 40 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-12">
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity }}
                  >
                    🔒
                  </motion.div>
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Security</div>
                    <div className="text-sm font-bold text-white">Bank-Grade Encryption</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points Solved */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Enterprise Infrastructure for Individual Agents</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium lead-relaxed">
              We solve the messy spreadsheets and manual follow-ups that slow down your growth.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Scattered Information", desc: "Bring all KYC, policies, and emails into one encrypted workspace." },
              { title: "Missed Renewals", desc: "Automated WhatsApp and SMS alerts ensure you never miss a client deadline." },
              { title: "Manual Marketing", desc: "Generate premium social media content and pamphlets in seconds." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="glass relative rounded-3xl border-slate-200/50 shadow-ambient overflow-hidden h-full group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 hover:shadow-blue-500/10">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-slate-900">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 font-medium leading-loose">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section 
        id="features"
        className="py-32 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Built for Growth</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
              Everything you need to manage and scale your insurance business in one unified vertical.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="flex gap-10 items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center shadow-inner">
                    <feature.icon className="h-7 w-7 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 font-medium leading-loose">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section 
        id="products"
        className="py-32 px-4 sm:px-6 lg:px-8 bg-blue-50/20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-10 tracking-tight leading-[1.1]">Built Specifically for the Indian Market</h2>
              <div className="space-y-6">
                {[
                  "IRDAI Compliant Infrastructure",
                  "Aadhaar, PAN & KYC OCR Automation",
                  "Indian Payment Gateway Support",
                  "Vernacular Language Content Generation"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-12">
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white">
                      <CheckCircle className="size-4" />
                    </div>
                    <span className="text-lg font-bold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1748609339084-ea43ec1b8fbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzYwMjUxMjYxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Indian Fintech Analytics"
                className="rounded-[3rem] shadow-ambient-lg border border-slate-200"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Trusted by 5,000+ Agents</h2>
            <p className="text-xl text-slate-600 font-medium">
              Join the new generation of digital-first insurance experts.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass relative rounded-3xl border-slate-200/50 shadow-ambient-lg p-2 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 hover:shadow-blue-500/10">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-slate-900">{testimonial.name}</CardTitle>
                    <CardDescription className="text-blue-600 font-bold text-xs uppercase tracking-wider">{testimonial.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 font-medium italic leading-loose text-lg">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section — premium dark navy redesign */}
      <section
        id="contact"
        className="relative overflow-hidden"
        style={{ background: '#0B1120', padding: '120px 16px' }}
      >
        {/* Ambient glow orbs */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-80px', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '500px', background: 'radial-gradient(ellipse, rgba(59,130,246,0.18) 0%, transparent 70%)', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: '-60px', left: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)' }} />
          <div style={{ position: 'absolute', bottom: '-60px', right: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)' }} />
          {/* Subtle dot grid */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(148,163,184,0.06) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        </div>

        <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '8px 18px', borderRadius: '9999px',
              background: 'rgba(59,130,246,0.14)',
              border: '1px solid rgba(59,130,246,0.35)',
              color: '#93c5fd', fontSize: '11px', fontWeight: 700,
              letterSpacing: '0.10em', textTransform: 'uppercase',
              backdropFilter: 'blur(12px)', marginBottom: '36px',
            }}
          >
            <Sparkles size={13} />
            Ready to Transform?
          </motion.div>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: '#F0F9FF',
              marginBottom: '24px',
              textShadow: '0 2px 24px rgba(0,0,0,0.40)',
            }}
          >
            Ready to{' '}
            <span style={{
              background: 'linear-gradient(90deg, #7DD3FC 0%, #38BDF8 50%, #60A5FA 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 24px rgba(56,189,248,0.50))',
            }}>
              Digitize
            </span>{' '}
            Your<br />Insurance Business?
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: '18px', lineHeight: 1.7, fontWeight: 400,
              color: 'rgba(186,230,253,0.80)',
              maxWidth: '580px', margin: '0 auto 56px',
              textShadow: '0 1px 8px rgba(0,0,0,0.25)',
            }}
          >
            Join thousands of modern agents already scaling their operations with Finestro. Start for free, upgrade as you grow.
          </motion.p>

          {/* Three glassmorphic feature cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '52px' }}>
            {[
              { icon: '💳', title: 'No Credit Card', sub: 'Sign up instantly' },
              { icon: '⚡', title: '14-Day Free Trial', sub: 'Full access, zero risk' },
              { icon: '🎯', title: 'Expert Onboarding', sub: 'Dedicated support' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(59,130,246,0.25)' }}
                style={{
                  padding: '20px 16px',
                  borderRadius: '18px',
                  background: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.06)',
                  display: 'flex',
                  flexDirection: 'column' as const,
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease',
                }}
              >
                <span style={{ fontSize: '26px', lineHeight: 1 }}>{item.icon}</span>
                <span style={{ fontSize: '14px', fontWeight: 700, color: '#e0f2fe', letterSpacing: '0.01em' }}>{item.title}</span>
                <span style={{ fontSize: '12px', color: 'rgba(148,163,184,0.70)', fontWeight: 400 }}>{item.sub}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '36px' }}
          >
            <motion.button
              type="button"
              onClick={() => onNavigate("auth")}
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.96 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                height: '56px', padding: '0 40px', borderRadius: '9999px',
                background: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 60%, #60a5fa 100%)',
                color: '#fff', fontSize: '15px', fontWeight: 700, border: 'none', cursor: 'pointer',
                boxShadow: '0 0 20px rgba(59,130,246,0.55), 0 8px 32px rgba(59,130,246,0.30), inset 0 1px 0 rgba(255,255,255,0.15)',
                transition: 'box-shadow 0.25s ease',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 36px rgba(59,130,246,0.80), 0 8px 40px rgba(59,130,246,0.45), inset 0 1px 0 rgba(255,255,255,0.20)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 20px rgba(59,130,246,0.55), 0 8px 32px rgba(59,130,246,0.30), inset 0 1px 0 rgba(255,255,255,0.15)'; }}
            >
              Start Your Free Trial
              <ArrowRight size={18} />
            </motion.button>

            <motion.button
              type="button"
              onClick={() => onNavigate("contact")}
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.96 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                height: '56px', padding: '0 40px', borderRadius: '9999px',
                background: 'rgba(255,255,255,0.07)',
                backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
                color: '#e0f2fe', fontSize: '15px', fontWeight: 600,
                border: '1.5px solid rgba(255,255,255,0.18)', cursor: 'pointer',
                transition: 'background 0.25s, border-color 0.25s',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.13)';
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.35)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.07)';
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.18)';
              }}
            >
              Schedule a Demo
              <ArrowRight size={18} style={{ opacity: 0.75 }} />
            </motion.button>
          </motion.div>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            style={{ fontSize: '13px', color: 'rgba(100,116,139,0.75)', fontWeight: 500, letterSpacing: '0.02em' }}
          >
            ✓ Used by 5000+ agents across India &nbsp;•&nbsp; ✓ Zero setup cost &nbsp;•&nbsp; ✓ IRDAI Compliant
          </motion.p>
        </div>
      </section>
    </div>
  );
}


