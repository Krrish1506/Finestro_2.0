import { Target, Eye, Users, Award, TrendingUp, Heart, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "framer-motion";

export function AboutPage() {
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
        className="relative text-white pt-16 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[60vh] flex items-center"
        style={{
          background: 'linear-gradient(to bottom, #0052CC 0%, #0059E6 50%, #0066FF 100%)'
        }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-30">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/40 text-white text-[10px] font-black uppercase tracking-widest mb-8 backdrop-blur-md">
              <Sparkles className="size-4" />
              <span>Our Journey</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight font-heading drop-shadow-lg">
              About <span className="text-cyan-100 italic">Finestro</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow">
              Empowering insurance and mutual fund agents across India with world-class technology that simplifies, automates, and accelerates growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
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
                <Card className="rounded-xl border-border shadow-floating p-4 h-full bg-white/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/5 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-primary/10">
                      <item.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                    </div>
                    <CardTitle className="text-3xl font-bold text-secondary uppercase tracking-tight font-heading">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-lg font-medium leading-relaxed">
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
      <section className="py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight leading-[1.1]">The Finestro Story</h2>
              <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed">
                <p>
                  Finestro was born from a simple observation: insurance agents in India are incredibly hardworking, yet they spend most of their time on paperwork instead of building relationships.
                </p>
                <p>
                  In 2023, we assembled a team of insurance experts, engineers, and product designers to build a platform designed from the ground up for the Indian ecosystem.
                </p>
                <p className="p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-600 italic text-slate-800">
                  "Our goal is to give every agent the same technological advantages as a large corporate brokerage."
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-blue-500/10 blur-3xl -z-10 rounded-full"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1690264421892-46e3af5c3455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjAxODg1MDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Finestro Team"
                className="rounded-[3rem] shadow-ambient-lg border border-slate-200"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Leadership</h2>
            <p className="text-xl text-slate-600 font-medium">
              Experienced professionals committed to agent success.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="glass relative rounded-[2rem] border-slate-200/50 shadow-ambient h-full group hover:bg-white transition-colors">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-slate-900">{member.name}</CardTitle>
                    <CardDescription className="text-blue-600 font-bold text-xs uppercase tracking-wider">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 font-medium leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight font-heading uppercase">Agent Success Stories</h2>
            <p className="text-xl text-slate-300 font-medium leading-relaxed">
              Real results from modern agents across India.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-md border-white/10 rounded-xl shadow-floating p-2 h-full">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary text-white rounded-xl flex items-center justify-center mb-6 shadow-primary/20 shadow-lg">
                      <story.icon className="h-7 w-7" strokeWidth={1.5} />
                    </div>
                    <CardTitle className="text-3xl font-bold text-primary italic mb-2 tracking-tighter">{story.metric}</CardTitle>
                    <CardDescription className="text-slate-300 font-bold uppercase tracking-widest text-[10px]">{story.agent}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 font-medium leading-relaxed italic text-lg opacity-90">"{story.story}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
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
              >
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-ambient group-hover:shadow-ambient-lg transition-all duration-300 border border-slate-100">
                  <value.icon className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 font-medium text-lg leading-relaxed">
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
