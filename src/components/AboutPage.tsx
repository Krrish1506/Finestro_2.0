import { Target, Eye, Users, Award, TrendingUp, Heart, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "framer-motion";

export function AboutPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const teamMembers = [
    {
      name: "Siddhant Acharya",
      role: "Founder & CEO",
      bio: "15+ years in insurance technology. Former VP at major insurance tech firm."
    },
    {
      name: "Nischal Sharma",
      role: "Co-Founder & CTO",
      bio: "Technology visionary with deep expertise in building scalable fintech platforms."
    },
    {
      name: "Mandar Yagnik",
      role: "Co-Founder & COO",
      bio: "Operations expert focused on streamlining workflows and business growth."
    },
    {
      name: "Devam Patel",
      role: "Chief Product Officer",
      bio: "Product strategist with expertise in fintech and agent workflow optimization."
    },
    {
      name: "Krrish Shah",
      role: "Head of Engineering",
      bio: "Security-first architect with 12 years building compliant financial platforms."
    },
    {
      name: "Vivek Rawal",
      role: "Head of Customer Success",
      bio: "Former insurance agent turned customer advocate. Passionate about agent success."
    }
  ];

  const successStories = [
    {
      agent: "Ramesh Kumar, Chennai",
      metric: "300% Growth",
      story: "Increased client base from 50 to 200 within 8 months using Finestro's marketing toolkit and automated follow-ups.",
      icon: TrendingUp
    },
    {
      agent: "Anjali Singh, Pune",
      metric: "5 Hours Saved Daily",
      story: "Eliminated manual paperwork and document tracking, now focuses entirely on client relationships and sales.",
      icon: Award
    },
    {
      agent: "Mohammed Ahmed, Hyderabad",
      metric: "98% Client Retention",
      story: "Automated renewal reminders and proactive claim tracking resulted in exceptional client satisfaction and loyalty.",
      icon: Heart
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative text-white overflow-hidden min-h-[80vh] flex items-center px-4 sm:px-6 lg:px-8"
        style={{
          background: 'linear-gradient(160deg, #0a1628 0%, #0052CC 35%, #0059E6 65%, #0066FF 100%)',
          paddingTop: '72px',
          paddingBottom: '80px',
        }}
      >
        {/* Animated background orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-20 right-10 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/10 to-transparent blur-[150px] rounded-full animate-pulse-soft" />
          <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-gradient-to-tr from-blue-400/10 via-blue-500/5 to-transparent blur-[160px] rounded-full" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)]" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/40 text-white text-[10px] font-black uppercase tracking-widest mb-8 backdrop-blur-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Sparkles className="size-4" />
              <span>Our Journey</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight font-heading drop-shadow-lg" style={{ color: '#F0F9FF', textShadow: '0 2px 20px rgba(0,0,0,0.35)' }}>
              About{' '}
              <span style={{
                background: 'linear-gradient(90deg, #7DD3FC 0%, #38BDF8 50%, #BAE6FD 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 20px rgba(125,211,252,0.45))'
              }}>
                Finestro
              </span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed" style={{ color: 'rgba(224,242,254,0.92)', textShadow: '0 1px 8px rgba(0,0,0,0.25)' }}>
              Empowering insurance and mutual fund agents across India with world-class technology that simplifies, automates, and accelerates growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {[
              { icon: Target, title: "Our Mission", desc: "To transform how insurance and mutual fund agents work in India by providing an all-in-one platform that eliminates administrative burden and enhances client relationships." },
              { icon: Eye, title: "Our Vision", desc: "To become India's most trusted workflow platform for insurance agents, enabling every agent to deliver exceptional service and build thriving, independent businesses." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="rounded-[2.5rem] border border-slate-200/50 shadow-ambient-lg p-8 lg:p-12 h-full bg-white group hover:shadow-2xl hover:-translate-y-2 hover:shadow-blue-500/15 hover:border-blue-200 transition-all duration-500">
                  <CardHeader className="p-0 mb-8">
                    <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                      <item.icon className="h-10 w-10" strokeWidth={1.5} />
                    </div>
                    <CardTitle className="text-4xl font-black text-slate-900 tracking-tight font-heading">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-slate-500 text-lg font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-500 text-[10px] font-black uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                FOUNDED IN 2023
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight leading-[1.1]">The Finestro Story</h2>
              <div className="space-y-6 text-slate-500 text-lg font-medium leading-relaxed">
                <p>
                  Finestro was born from a simple observation: insurance agents in India are incredibly hardworking, yet they spend most of their time on paperwork instead of building relationships.
                </p>
                <p>
                  In 2023, we assembled a team of insurance experts, engineers, and product designers to build a platform designed from the ground up for the Indian ecosystem.
                </p>
                <div className="p-8 bg-blue-50/50 rounded-[2rem] border border-blue-100 relative mt-8">
                  <div className="absolute top-0 left-8 -translate-y-1/2 text-6xl text-blue-200 font-serif leading-none">"</div>
                  <p className="italic text-slate-700 font-bold text-xl relative z-10">
                    Our goal is to give every agent the same technological advantages as a large corporate brokerage.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent blur-3xl -z-10 rounded-[4rem]"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1690264421892-46e3af5c3455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjAxODg1MDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Finestro Team"
                className="rounded-[3rem] shadow-ambient-lg border border-slate-200 relative z-10 w-full object-cover aspect-square"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Leadership</h2>
            <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
              Experienced professionals committed to agent success and technological innovation.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="rounded-[2.5rem] border border-slate-200/50 shadow-sm h-full group hover:shadow-2xl hover:border-blue-200 hover:-translate-y-2 hover:shadow-blue-500/15 transition-all duration-500 bg-white">
                  <CardHeader className="p-8 lg:p-10 pb-6 border-b border-slate-50">
                    <div className="w-20 h-20 rounded-full bg-slate-100 mb-6 flex items-center justify-center text-slate-400 font-black text-2xl group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                      {member.name.charAt(0)}
                    </div>
                    <CardTitle className="text-2xl font-black text-slate-900 tracking-tight">{member.name}</CardTitle>
                    <CardDescription className="text-blue-600 font-black text-[10px] uppercase tracking-widest mt-2">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-8 lg:p-10 pt-6">
                    <p className="text-slate-500 font-medium leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest backdrop-blur-md mb-6">
              <Award className="size-3" />
              <span>Proven Results</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-6 tracking-tight">Agent Success Stories</h2>
            <p className="text-xl text-blue-700/80 font-medium max-w-2xl mx-auto">
              Real results from modern agents scaling their advisory businesses across India.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="rounded-[2.5rem] border border-blue-100 bg-white shadow-ambient h-full group hover:shadow-2xl hover:-translate-y-2 hover:shadow-blue-500/15 hover:border-blue-300 transition-all duration-500 p-8 lg:p-10">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                    <story.icon className="h-8 w-8" strokeWidth={2} />
                  </div>
                  <h3 className="text-5xl font-black text-blue-800 mb-4 tracking-tighter">{story.metric}</h3>
                  <div className="w-12 h-1 bg-slate-200 rounded-full mb-8 group-hover:w-full group-hover:bg-blue-500 transition-all duration-500" />
                  <p className="text-slate-600 font-medium leading-relaxed italic text-lg mb-8">"{story.story}"</p>
                  <p className="text-blue-600 font-black uppercase tracking-widest text-[10px]">{story.agent}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {[
              { icon: Users, title: "Agent-First", desc: "Every feature we build starts with deep empathy for the agent's workflow." },
              { icon: Award, title: "Excellence", desc: "We deliver the highest quality horizontal infrastructure for finance professionals." },
              { icon: Heart, title: "Integrity", desc: "Security, compliance, and trust are at the heart of our data operations." }
            ].map((value, i) => (
              <motion.div 
                key={i} 
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-24 h-24 bg-slate-50 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:shadow-ambient group-hover:bg-blue-50 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 border border-slate-100">
                  <value.icon className="h-10 w-10 text-slate-400 group-hover:text-blue-600 transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-4">{value.title}</h3>
                <p className="text-slate-500 font-medium text-lg leading-relaxed px-4">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
