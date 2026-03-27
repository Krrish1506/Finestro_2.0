import { Shield, Lock, Cloud, FileCheck, Eye, Server, AlertTriangle, CheckCircle, FolderLock, Sparkles, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "framer-motion";

export function SecurityPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const securityFeatures = [
    {
      icon: Lock,
      title: "256-bit Encryption",
      description: "All data transmitted and stored is encrypted using industry-standard AES-256 encryption."
    },
    {
      icon: Cloud,
      title: "Secure Cloud Storage",
      description: "Documents and data stored on ISO 27001 certified cloud infrastructure with automated backups."
    },
    {
      icon: Eye,
      title: "Password Protection",
      description: "Multi-layer password protection with role-based access control for sensitive documents."
    },
    {
      icon: Server,
      title: "Data Redundancy",
      description: "Multiple backup systems ensure your data is never lost, with 99.9% uptime guarantee."
    },
    {
      icon: FileCheck,
      title: "Audit Trails",
      description: "Complete activity logs for compliance verification and security monitoring."
    },
    {
      icon: AlertTriangle,
      title: "Real-time Alerts",
      description: "Instant notifications for suspicious activities or unauthorized access attempts."
    }
  ];

  const complianceStandards = [
    {
      name: "IRDAI Compliant",
      description: "Full compliance with Insurance Regulatory and Development Authority of India guidelines",
      status: "Certified"
    },
    {
      name: "ISO 27001",
      description: "Information Security Management System certification",
      status: "Certified"
    },
    {
      name: "Data Protection",
      description: "Adherence to Indian data protection and privacy laws",
      status: "Compliant"
    },
    {
      name: "PCI DSS",
      description: "Payment Card Industry Data Security Standard for payment processing",
      status: "Compliant"
    },
    {
      name: "SOC 2 Type II",
      description: "Service Organization Control certification for security controls",
      status: "In Progress"
    },
    {
      name: "GDPR Ready",
      description: "General Data Protection Regulation compliance framework",
      status: "Compliant"
    }
  ];

  const dataProtectionPractices = [
    "End-to-end encryption for all client communications",
    "Regular third-party security audits and penetration testing",
    "Automated malware scanning and threat detection",
    "Secure API integrations with insurance providers",
    "Two-factor authentication (2FA) for agent accounts",
    "Automatic session timeout and secure logout",
    "Regular security patches and software updates",
    "Data anonymization for analytics and reporting"
  ];

  const accessControls = [
    {
      level: "Agent Access",
      permissions: ["View own clients", "Upload documents", "Generate reports"],
      color: "border-blue-200/50 bg-blue-50/10"
    },
    {
      level: "Admin Access",
      permissions: ["Manage all agents", "System configuration", "Compliance reports"],
      color: "border-blue-200/50 bg-blue-50/10"
    },
    {
      level: "Client Access",
      permissions: ["View own policies", "Download documents", "Track claims"],
      color: "border-emerald-200/50 bg-emerald-50/10"
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/40 text-white text-[10px] font-black uppercase tracking-widest mb-16 backdrop-blur-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Sparkles className="size-4" />
              <span>Cyber Resilience</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black mb-16 tracking-tight font-heading" style={{ color: '#F0F9FF', textShadow: '0 2px 20px rgba(0,0,0,0.35)' }}>
              Security &{' '}
              <span style={{
                background: 'linear-gradient(90deg, #7DD3FC 0%, #38BDF8 50%, #BAE6FD 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 20px rgba(125,211,252,0.45))'
              }}>
                Compliance
              </span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-loose" style={{ color: 'rgba(224,242,254,0.92)', textShadow: '0 1px 8px rgba(0,0,0,0.25)' }}>
              We implement industry-leading protocols to protect your business and sensitive client information. Built on zero-trust architecture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight uppercase tracking-widest text-sm text-blue-600 mb-4 inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
              <Shield className="size-4" /> Enterprise Infrastructure
            </h2>
            <p className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Built with security at the core, not as an afterthought.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="rounded-[2.5rem] border border-slate-200/50 shadow-sm p-4 lg:p-10 group hover:shadow-2xl hover:shadow-blue-500/15 hover:-translate-y-2 hover:border-blue-200 transition-all duration-500 h-full bg-white">
                  <CardHeader className="p-10 pb-2">
                    <div className="w-20 h-20 bg-slate-50 rounded-[1.5rem] flex items-center justify-center mb-16 shadow-sm group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-500 border border-slate-100 group-hover:border-blue-100">
                      <feature.icon className="h-10 w-10 text-slate-400 group-hover:text-blue-600 transition-colors" strokeWidth={1.5} />
                    </div>
                    <CardTitle className="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-10 pt-4">
                    <p className="text-slate-500 font-medium leading-loose">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Compliance & Certifications</h2>
            <p className="text-xl text-slate-500 font-medium leading-loose max-w-2xl mx-auto">
              Meeting and exceeding global financial regulatory requirements to ensure your operations are always protected.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="glass relative rounded-[2.5rem] border border-slate-200/50 shadow-sm p-4 h-full bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/15 hover:-translate-y-2 hover:border-blue-200 transition-all duration-500">
                  <CardHeader className="p-10 lg:p-10">
                    <div className="flex items-start justify-between mb-6">
                      <CardTitle className="text-xl font-black text-slate-900 tracking-tight pr-4">{standard.name}</CardTitle>
                      <Badge variant={
                        standard.status === "Certified" ? "default" :
                        standard.status === "Compliant" ? "secondary" :
                        "outline"
                      } className={`rounded-full px-4 py-1.5 font-black text-[10px] uppercase tracking-widest shrink-0 shadow-sm ${standard.status === 'Certified' ? 'bg-blue-600' : standard.status === 'Compliant' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : ''}`}>
                        {standard.status}
                      </Badge>
                    </div>
                    <CardDescription className="font-medium text-slate-500 leading-loose text-base">{standard.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-16 tracking-tight">Comprehensive Protection</h2>
              <p className="text-xl text-slate-500 mb-16 font-medium leading-loose">
                We implement multiple layers of cryptographic security to ensure your data remains your property, fully encrypted at rest and in transit.
              </p>
              <div className="grid sm:grid-cols-2 gap-10">
                {dataProtectionPractices.map((practice, index) => (
                  <div key={index} className="flex items-center gap-12 p-5 bg-white rounded-[1.5rem] shadow-sm border border-slate-100 group hover:border-emerald-200 hover:shadow-ambient transition-all">
                    <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-emerald-500 transition-all duration-300">
                      <CheckCircle className="h-5 w-5 text-emerald-500 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm font-bold text-slate-700">{practice}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1730085422157-6783ac9306b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudCUyMHNlY3VyaXR5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjAyNjE5NTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Security Technology"
                className="rounded-[3rem] shadow-ambient-lg border border-slate-200 relative z-10 w-full object-cover aspect-square"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Access Control */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Access Control</h2>
            <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
              Role-based permissions with audit trails for every critical operation across your organization.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {accessControls.map((control, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`bg-white rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-blue-500/15 hover:-translate-y-2 h-full overflow-hidden transition-all duration-500 group relative`}>
                  <div className={`absolute top-0 left-0 w-full h-2 ${control.color.replace('border-', 'bg-')}`}></div>
                  <CardHeader className="bg-slate-50 border-b border-slate-100 p-10 lg:p-10 relative">
                    <div className="absolute top-10 right-8 w-16 h-16 bg-blue-500/5 rounded-full blur-xl group-hover:scale-150 transition-all duration-500"></div>
                    <CardTitle className="flex items-center gap-12 text-slate-900 font-black text-2xl tracking-tight relative z-10">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                        <Lock className="h-6 w-6 text-blue-600" />
                      </div>
                      {control.level}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-10 lg:p-10 pt-8">
                    <ul className="space-y-6">
                      {control.permissions.map((permission, pIndex) => (
                        <li key={pIndex} className="flex items-start gap-12">
                          <div className="w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.6)] flex-shrink-0 mt-1.5" />
                          <span className="text-sm font-bold text-slate-600 leading-loose group-hover:text-slate-900 transition-colors">{permission}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Security */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <Card className="bg-white relative rounded-[3rem] border border-slate-200 shadow-ambient-lg overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full"></div>
                <CardHeader className="p-10 lg:p-12 pb-6 relative z-10">
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100/50 text-indigo-600 text-[10px] font-black uppercase tracking-widest mb-6 shadow-sm">
                    <FolderLock className="size-4" />
                    <span>Secure Vault</span>
                  </div>
                  <CardTitle className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">Document Governance</CardTitle>
                </CardHeader>
                <CardContent className="p-10 lg:p-12 pt-0 space-y-6 relative z-10">
                  {[
                    { title: "Password-Protected Vault", desc: "Aadhaar, PAN, and Health ID storage encrypted with individual keys." },
                    { title: "Expiry-Controlled Links", desc: "Share documents with time-limited access and view-count restrictions." },
                    { title: "Immutable Audit Trails", desc: "Every view, download, and share is logged in a tamper-proof ledger." }
                  ].map((item, i) => (
                    <div key={i} className="p-10 bg-slate-50 rounded-[1.5rem] border border-slate-100 group hover:bg-white hover:border-blue-200 hover:shadow-ambient transition-all duration-300">
                      <h4 className="font-black text-lg text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                      <p className="text-sm text-slate-500 font-medium leading-loose">{item.desc}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-16 tracking-tight">Institutional Trust</h2>
              <p className="text-xl text-slate-500 mb-16 font-medium leading-loose max-w-lg">
                Every document is treated as an asset. We maintain the highest standards of custodial security automatically.
              </p>
              <div className="space-y-8">
                {[
                  { title: "Automated Malware Scanning", desc: "Zero-day threat detection for every file upload." },
                  { title: "Dynamic Watermarking", desc: "Anti-leak protection for sensitive client policy sets." },
                  { title: "Cryptographic Deletion", desc: "Verified file scrubbing for ultimate data sovereignty." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-10 items-start group">
                    <div className="w-14 h-14 bg-white rounded-[1.5rem] shadow-sm border border-slate-100 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 group-hover:shadow-ambient group-hover:border-emerald-500 transition-all duration-300">
                      <CheckCircle className="size-6 text-slate-300 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">{item.title}</h4>
                      <p className="text-slate-500 font-medium leading-loose text-lg">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust & Transparency */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-indigo-900/20 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-16 tracking-tight">Resilience Guaranteed</h2>
          <p className="text-xl md:text-2xl text-slate-400 mb-16 max-w-3xl mx-auto font-medium leading-loose">
            Security is a continuous journey. We are committed to maintaining the highest standard of infrastructure visibility.
          </p>
          <div className="grid sm:grid-cols-3 gap-10 lg:gap-12">
            {[
              { val: "24/7", label: "Global Monitoring", color: "from-blue-400 to-cyan-300" },
              { val: "99.9%", label: "System Uptime", color: "from-emerald-400 to-teal-300" },
              { val: "< 1hr", label: "SLA Response", color: "from-indigo-400 to-purple-300" }
            ].map((stat, i) => (
              <div key={i} className="p-10 lg:p-12 bg-white/5 backdrop-blur-xl rounded-[3rem] border border-white/10 shadow-ambient-lg hover:bg-white/10 transition-colors duration-500">
                <div className={`text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r ${stat.color} tracking-tighter`}>{stat.val}</div>
                <p className="text-slate-300 font-black uppercase tracking-widest text-[10px]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
