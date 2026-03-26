import { Heart, LifeBuoy, Shield, TrendingUp, Search, FileCheck, Upload, FolderLock, Bell, BarChart3, ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export function ProductsPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const features = [
    {
      icon: Search,
      title: "Quote Comparison",
      description: "Compare policies from 20+ providers instantly to find the best fit for your clients."
    },
    {
      icon: FileCheck,
      title: "Claim Tracking",
      description: "Initiate and track claims in real-time with automated status updates."
    },
    {
      icon: BarChart3,
      title: "Plan Validators",
      description: "Validate and compare plans with detailed analysis and recommendations."
    },
    {
      icon: Upload,
      title: "Document Upload",
      description: "Seamlessly upload Aadhaar, PAN, health cards, and application forms."
    },
    {
      icon: FolderLock,
      title: "Secure Storage",
      description: "Password-protected document center for all policy documents and receipts."
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Automated renewal and claim deadline notifications via SMS, email, and WhatsApp."
    }
  ];

  const productCategories = [
    {
      id: "health",
      name: "Health Insurance",
      icon: Heart,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50/50",
      description: "Comprehensive health insurance solutions with cashless treatment and family coverage options.",
      plans: [
        { name: "Individual Health Plans", coverage: "₹5L - ₹1Cr", features: ["Cashless hospitalization", "Pre & post hospitalization", "Daycare procedures"] },
        { name: "Family Floater Plans", coverage: "₹10L - ₹2Cr", features: ["Family coverage", "Maternity benefits", "New-born coverage"] },
        { name: "Senior Citizen Plans", coverage: "₹3L - ₹50L", features: ["No medical check-up", "Pre-existing diseases", "Lifelong renewability"] },
        { name: "Critical Illness Cover", coverage: "₹10L - ₹1Cr", features: ["Lump sum payout", "40+ critical illnesses", "Cancer care"] }
      ]
    },
    {
      id: "life",
      name: "Life Insurance",
      icon: LifeBuoy,
      color: "text-blue-600",
      bgColor: "bg-indigo-50/50",
      description: "Life coverage solutions including term plans, endowment, and ULIPs for financial security.",
      plans: [
        { name: "Term Insurance", coverage: "₹25L - ₹10Cr", features: ["Pure protection", "Affordable premiums", "Rider options"] },
        { name: "Endowment Plans", coverage: "₹5L - ₹50L", features: ["Savings + Insurance", "Maturity benefits", "Tax benefits"] },
        { name: "ULIP Plans", coverage: "₹10L - ₹1Cr", features: ["Market-linked returns", "Flexible premiums", "Wealth creation"] },
        { name: "Child Plans", coverage: "₹10L - ₹50L", features: ["Education planning", "Premium waiver", "Guaranteed returns"] }
      ]
    },
    {
      id: "general",
      name: "General Insurance",
      icon: Shield,
      color: "text-blue-600",
      bgColor: "bg-blue-50/50",
      description: "Protect assets with motor, home, travel, and business insurance solutions.",
      plans: [
        { name: "Motor Insurance", coverage: "IDV Based", features: ["Comprehensive coverage", "Third-party liability", "Cashless repairs"] },
        { name: "Home Insurance", coverage: "₹5L - ₹1Cr", features: ["Property protection", "Content coverage", "Natural calamities"] },
        { name: "Travel Insurance", coverage: "As per plan", features: ["Medical emergencies", "Trip cancellation", "Lost baggage"] },
        { name: "Business Insurance", coverage: "Customized", features: ["Property damage", "Liability coverage", "Business interruption"] }
      ]
    },
    {
      id: "mutual-funds",
      name: "Mutual Funds",
      icon: TrendingUp,
      color: "text-violet-600",
      bgColor: "bg-violet-50/50",
      description: "Diversified investment options across equity, debt, and hybrid mutual funds.",
      plans: [
        { name: "Equity Funds", coverage: "Market-linked", features: ["High growth potential", "Long-term wealth", "Tax benefits"] },
        { name: "Debt Funds", coverage: "Stable returns", features: ["Low risk", "Regular income", "Capital preservation"] },
        { name: "Hybrid Funds", coverage: "Balanced", features: ["Equity + Debt", "Moderate risk", "Diversification"] },
        { name: "Tax Saving Funds (ELSS)", coverage: "80C benefits", features: ["Tax deduction", "3-year lock-in", "Equity returns"] }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
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
              <span>Premium Products Suite</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight" style={{ color: '#F0F9FF', textShadow: '0 2px 20px rgba(0,0,0,0.35)' }}>
              Digital{' '}
              <span style={{
                background: 'linear-gradient(90deg, #7DD3FC 0%, #38BDF8 50%, #BAE6FD 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 20px rgba(125,211,252,0.45))'
              }}>
                Infrastructure
              </span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed" style={{ color: 'rgba(224,242,254,0.92)', textShadow: '0 1px 8px rgba(0,0,0,0.25)' }}>
              Comprehensive tools for managing Health, Life, General Insurance, and Mutual Funds—all in one premium unified workspace.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Features Overview */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight uppercase tracking-widest text-sm text-blue-600 mb-4 inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
              <Shield className="size-4" /> Unified Core Features
            </h2>
            <p className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Every vertical in our platform is powered by these institutional tools.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.1 }}
              >
                <Card className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm p-4 lg:p-6 group hover:shadow-ambient-lg hover:border-blue-200 transition-all duration-500 h-full cursor-default">
                  <CardHeader className="p-6 pb-2">
                    <div className="flex items-start justify-between mb-8">
                      <div className="w-20 h-20 bg-slate-50 rounded-[1.5rem] flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-500 border border-slate-100 group-hover:border-blue-100 shadow-sm">
                        <feature.icon className="h-10 w-10 text-slate-400 group-hover:text-blue-600 transition-colors" strokeWidth={1.5} />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                        <ArrowRight className="h-5 w-5 text-slate-300 group-hover:text-white group-hover:-rotate-45 transition-all duration-300" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-4">
                    <p className="text-slate-500 font-medium leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories with Tabs */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.05)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <Tabs defaultValue="health" className="w-full">
            <div className="flex justify-center mb-20">
              <TabsList className="bg-slate-50 rounded-[3rem] p-2 h-auto lg:h-20 border border-slate-200 shadow-sm w-full max-w-4xl grid grid-cols-2 lg:grid-cols-4 gap-2">
                {productCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex flex-row lg:flex-col items-center justify-center gap-3 px-6 py-4 lg:py-0 rounded-[2.5rem] data-[state=active]:bg-white data-[state=active]:shadow-ambient data-[state=active]:border border-transparent data-[state=active]:border-slate-200 transition-all duration-300 group h-full"
                  >
                    <div className={`p-2 lg:p-0 lg:mb-1 rounded-xl shadow-inner lg:shadow-none group-data-[state=active]:bg-transparent transition-colors`}>
                      <category.icon className={`h-5 w-5 lg:h-6 lg:w-6 text-slate-400 group-data-[state=active]:${category.color} transition-colors`} />
                    </div>
                    <span className="font-black text-sm text-slate-500 group-data-[state=active]:text-slate-900 transition-colors tracking-tight hidden lg:block">{category.name}</span>
                    <span className="font-black text-sm text-slate-500 group-data-[state=active]:text-slate-900 transition-colors tracking-tight lg:hidden truncate">{category.name.split(' ')[0]}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {productCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0 outline-none">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-16"
                >
                  {/* Category Header */}
                  <div className={`bg-white relative rounded-[3rem] p-10 lg:p-16 overflow-hidden border border-slate-200 shadow-ambient-lg`}>
                    <div className={`absolute top-0 left-0 w-3 h-full ${category.color.replace('text-', 'bg-')}`}></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-slate-50 to-transparent blur-3xl rounded-full pointer-events-none"></div>
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 relative z-10">
                      <div className="w-28 h-28 bg-white rounded-[2rem] flex items-center justify-center shadow-ambient-lg border border-slate-100 shrink-0 relative overflow-hidden group">
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${category.color.replace('text-', 'bg-')}`}></div>
                        <category.icon className={`h-12 w-12 ${category.color} relative z-10 group-hover:scale-110 transition-transform duration-300`} strokeWidth={1.5} />
                      </div>
                      <div>
                        <Badge className={`${category.color.replace('text-', 'bg-').replace('600', '50')} ${category.color} border-${category.color.replace('text-', '').replace('600', '200')} font-black text-[10px] tracking-widest uppercase mb-6 px-4 py-1.5 shadow-sm rounded-full`}>PRODUCT LINE</Badge>
                        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">{category.name}</h2>
                        <p className="text-xl text-slate-500 mt-6 max-w-3xl font-medium leading-relaxed">{category.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Plans Grid */}
                  <div className="grid md:grid-cols-2 gap-8">
                    {category.plans.map((plan, index) => (
                      <Card key={index} className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden group hover:shadow-ambient-lg hover:border-blue-200 transition-all duration-500 relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <CardHeader className="p-8 lg:p-10 pb-0">
                          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
                            <CardTitle className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">{plan.name}</CardTitle>
                            <Badge className="bg-slate-900 text-white shadow-md rounded-full px-5 py-2 font-black text-xs tracking-wide shrink-0">
                              {plan.coverage}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="p-8 lg:p-10 pt-6">
                          <ul className="space-y-6">
                            {plan.features.map((feature, fIndex) => (
                              <li key={fIndex} className="flex items-start gap-4 group/item">
                                <div className={`w-2.5 h-2.5 rounded-full shrink-0 shadow-sm mt-1.5 group-hover/item:scale-125 transition-transform duration-300 ${category.color.replace('text-', 'bg-')}`} />
                                <span className="text-slate-600 font-bold leading-relaxed group-hover/item:text-slate-900 transition-colors">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Category-specific Tools */}
                  <Card className="bg-[#F8FAFC] rounded-[3rem] border border-slate-200 shadow-sm overflow-hidden group hover:shadow-ambient transition-all duration-500">
                    <CardHeader className="p-10 lg:p-12 pb-8 text-center lg:text-left border-b border-slate-200/50">
                      <CardTitle className="text-3xl lg:text-4xl font-black flex flex-col lg:flex-row items-center gap-4 text-slate-900 tracking-tight">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 hidden lg:flex">
                           <Zap className="h-8 w-8 text-amber-500" strokeWidth={1.5} />
                        </div>
                        <Zap className="h-8 w-8 text-amber-500 lg:hidden" strokeWidth={1.5} />
                        Integrated Verticals
                      </CardTitle>
                      <CardDescription className="text-xl font-medium text-slate-500 mt-4 leading-relaxed lg:pl-20">
                        Streamline your {category.name.toLowerCase()} operations with our embedded infrastructure tools.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-10 lg:p-12 pt-8">
                      <div className="grid md:grid-cols-3 gap-8">
                        {[
                          { icon: Search, title: "Comparison Engine", desc: "Native side-by-side analysis for 20+ carriers instantly." },
                          { icon: Upload, title: "KYC Onboarding", desc: "Automated Aadhaar/PAN validation triggers matching regulations." },
                          { icon: Bell, title: "Lifecycle Alerts", desc: "Rule-based renewals and claim triggers sent natively." }
                        ].map((tool, tIndex) => (
                          <div key={tIndex} className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm group/tool hover:shadow-ambient hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full blur-2xl opacity-0 group-hover/tool:opacity-100 transition-opacity duration-500"></div>
                            <div className="w-16 h-16 bg-slate-50 rounded-[1.5rem] flex items-center justify-center mb-6 group-hover/tool:bg-slate-900 transition-colors duration-300 border border-slate-100 relative z-10">
                              <tool.icon className="h-8 w-8 text-slate-400 group-hover/tool:text-white transition-colors" strokeWidth={1.5} />
                            </div>
                            <h5 className="text-xl font-black text-slate-900 mb-3 group-hover/tool:text-blue-600 transition-colors tracking-tight relative z-10">{tool.title}</h5>
                            <p className="text-base font-medium text-slate-500 leading-relaxed relative z-10">{tool.desc}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Document Upload Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-900 relative overflow-hidden text-white">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.15),transparent_60%)]"></div>
        <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 font-black text-[10px] tracking-widest uppercase mb-8 px-5 py-2 rounded-full backdrop-blur-md">DATA SOVEREIGNTY</Badge>
              <h2 className="text-5xl lg:text-7xl font-black mb-8 tracking-tight leading-tight">Secure Vault <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Management</span></h2>
              <p className="text-xl text-slate-400 mb-12 font-medium leading-relaxed max-w-lg">
                A unified, encrypted document workspace perfectly built for institutional document custody and client record management.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { label: "Aadhaar / PAN Vault", desc: "Validated at source." },
                  { label: "Medical History", desc: "Long-term cold storage." },
                  { label: "Policy Ledger", desc: "Immutable compliance trail." },
                  { label: "KYC Cryptography", desc: "Bank-level zero-trust." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 p-6 bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 group hover:bg-white/10 transition-colors duration-300">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center shrink-0 border border-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
                      <ShieldCheck className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-200 text-base mb-1">{item.label}</h5>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="bg-slate-800/50 backdrop-blur-2xl relative rounded-[3rem] border border-slate-700 shadow-2xl overflow-hidden p-2">
                <div className="bg-slate-900 rounded-[2.5rem] border border-slate-800 p-12 text-center group cursor-pointer hover:border-slate-700 transition-colors duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  
                  <div className="w-28 h-28 bg-slate-800 rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-inner group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-500 border border-slate-700 group-hover:border-blue-500 relative z-10">
                    <Upload className="h-12 w-12 text-slate-400 group-hover:text-white transition-colors" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-3xl font-black mb-4 text-white tracking-tight relative z-10">Enterprise Dropzone</h3>
                  <p className="text-slate-400 font-medium mb-10 leading-relaxed max-w-sm mx-auto relative z-10 text-lg">
                    Institutional-grade document ingestion. Drag PDFs, high-res images, or ZIP archives up to <span className="text-blue-400 font-black">100MB</span> per session.
                  </p>
                  
                  <div className="flex flex-wrap gap-3 justify-center relative z-10">
                    {["Aadhaar", "PAN", "Health Card", "Policy Ledger", "Form 16"].map((tag, i) => (
                      <Badge key={i} className="bg-slate-800 text-slate-300 border border-slate-700 font-black text-[10px] tracking-widest px-4 py-2 uppercase rounded-full hover:bg-slate-700 transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="mt-12 pt-10 border-t border-slate-800 relative z-10">
                    <Button onClick={() => onNavigate('auth')} size="lg" className="rounded-2xl h-16 w-full sm:w-auto px-12 shadow-[0_0_30px_rgba(59,130,246,0.2)] font-black text-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors">
                      Browse Local Files
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
