import { Mail, Phone, MapPin, MessageCircle, CreditCard, Sparkles, Send, Clock, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { motion } from "framer-motion";

export function ContactPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      value: "1800-123-456",
      description: "Mon-Sat, 9 AM - 7 PM IST",
      link: "tel:+911800123456"
    },
    {
      icon: Mail,
      title: "Email Support",
      value: "support@finestro.in",
      description: "We'll respond within 24 hours",
      link: "mailto:support@finestro.in"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+91 98765 43210",
      description: "Quick responses on WhatsApp",
      link: "https://wa.me/919876543210"
    },
    {
      icon: MapPin,
      title: "Our Location",
      value: "ASIA Campus, Ahmedabad",
      description: "Drive In Rd, Thaltej",
      link: "https://www.google.com/maps"
    }
  ];

  const paymentMethods = [
    { name: "UPI", supported: true },
    { name: "Net Banking", supported: true },
    { name: "Credit/Debit Card", supported: true },
    { name: "RTGS/NEFT", supported: true },
    { name: "Google Pay", supported: true },
    { name: "PhonePe", supported: true }
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
        <div className="max-w-7xl mx-auto text-center relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/40 text-white text-[10px] font-black uppercase tracking-widest mb-8 md:mb-12 backdrop-blur-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Sparkles className="size-4" />
              <span>Support Excellence</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 md:mb-12 tracking-tight" style={{ color: '#F0F9FF', textShadow: '0 2px 20px rgba(0,0,0,0.35)' }}>
              Get in{' '}
              <span style={{
                background: 'linear-gradient(90deg, #7DD3FC 0%, #38BDF8 50%, #BAE6FD 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 20px rgba(125,211,252,0.45))'
              }}>
                Touch
              </span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed" style={{ color: 'rgba(224,242,254,0.92)', textShadow: '0 1px 8px rgba(0,0,0,0.25)' }}>
              Have questions about our enterprise infrastructure? Our team of fintech experts is ready to help you scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white text-center rounded-[2.5rem] border border-slate-200 shadow-sm p-4 group hover:shadow-2xl hover:-translate-y-2 hover:shadow-blue-500/15 hover:border-blue-200 transition-all duration-500 cursor-pointer h-full">
                  <CardHeader className="p-10 pb-2">
                    <div className="w-20 h-20 bg-slate-50 rounded-[1.5rem] flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-blue-50 group-hover:scale-110 transition-all duration-500 border border-slate-100 group-hover:border-blue-100">
                      <method.icon className="h-10 w-10 text-slate-400 group-hover:text-blue-600 transition-colors" strokeWidth={1.5} />
                    </div>
                    <CardTitle className="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-10 pt-4">
                    <a href={method.link} className="text-blue-600 font-black mb-4 block text-lg tracking-tight hover:underline underline-offset-4">
                      {method.value}
                    </a>
                    <p className="text-slate-500 font-medium leading-relaxed">{method.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.05)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 lg:gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-500 text-[10px] font-black uppercase tracking-widest mb-6">
                GET STARTED
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Send Us a Message</h2>
              <p className="text-xl text-slate-500 mb-8 md:mb-12 font-medium leading-relaxed">
                Fill out the form below and our partnership division will reach out within one business cycle.
              </p>
              <Card className="bg-white rounded-[3rem] border border-slate-200 shadow-ambient-lg p-10 lg:p-10 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none"></div>
                <CardContent className="p-0 relative z-10">
                  <form className="space-y-8">
                    <div className="grid sm:grid-cols-2 gap-8 lg:gap-12">
                      <div className="space-y-4">
                        <Label htmlFor="firstName" className="font-black text-sm text-slate-700 uppercase tracking-widest">First Name</Label>
                        <Input id="firstName" placeholder="Vikram" className="rounded-2xl border-slate-200 bg-slate-50 hover:bg-white hover:border-blue-300 focus:border-blue-500 focus:ring-blue-500/20 h-14 text-lg transition-all shadow-sm" required />
                      </div>
                      <div className="space-y-4">
                        <Label htmlFor="lastName" className="font-black text-sm text-slate-700 uppercase tracking-widest">Last Name</Label>
                        <Input id="lastName" placeholder="Sharma" className="rounded-2xl border-slate-200 bg-slate-50 hover:bg-white hover:border-blue-300 focus:border-blue-500 focus:ring-blue-500/20 h-14 text-lg transition-all shadow-sm" required />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <Label htmlFor="email" className="font-black text-sm text-slate-700 uppercase tracking-widest">Business Email</Label>
                      <Input id="email" type="email" placeholder="v.sharma@agency.in" className="rounded-2xl border-slate-200 bg-slate-50 hover:bg-white hover:border-blue-300 focus:border-blue-500 focus:ring-blue-500/20 h-14 text-lg transition-all shadow-sm" required />
                    </div>
                    
                    <div className="space-y-4">
                      <Label htmlFor="phone" className="font-black text-sm text-slate-700 uppercase tracking-widest">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+91 98765 43210" className="rounded-2xl border-slate-200 bg-slate-50 hover:bg-white hover:border-blue-300 focus:border-blue-500 focus:ring-blue-500/20 h-14 text-lg transition-all shadow-sm" required />
                    </div>
                    
                    <div className="space-y-4">
                      <Label htmlFor="inquiryType" className="font-black text-sm text-slate-700 uppercase tracking-widest">Inquiry Type</Label>
                      <Select>
                        <SelectTrigger id="inquiryType" className="rounded-2xl border-slate-200 bg-slate-50 hover:bg-white hover:border-blue-300 focus:border-blue-500 focus:ring-blue-500/20 h-14 text-lg transition-all shadow-sm">
                          <SelectValue placeholder="Select intent" />
                        </SelectTrigger>
                        <SelectContent className="rounded-2xl border-slate-200 shadow-ambient-lg">
                          <SelectItem value="demo" className="text-base font-medium focus:bg-blue-50 focus:text-blue-700 py-3">Enterprise Demo</SelectItem>
                          <SelectItem value="pricing" className="text-base font-medium focus:bg-blue-50 focus:text-blue-700 py-3">License Pricing</SelectItem>
                          <SelectItem value="support" className="text-base font-medium focus:bg-blue-50 focus:text-blue-700 py-3">Technical Integration</SelectItem>
                          <SelectItem value="partnership" className="text-base font-medium focus:bg-blue-50 focus:text-blue-700 py-3">Strategic Partnership</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-4">
                      <Label htmlFor="message" className="font-black text-sm text-slate-700 uppercase tracking-widest">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Detail your operational requirements..."
                        className="rounded-2xl border-slate-200 bg-slate-50 hover:bg-white hover:border-blue-300 focus:border-blue-500 focus:ring-blue-500/20 min-h-[160px] text-lg transition-all shadow-sm resize-none"
                        required
                      />
                    </div>
                    
                    <Button onClick={() => onNavigate('auth')} type="submit" className="w-full rounded-2xl h-16 text-lg shadow-[0_0_30px_rgba(59,130,246,0.3)] bg-blue-600 hover:bg-blue-700 text-white font-black tracking-wide group mt-4">
                      Submit Inquiry
                      <Send className="size-5 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Additional Info */}
            <div className="space-y-16">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="pt-16 md:pt-24 lg:pt-0"
              >
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 md:mb-12 tracking-tight">Why Partner with Us?</h2>
                <div className="space-y-10">
                  {[
                    { icon: Clock, title: "24/7 Redundant Systems", desc: "Our tech support never sleeps. We ensure 99.9% uptime for your agent portal." },
                    { icon: Globe, title: "Pan-India Coverage", desc: "Native support for operations in 22 regional languages." },
                    { icon: Sparkles, title: "Next-Gen Infrastructure", desc: "Built on a secure dark-mesh architecture for ultimate data isolation." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-8 lg:gap-12 items-start group">
                      <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-[1.5rem] flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:shadow-ambient group-hover:border-blue-600 transition-all duration-300">
                        <item.icon className="size-7 text-slate-400 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors tracking-tight">{item.title}</h3>
                        <p className="text-slate-500 font-medium leading-relaxed text-lg">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Payment Options */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-50 rounded-[3rem] border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:shadow-blue-500/15 hover:border-blue-200 transition-all duration-500">
                  <CardHeader className="p-10 pb-6 border-b border-slate-200/50">
                    <div className="flex items-center gap-8 lg:gap-12">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100">
                        <CreditCard className="size-8 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-black text-slate-900 tracking-tight">Settlement Options</CardTitle>
                        <CardDescription className="text-base font-medium mt-1">Enterprise & subscription gateways</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-10 pt-6">
                    <div className="grid grid-cols-2 gap-8 lg:gap-12">
                      {paymentMethods.map((method, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-8 lg:gap-12 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm"
                        >
                          <div className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-[12px] font-black shrink-0">
                            ✓
                          </div>
                          <span className="text-sm font-bold text-slate-700">{method.name}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Map Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-slate-50 rounded-[3rem] h-72 border border-slate-200 shadow-sm overflow-hidden relative group cursor-pointer hover:shadow-2xl hover:-translate-y-2 hover:shadow-blue-500/15 transition-all duration-500">
                  <div className="absolute inset-0 bg-slate-200 animate-pulse group-hover:hidden transition-all"></div>
                  <div className="absolute inset-0 flex items-center justify-center bg-blue-50/50 group-hover:bg-blue-50 transition-colors duration-500 backdrop-blur-sm z-10">
                    <div className="text-center group-hover:scale-110 transition-transform duration-500">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-ambient border border-blue-100 group-hover:border-blue-300 transition-colors">
                        <MapPin className="h-10 w-10 text-blue-600" />
                      </div>
                      <p className="font-black text-xl text-slate-900 tracking-tight">Corporate HQ</p>
                      <p className="text-base font-medium text-slate-500 mt-2">Ahmedabad, Gujarat</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
