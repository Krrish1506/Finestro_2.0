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
        className="relative text-white overflow-hidden flex flex-col justify-center px-6 md:px-8 pt-32 pb-24 md:pb-32 mb-16 md:mb-24"
        style={{
          background: 'linear-gradient(160deg, #0a1628 0%, #0052CC 35%, #0059E6 65%, #0066FF 100%)',
        }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-20 right-10 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/10 to-transparent blur-[150px] rounded-full animate-pulse-soft" />
          <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-gradient-to-tr from-blue-400/10 via-blue-500/5 to-transparent blur-[160px] rounded-full" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)]" />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/40 text-white text-[10px] font-black uppercase tracking-widest mb-10 backdrop-blur-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Sparkles className="size-4" />
              <span>Our Journey</span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-10 tracking-tight font-heading drop-shadow-lg" style={{ color: '#F0F9FF', textShadow: '0 2px 20px rgba(0,0,0,0.35)' }}>
              About{' '}
              <span className="text-blue-200">
                Finestro
              </span>
            </h1>
            <p className="text-lg md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed" style={{ color: 'rgba(224,242,254,0.92)' }}>
              Empowering insurance and mutual fund agents across India with world-class technology that simplifies, automates, and accelerates growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 mb-16 md:mb-24 px-6 md:px-8 bg-slate-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
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
                <Card className="rounded-2xl border border-slate-200 shadow-md p-8 md:p-10 h-full bg-white transition-all duration-300">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                    <item.icon className="h-8 w-8" strokeWidth={2} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {item.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 mb-16 md:mb-24 px-6 md:px-8 bg-white overflow-hidden relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-500 text-[10px] font-black uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                FOUNDED IN 2023
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 tracking-tight">The Finestro Story</h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Finestro was born from a simple observation: insurance agents in India are incredibly hardworking, yet they spend most of their time on paperwork instead of building relationships.
                </p>
                <p>
                  In 2023, we assembled a team of insurance experts, engineers, and product designers to build a platform designed from the ground up for the Indian ecosystem.
                </p>
                <div className="p-8 bg-blue-50/50 rounded-2xl border-l-4 border-blue-500 mt-8">
                  <p className="italic text-slate-800 font-semibold text-xl">
                    Our goal is to give every agent the same technological advantages as a large corporate brokerage.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1690264421892-46e3af5c3455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjAxODg1MDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Finestro Team"
                className="rounded-3xl shadow-lg border border-slate-200 w-full object-cover aspect-square"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24 mb-16 md:mb-24 px-6 md:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Leadership</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
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
                <Card className="rounded-2xl border border-slate-200 shadow-md p-8 bg-white h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
                  <div className="w-20 h-20 rounded-full bg-slate-100 mx-auto mb-6 flex items-center justify-center text-slate-400 font-bold text-2xl">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">{member.role}</p>
                  <p className="text-slate-600 leading-relaxed text-sm">{member.bio}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-24 mb-16 md:mb-24 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6">
              <Award className="size-4" />
              <span>Proven Results</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Agent Success Stories</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
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
                <Card className="rounded-2xl border border-slate-200 bg-slate-50 shadow-md h-full p-8 hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <story.icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <h3 className="text-3xl font-bold text-blue-800 mb-6 tracking-tight">{story.metric}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed italic mb-8">"{story.story}"</p>
                  <p className="text-blue-600 font-bold text-sm tracking-wide">{story.agent}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: Users, title: "Agent-First", desc: "Every feature we build starts with deep empathy for the agent's workflow." },
              { icon: Award, title: "Excellence", desc: "We deliver the highest quality horizontal infrastructure for finance professionals." },
              { icon: Heart, title: "Integrity", desc: "Security, compliance, and trust are at the heart of our data operations." }
            ].map((value, i) => (
              <motion.div 
                key={i} 
                className="text-center bg-white p-8 rounded-2xl shadow-md border border-slate-200 hover:-translate-y-1 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <value.icon className="h-8 w-8 text-blue-600" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
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
