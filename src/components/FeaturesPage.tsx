import { Brain, TrendingUp, Bell, Target, FileText, Scan, LayoutDashboard, Shield, Zap, Database, Sparkles, Wand2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { motion } from "framer-motion";

export function FeaturesPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const features = [
    {
      icon: Brain,
      title: "AI-Driven Analytics",
      description: "Leverage machine learning to identify sales opportunities, predict client needs, and optimize your portfolio performance.",
      benefits: [
        "Predictive client behavior analysis",
        "Automated risk assessment",
        "Smart policy recommendations",
        "Market trend forecasting"
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Target,
      title: "Claim Tracking",
      description: "Real-time claim status monitoring with automated updates and proactive issue resolution.",
      benefits: [
        "Multi-stage progress visualization",
        "Automated status notifications",
        "Document requirement alerts",
        "Expected settlement timeline"
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Bell,
      title: "Renewal Reminders",
      description: "Never miss a renewal with intelligent, multi-channel notification system.",
      benefits: [
        "SMS, Email, WhatsApp alerts",
        "Customizable reminder schedules",
        "Client preference tracking",
        "Bulk reminder campaigns"
      ],
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: TrendingUp,
      title: "Personalized Recommendations",
      description: "AI-powered suggestions tailored to each client's life stage, risk profile, and financial goals.",
      benefits: [
        "Life event-based recommendations",
        "Coverage gap analysis",
        "Cross-sell opportunities",
        "Premium optimization suggestions"
      ],
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: FileText,
      title: "Automated Reporting",
      description: "Generate comprehensive reports instantly with customizable templates and automated distribution.",
      benefits: [
        "One-click report generation",
        "Scheduled report delivery",
        "Custom report templates",
        "Multi-format exports (PDF, Excel)"
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Scan,
      title: "OCR-Based Document Scanning",
      description: "Extract data from documents automatically with advanced optical character recognition technology.",
      benefits: [
        "Instant data extraction from IDs",
        "Automatic form population",
        "Multi-language support",
        "99.5% accuracy rate"
      ],
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: LayoutDashboard,
      title: "Customizable Dashboards",
      description: "Build your perfect workspace with drag-and-drop widgets and personalized views.",
      benefits: [
        "Drag-and-drop interface",
        "20+ widget types",
        "Multiple dashboard profiles",
        "Real-time data updates"
      ],
      color: "text-cyan-600",
      bgColor: "bg-cyan-50"
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Automate repetitive tasks and streamline your daily operations with smart workflows.",
      benefits: [
        "Custom automation rules",
        "Trigger-based actions",
        "Multi-step workflows",
        "Integration with external tools"
      ],
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    }
  ];

  const useCases = [
    {
      title: "New Client Onboarding",
      steps: [
        "OCR scans Aadhaar/PAN automatically",
        "AI validates documents and flags issues",
        "System recommends suitable policies",
        "Automated welcome email sent",
        "Renewal reminder scheduled"
      ]
    },
    {
      title: "Claim Processing",
      steps: [
        "Client submits claim via mobile",
        "OCR extracts data from receipts",
        "System tracks claim progress",
        "Automated updates sent to client",
        "AI predicts settlement date"
      ]
    },
    {
      title: "Renewal Management",
      steps: [
        "System detects upcoming renewals",
        "AI analyzes if better options exist",
        "Automated reminders sent (SMS/Email)",
        "One-click renewal processing",
        "Confirmation and receipt generated"
      ]
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
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-20 right-10 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/10 to-transparent blur-[150px] rounded-full" />
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
              <span>Next-Gen Capabilities</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight" style={{ color: '#F0F9FF', textShadow: '0 2px 20px rgba(0,0,0,0.35)' }}>
              Advanced{' '}
              <span style={{
                background: 'linear-gradient(90deg, #7DD3FC 0%, #38BDF8 50%, #BAE6FD 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 20px rgba(125,211,252,0.45))'
              }}>
                Features
              </span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed" style={{ color: 'rgba(224,242,254,0.92)', textShadow: '0 1px 8px rgba(0,0,0,0.25)' }}>
              Powerful tools designed to give the modern agent a decisive edge. Powered by our proprietary Financial LLM.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Intelligent Modules</h2>
            <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
              Cutting-edge technology meets practical insurance operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 2) * 0.1 }}
              >
                <Card className="glass relative rounded-[2.5rem] border border-slate-200/50 shadow-sm p-4 lg:p-6 group hover:shadow-2xl hover:-translate-y-2 hover:shadow-blue-500/15 hover:border-blue-200 transition-all duration-500 h-full bg-white">
                  <CardHeader className="p-6 lg:p-8 pb-4">
                    <div className="flex items-start justify-between mb-8">
                      <div className={`w-20 h-20 ${feature.bgColor} rounded-3xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                        <feature.icon className={`h-10 w-10 ${feature.color}`} />
                      </div>
                      <Badge variant="secondary" className="bg-blue-50 text-blue-600 border border-blue-100 font-black text-[10px] py-1.5 px-3 rounded-full uppercase tracking-widest shadow-sm">
                        AI OPTIMIZED
                      </Badge>
                    </div>
                    <CardTitle className="text-3xl font-black text-slate-900 mb-4 tracking-tight">{feature.title}</CardTitle>
                    <CardDescription className="text-lg text-slate-500 font-medium leading-relaxed">{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 lg:p-8 pt-0">
                    <div className="space-y-6 pt-6 border-t border-slate-100">
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Strategic Advantages</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {feature.benefits.map((benefit, bIndex) => (
                          <div key={bIndex} className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100 group-hover:border-blue-100 transition-colors">
                            <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 shadow-sm" />
                            <span className="text-sm font-bold text-slate-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Vertical Flows</h2>
            <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
              Real-world scenarios showing how our infrastructure perfectly orchestrates your processes.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="bg-white rounded-[3rem] border border-slate-200 shadow-sm p-4 lg:p-6 h-full relative group overflow-hidden hover:shadow-2xl hover:-translate-y-2 hover:shadow-blue-500/15 transition-all duration-500">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl group-hover:bg-blue-100 group-hover:scale-150 transition-all duration-500"></div>
                  <CardHeader className="pb-8 p-6 lg:p-8 relative z-10">
                    <CardTitle className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 lg:p-8 pt-0 relative z-10">
                    <div className="space-y-6">
                      {useCase.steps.map((step, sIndex) => (
                        <div key={sIndex} className="flex gap-4 items-start relative group/step">
                          <div className="flex-shrink-0 w-10 h-10 bg-slate-50 border border-slate-100 rounded-[1rem] flex items-center justify-center text-sm font-black text-slate-400 group-hover/step:bg-blue-600 group-hover/step:text-white group-hover/step:border-blue-600 transition-all duration-300 shadow-sm z-10">
                            {sIndex + 1}
                          </div>
                          <p className="text-sm font-bold text-slate-600 mt-2.5 leading-relaxed group-hover/step:text-slate-900 transition-colors">{step}</p>
                          {sIndex < useCase.steps.length - 1 && (
                            <div className="absolute left-5 top-10 w-[2px] h-8 bg-slate-100 group-hover/step:bg-blue-200 transition-colors z-0"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="ai" className="w-full">
            <div className="flex justify-center mb-16">
              <TabsList className="bg-slate-50 rounded-[2.5rem] p-2 h-20 border border-slate-100 shadow-sm max-w-2xl w-full">
                <TabsTrigger value="ai" className="rounded-[2rem] data-[state=active]:bg-white data-[state=active]:shadow-ambient text-lg font-black tracking-tight flex-1">AI Engine</TabsTrigger>
                <TabsTrigger value="security" className="rounded-[2rem] data-[state=active]:bg-white data-[state=active]:shadow-ambient text-lg font-black tracking-tight flex-1">Security</TabsTrigger>
                <TabsTrigger value="integration" className="rounded-[2rem] data-[state=active]:bg-white data-[state=active]:shadow-ambient text-lg font-black tracking-tight flex-1">Integrations</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="ai">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <Card className="bg-white rounded-[3rem] border border-slate-200 shadow-ambient-lg p-8 lg:p-14 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 blur-[100px] rounded-full point-events-none"></div>
                  <CardHeader className="px-0 pb-12 relative z-10">
                    <CardTitle className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Intelligence Architecture</CardTitle>
                    <CardDescription className="text-xl text-slate-500 font-medium">Our models are trained on millions of high-fidelity financial transactions.</CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 space-y-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                      <div className="space-y-8">
                        <div>
                          <h4 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-4">
                            <div className="w-14 h-14 bg-blue-50 rounded-[1.5rem] flex items-center justify-center">
                              <Brain className="h-7 w-7 text-blue-600" />
                            </div>
                            Predictive Operations
                          </h4>
                          <div className="grid gap-4">
                            {[
                              { label: "Client Churn Guard", val: "92% Accuracy" },
                              { label: "Policy Recommendation", val: "Deep ML" },
                              { label: "Risk Assessment", val: "Automated" },
                              { label: "Premium Optimization", val: "Dynamic" }
                            ].map((item, i) => (
                              <div key={i} className="flex justify-between items-center p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors">
                                <span className="font-bold text-slate-700">{item.label}</span>
                                <Badge className="bg-white text-blue-600 shadow-sm border border-slate-100 font-black px-4 py-1.5 rounded-full">{item.val}</Badge>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="space-y-8">
                        <div>
                          <h4 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-4">
                            <div className="w-14 h-14 bg-emerald-50 rounded-[1.5rem] flex items-center justify-center">
                              <Scan className="h-7 w-7 text-emerald-600" />
                            </div>
                            Vision & OCR
                          </h4>
                          <div className="grid gap-4">
                            {[
                              { label: "Extraction Precision", val: "99.5%" },
                              { label: "Regional Context", val: "22+ Languages" },
                              { label: "Document Latency", val: "120ms" },
                              { label: "Handwriting Analysis", val: "Vision-AI" }
                            ].map((item, i) => (
                              <div key={i} className="flex justify-between items-center p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-colors">
                                <span className="font-bold text-slate-700">{item.label}</span>
                                <Badge className="bg-white text-emerald-600 shadow-sm border border-slate-100 font-black px-4 py-1.5 rounded-full">{item.val}</Badge>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="security">
              <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}>
                <Card className="bg-white rounded-[3rem] border border-slate-200 shadow-ambient-lg p-8 lg:p-14 overflow-hidden">
                  <CardHeader className="px-0 pb-12">
                    <CardTitle className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Institutional Trust</CardTitle>
                    <CardDescription className="text-xl text-slate-500 font-medium leading-relaxed">Infrastructure designed for zero-trust financial environments.</CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 space-y-4">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                      <div className="p-10 lg:p-12 bg-[#0F172A] text-white rounded-[2.5rem] relative overflow-hidden group shadow-xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full group-hover:bg-blue-500/30 transition-colors"></div>
                        <Shield className="h-14 w-14 text-blue-400 mb-10 relative z-10" />
                        <h4 className="text-3xl font-black mb-8 tracking-tight relative z-10">Data Fortification</h4>
                        <ul className="space-y-6 relative z-10">
                          {[
                            "AES-256 Multi-Layer Encryption",
                            "TLS 1.3 Transport Security",
                            "Hardware Security Modules (HSM)",
                            "Atomic Access Audits"
                          ].map((item, i) => (
                            <li key={i} className="flex items-center gap-4 text-blue-100 font-bold text-lg">
                              <div className="w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.5)]" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-10 lg:p-12 bg-blue-900 text-white rounded-[2.5rem] relative overflow-hidden group shadow-xl">
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/20 blur-[80px] rounded-full group-hover:bg-emerald-500/30 transition-colors"></div>
                        <Database className="h-14 w-14 text-emerald-400 mb-10 relative z-10" />
                        <h4 className="text-3xl font-black mb-8 tracking-tight relative z-10">Regulatory Shield</h4>
                        <ul className="space-y-6 relative z-10">
                          {[
                            "IRDAI Framework Compliance",
                            "ISO 27001 ISMS Certification",
                            "GDPR Sovereign Residency",
                            "Quarterly Pen Tests"
                          ].map((item, i) => (
                            <li key={i} className="flex items-center gap-4 text-emerald-100 font-bold text-lg">
                              <div className="w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="integration">
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <Card className="bg-white rounded-[3rem] border border-slate-200 shadow-ambient-lg p-8 lg:p-14 overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div>
                      <CardHeader className="px-0 mb-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-500 text-[10px] font-black uppercase tracking-widest mb-6">
                           API & WEBHOOKS
                        </div>
                        <CardTitle className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Open Ecosystem</CardTitle>
                        <CardDescription className="text-xl text-slate-500 font-medium">Connect Finestro into your existing business vertical seamlessly.</CardDescription>
                      </CardHeader>
                      <div className="space-y-6">
                        <div className="flex gap-6 p-8 bg-slate-50 rounded-[2rem] border border-slate-200 hover:border-blue-200 hover:shadow-sm transition-all">
                          <Zap className="h-10 w-10 text-blue-600 shrink-0" />
                          <div>
                            <h5 className="text-xl font-black text-slate-900 mb-2">REST Command Center</h5>
                            <p className="text-slate-500 font-medium leading-relaxed">Full API documentation with 120ms p99 latency guarantees.</p>
                          </div>
                        </div>
                        <div className="flex gap-6 p-8 bg-slate-50 rounded-[2rem] border border-slate-200 hover:border-blue-200 hover:shadow-sm transition-all">
                          <Wand2 className="h-10 w-10 text-blue-600 shrink-0" />
                          <div>
                            <h5 className="text-xl font-black text-slate-900 mb-2">Webhook Events</h5>
                            <p className="text-slate-500 font-medium leading-relaxed">Real-time triggers for CRM sync and policy updates.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      {[
                        { name: "WhatsApp APIs", color: "text-emerald-600" },
                        { name: "Payments / UPI", color: "text-blue-600" },
                        { name: "Email Gateway", color: "text-blue-600" },
                        { name: "Salesforce CRM", color: "text-sky-600" },
                        { name: "Slack & Teams", color: "text-indigo-600" },
                        { name: "Bank Verification", color: "text-slate-900" }
                      ].map((int, i) => (
                        <div key={i} className="p-8 bg-white border border-slate-200 rounded-[2rem] shadow-sm flex items-center justify-center text-center group hover:bg-slate-50 hover:border-blue-200 hover:shadow-ambient transition-all duration-300">
                          <span className={`font-black text-xs uppercase tracking-widest ${int.color}`}>{int.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-50">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[120px] rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight leading-[1.1] text-slate-900">
            Ready to Upgrade Your <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Operations?</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            Deploy the Finestro core into your agency in under 10 minutes. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button onClick={() => onNavigate('auth')} size="lg" className="rounded-full h-16 px-10 text-lg shadow-lg bg-blue-600 text-white hover:bg-blue-700 w-full sm:w-auto font-black tracking-wide border-0 focus:ring-4 focus:ring-blue-500/30 transition-all">
              Start Enterprise Trial
            </Button>
            <Button onClick={() => onNavigate('auth')} size="lg" variant="secondary" className="rounded-full h-16 px-10 text-lg shadow-lg border-2 border-slate-300 w-full sm:w-auto font-black tracking-wide transition-all" style={{ backgroundColor: "#ffffff", color: "#0f172a" }}>
              Talk to Solutions Engineer
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
