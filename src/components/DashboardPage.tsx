import { useState, useEffect, useRef } from "react";
import { Users, FileText, TrendingUp, Bell, Download, Calendar, Search, Plus, Facebook, Instagram, Linkedin, Twitter, FileImage, Upload, Trash2, Eye, CheckCircle, Clock, ArrowUpDown, X, Zap, Sparkles, BarChart3 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "./ui/dialog";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer } from "recharts";
import {
  type UploadedDocument,
  type Reminder,
  type Client,
  getDocuments,
  addDocument,
  deleteDocument,
  getDocumentById,
  downloadBase64File,
  getReminders,
  addReminder,
  deleteReminder,
  markReminderComplete,
  getClients,
  addClient,
  formatFileSize,
  fileToBase64,
  getUpcomingReminders
} from "../lib/storage";

interface Policy {
  provider: string;
  plan: string;
  premium: string;
  coverage: string;
  cashless: string;
  rating: number;
}

export function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<{ key: keyof Policy | null; direction: 'asc' | 'desc' }>({ key: null, direction: 'asc' });
  const [isAddClientOpen, setIsAddClientOpen] = useState(false);
  const [isClaimDialogOpen, setIsClaimDialogOpen] = useState(false);
  const [isReminderDialogOpen, setIsReminderDialogOpen] = useState(false);
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedDocument[]>([]);
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [showNotification, setShowNotification] = useState(false);
  const [uploadingFile, setUploadingFile] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form states
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [documentType, setDocumentType] = useState("");
  const [documentClient, setDocumentClient] = useState("");
  const [reminderFormData, setReminderFormData] = useState({
    clientId: "",
    type: "",
    date: "",
    priority: "",
    notes: ""
  });

  // Load data from storage on mount
  useEffect(() => {
    loadData();
    checkUpcomingReminders();
  }, []);

  const loadData = () => {
    setUploadedFiles(getDocuments());
    setReminders(getReminders());
    setClients(getClients());
  };

  const checkUpcomingReminders = () => {
    const upcoming = getUpcomingReminders();
    if (upcoming.length > 0) {
      setTimeout(() => {
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 8000);
      }, 2000);
    }
  };

  // Dynamic Metrics Calculations
  const totalClients = clients.length;
  const activePolicies = clients.reduce((sum, client) => sum + (client.policies || 0), 0);
  const monthlyRevenue = clients.reduce((sum, client) => {
    const premiumStr = client.premium ? client.premium.toString().replace(/,/g, '') : "0";
    return sum + Number(premiumStr);
  }, 0);
  const pendingReminders = clients.filter(c => c.status === "Renewal Due").length;

  const stats = [
    {
      title: "Total Clients",
      value: totalClients.toString(),
      change: "+12%",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Active Policies",
      value: activePolicies.toString(),
      change: "+5%",
      icon: FileText,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    },
    {
      title: "Monthly Revenue",
      value: `₹${(monthlyRevenue / 100000).toFixed(1)}L`,
      change: "+15%",
      icon: TrendingUp,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      title: "Pending Alerts",
      value: pendingReminders.toString(),
      change: "-2",
      icon: Clock,
      color: "text-amber-600",
      bgColor: "bg-amber-50"
    }
  ];

  const [claims] = useState([
    { id: "CLM001", client: "Rajesh Kumar", type: "Health", amount: "₹1,50,000", status: 60, stage: "Under Review", date: "2025-10-08" },
    { id: "CLM002", client: "Priya Sharma", type: "Life", amount: "₹5,00,000", status: 90, stage: "Approved", date: "2025-10-01" },
    { id: "CLM003", client: "Amit Patel", type: "Motor", amount: "₹45,000", status: 30, stage: "Documents Required", date: "2025-10-11" },
  ]);

  const recentActivities = [
    { action: "New policy created for Rajesh Kumar", time: "2 hours ago" },
    { action: "Claim approved for Priya Sharma", time: "5 hours ago" },
    { action: "Document uploaded by Amit Patel", time: "1 day ago" },
    { action: "Renewal reminder sent to 15 clients", time: "2 days ago" },
    { action: "Monthly report generated", time: "3 days ago" }
  ];

  const salesData = [
    { month: "Jun", target: 400000, achieved: 340000 },
    { month: "Jul", target: 400000, achieved: 368000 },
    { month: "Aug", target: 400000, achieved: 312000 },
    { month: "Sep", target: 400000, achieved: 384000 },
    { month: "Oct", target: 420000, achieved: 370000 }
  ];

  const policyComparison: Policy[] = [
    { provider: "Star Health", plan: "Comprehensive", premium: "₹12,000", coverage: "₹10L", cashless: "Yes", rating: 4.5 },
    { provider: "HDFC Ergo", plan: "Premium Plus", premium: "₹15,000", coverage: "₹15L", cashless: "Yes", rating: 4.7 },
    { provider: "ICICI Lombard", plan: "Health Shield", premium: "₹11,500", coverage: "₹8L", cashless: "Yes", rating: 4.3 },
    { provider: "Care Health", plan: "Supreme", premium: "₹13,500", coverage: "₹12L", cashless: "Yes", rating: 4.6 },
  ];

  const handleSort = (key: keyof Policy) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedPolicies = [...policyComparison].sort((a, b) => {
    const { key, direction } = sortConfig;
    if (!key) return 0;
    const aVal = a[key];
    const bVal = b[key];
    const modifier = direction === "asc" ? 1 : -1;
    if (typeof aVal === 'string' && typeof bVal === 'string') {
      return aVal.localeCompare(bVal) * modifier;
    }
    return (aVal > bVal ? 1 : aVal < bVal ? -1 : 0) * modifier;
  });

  const handleAddClient = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newClient: Client = {
      id: Date.now(),
      name: formData.get('clientName') as string,
      email: formData.get('clientEmail') as string,
      phone: formData.get('clientPhone') as string,
      policies: 0,
      status: "New",
      lastContact: "Just now",
      premium: "0"
    };
    
    addClient(newClient);
    setClients(getClients());
    toast.success("Client added successfully!", {
      description: `${newClient.name} has been added to your portfolio.`
    });
    setIsAddClientOpen(false);
  };

  const handleSubmitClaim = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Claim submitted successfully!", {
      description: "Claim has been submitted and is under review. You'll receive updates via email."
    });
    setIsClaimDialogOpen(false);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        toast.error("File too large", {
          description: "Please select a file smaller than 10MB"
        });
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleFileUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedFile || !documentType) {
      toast.error("Please fill all required fields");
      return;
    }

    setUploadingFile(true);
    try {
      const base64 = await fileToBase64(selectedFile);
      const clientName = clients.find(c => c.id.toString() === documentClient)?.name || "Unknown";
      
      const newDocument: UploadedDocument = {
        id: Date.now().toString(),
        name: selectedFile.name,
        type: documentType,
        size: formatFileSize(selectedFile.size),
        date: new Date().toISOString().split('T')[0],
        clientName: clientName,
        file: base64,
        mimeType: selectedFile.type
      };

      addDocument(newDocument);
      setUploadedFiles(getDocuments());
      toast.success("Document uploaded successfully!");
      setIsUploadDialogOpen(false);
      setSelectedFile(null);
      setDocumentType("");
      setDocumentClient("");
    } catch (error) {
      toast.error("Upload failed");
    } finally {
      setUploadingFile(false);
    }
  };

  const handleFileDelete = (id: string) => {
    deleteDocument(id);
    setUploadedFiles(getDocuments());
    toast.success("Document deleted");
  };

  const handleFileDownload = (id: string) => {
    const doc = getDocumentById(id);
    if (doc?.file) {
      downloadBase64File(doc.file, doc.name, doc.mimeType);
      toast.success(`Downloading ${doc.name}...`);
    } else {
      toast.error("File data missing");
    }
  };

  const handleCreateReminder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const client = clients.find(c => c.id.toString() === reminderFormData.clientId);
    if (!client) {
      toast.error("Please select a client");
      return;
    }

    const newReminder: Reminder = {
      id: Date.now().toString(),
      clientId: reminderFormData.clientId,
      clientName: client.name,
      type: reminderFormData.type,
      date: reminderFormData.date,
      priority: reminderFormData.priority,
      completed: false,
      createdAt: new Date().toISOString(),
      notes: reminderFormData.notes
    };

    addReminder(newReminder);
    setReminders(getReminders());
    toast.success("Reminder created!");
    setIsReminderDialogOpen(false);
    setReminderFormData({ clientId: "", type: "", date: "", priority: "", notes: "" });
  };

  const handleMarkReminderComplete = (id: string) => {
    markReminderComplete(id);
    setReminders(getReminders());
    toast.success("Task completed!");
  };

  const handleDeleteReminder = (id: string) => {
    deleteReminder(id);
    setReminders(getReminders());
    toast.success("Reminder removed");
  };

  const handleGenerateMarketing = (platform: string) => {
    toast.success(`${platform} content ready!`);
  };

  const handleDownloadReport = (name: string) => {
    toast.success(`Generating ${name}...`);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Premium Hero Header */}
      <section
        className="relative text-white overflow-hidden flex flex-col justify-center px-4 sm:px-6 lg:px-8"
        style={{
          background: 'linear-gradient(160deg, #0a1628 0%, #0052CC 35%, #0059E6 65%, #0066FF 100%)',
          paddingTop: '88px',
          paddingBottom: '64px',
          minHeight: '320px',
        }}
      >
        {/* Animated background orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/10 to-transparent blur-[150px] rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-gradient-to-tr from-blue-400/10 via-blue-500/5 to-transparent blur-[160px] rounded-full" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(59,130,246,0.10)_0%,transparent_65%)]" />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(148,163,184,0.04) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.4,0,0.2,1] }}>
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/40 text-white text-[10px] font-black uppercase tracking-widest mb-6 backdrop-blur-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Zap className="size-3.5" />
                <span>Workspace</span>
              </motion.div>
              {/* Heading */}
              <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight leading-tight" style={{ color: '#F0F9FF', textShadow: '0 2px 20px rgba(0,0,0,0.35)' }}>
                Agent{' '}
                <span style={{
                  background: 'linear-gradient(90deg, #7DD3FC 0%, #38BDF8 50%, #BAE6FD 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 20px rgba(125,211,252,0.45))'
                }}>
                  Dashboard
                </span>
              </h1>
              <p className="text-lg font-medium" style={{ color: 'rgba(224,242,254,0.80)' }}>
                Managing your portfolio with precision and institutional grade tools.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex items-center gap-3 flex-shrink-0"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  height: '44px', padding: '0 24px', borderRadius: '9999px',
                  background: 'rgba(255,255,255,0.12)',
                  backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
                  color: '#ffffff', fontSize: '13px', fontWeight: 600,
                  border: '1.5px solid rgba(255,255,255,0.35)', cursor: 'pointer',
                }}
              >
                <Download className="h-4 w-4" strokeWidth={1.5} />
                Export Data
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  height: '44px', padding: '0 24px', borderRadius: '9999px',
                  background: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 60%, #60a5fa 100%)',
                  color: '#fff', fontSize: '13px', fontWeight: 700, border: 'none', cursor: 'pointer',
                  boxShadow: '0 0 18px rgba(59,130,246,0.55), 0 4px 18px rgba(59,130,246,0.35)',
                }}
              >
                <Plus className="h-4 w-4" strokeWidth={1.5} />
                Quick Action
              </motion.button>
            </motion.div>
          </div>

          {/* Stats Strip */}
          <motion.div
            style={{
              display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0',
              marginTop: '40px', paddingTop: '24px',
              borderTop: '1px solid rgba(255,255,255,0.15)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {[
              { value: totalClients.toString(), label: 'Total Clients', color: '#ffffff' },
              { value: activePolicies.toString(), label: 'Active Policies', color: '#bae6fd' },
              { value: `₹${(monthlyRevenue / 100000).toFixed(1)}L`, label: 'Monthly Revenue', color: '#ffffff' },
              { value: pendingReminders.toString(), label: 'Pending Alerts', color: '#bae6fd' },
            ].map((stat, i) => (
              <div key={stat.label} style={{ display: 'flex', alignItems: 'center' }}>
                {i > 0 && <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.15)', margin: '0 28px' }} />}
                <motion.div
                  style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                >
                  <div style={{ fontSize: '26px', fontWeight: 900, color: stat.color, letterSpacing: '-0.03em', lineHeight: 1 }}>{stat.value}</div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.55)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{stat.label}</div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="group" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i }}>
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/70 shadow-sm hover:shadow-lg transition-all bg-white p-6 group-hover:border-blue-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">{stat.title}</span>
                  <div className={`w-10 h-10 ${stat.bgColor} rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                    <stat.icon className={`h-5 w-5 ${stat.color}`} strokeWidth={1.5} />
                  </div>
                </div>
                <div className="text-3xl font-black tracking-tight text-slate-900 mb-1">{stat.value}</div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">{stat.change}</span>
                  <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">vs last month</span>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-blue-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        <main>
          <Tabs defaultValue="clients" className="space-y-8">
            <div className="flex justify-start overflow-x-auto pb-4 scrollbar-hide">
              <TabsList className="bg-white/80 backdrop-blur-md rounded-2xl p-2 border border-slate-200/50 shadow-sm flex gap-2 h-auto justify-start border-none">
                {[
                  { value: "clients", label: "Clients", icon: Users },
                  { value: "claims", label: "Claims", icon: FileText },
                  { value: "comparison", label: "Comparison", icon: ArrowUpDown },
                  { value: "documents", label: "Repository", icon: Upload },
                  { value: "reminders", label: "Alerts", icon: Bell },
                  { value: "reports", label: "Intelligence", icon: BarChart3 },
                  { value: "marketing", label: "Growth", icon: Sparkles }
                ].map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="flex items-center gap-2 px-6 py-3 rounded-2xl data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all font-bold text-slate-600 text-sm hover:bg-slate-50"
                  >
                    <tab.icon className="h-5 w-5" strokeWidth={1.5} />
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Clients Tab */}
            <TabsContent value="clients" className="space-y-8 outline-none">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid gap-8">
                <Card className="rounded-2xl border border-slate-200/50 shadow-ambient-lg overflow-hidden bg-white">
                  <CardHeader className="p-8 lg:p-10 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-6 bg-slate-50/50">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-4">
                        <Users className="size-3" />
                        <span>Portfolio Manager</span>
                      </div>
                      <CardTitle className="text-3xl font-black text-slate-900 tracking-tight mb-2">Client Portfolio</CardTitle>
                      <CardDescription className="text-slate-600 font-medium text-lg">Managing {clients.length} institutional accounts with premium access</CardDescription>
                    </div>
                    <Dialog open={isAddClientOpen} onOpenChange={setIsAddClientOpen}>
                      <DialogTrigger asChild>
                        <Button className="rounded-2xl h-14 px-8 shadow-ambient bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all hover:scale-105 active:scale-95">
                          <Plus className="h-5 w-5 mr-2" strokeWidth={2} /> Onboard Client
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="rounded-2xl border-slate-200 p-10 shadow-ambient-lg bg-white/95 backdrop-blur-xl">
                        <DialogHeader>
                          <DialogTitle className="text-3xl font-black tracking-tight text-slate-900">New Client Registration</DialogTitle>
                          <DialogDescription className="text-slate-600 text-lg font-medium mt-2">Initialize a new secure client profile.</DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleAddClient} className="space-y-6 pt-6">
                          <div className="space-y-3">
                            <Label className="text-xs font-black uppercase tracking-widest text-slate-600">Legal Name</Label>
                            <Input name="clientName" placeholder="Rahul Sharma" required className="rounded-2xl h-14 bg-slate-50 border-slate-200 text-lg" />
                          </div>
                          <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-3">
                              <Label className="text-xs font-black uppercase tracking-widest text-slate-600">Email Address</Label>
                              <Input name="clientEmail" type="email" placeholder="rahul@domain.com" required className="rounded-2xl h-14 bg-slate-50 border-slate-200" />
                            </div>
                            <div className="space-y-3">
                              <Label className="text-xs font-black uppercase tracking-widest text-slate-600">Phone</Label>
                              <Input name="clientPhone" type="tel" placeholder="+91 XXXX" required className="rounded-2xl h-14 bg-slate-50 border-slate-200" />
                            </div>
                          </div>
                          <Button type="submit" className="w-full h-14 rounded-2xl mt-8 text-lg font-bold shadow-ambient bg-blue-600 hover:bg-blue-700 text-white">Generate Profile</Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="p-8 bg-white border-b border-slate-100">
                      <div className="relative max-w-xl">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-600" strokeWidth={2} />
                        <Input
                          placeholder="Search identity or records..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-14 rounded-2xl h-14 border-slate-200 bg-slate-50/50 text-slate-900 font-medium text-lg placeholder:text-slate-600 transition-all focus:bg-white focus:shadow-ambient"
                        />
                      </div>
                    </div>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-slate-50/50 hover:bg-slate-50/50 border-b border-slate-100">
                            <TableHead className="py-6 pl-10 text-[11px] font-black uppercase tracking-widest text-slate-600">Client Identity</TableHead>
                            <TableHead className="text-[11px] font-black uppercase tracking-widest text-slate-600 text-center">Status</TableHead>
                            <TableHead className="text-[11px] font-black uppercase tracking-widest text-slate-600">Policies</TableHead>
                            <TableHead className="text-[11px] font-black uppercase tracking-widest text-slate-600 text-right pr-10">Premium Vol.</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {clients.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase())).map((client) => (
                            <TableRow key={client.id} className="group transition-all duration-300 hover:bg-slate-50/80 border-b border-slate-50 cursor-pointer">
                              <TableCell className="py-6 pl-10">
                                <div className="flex items-center gap-5">
                                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center font-black text-lg shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                                    {client.name.charAt(0)}
                                  </div>
                                  <div>
                                    <div className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">{client.name}</div>
                                    <div className="text-sm text-slate-600 font-medium">{client.email}</div>
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell className="text-center">
                                <Badge
                                  className={`px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                                    client.status === "Active" 
                                      ? "bg-emerald-50 text-emerald-600 border border-emerald-200" 
                                      : client.status === "Renewal Due"
                                      ? "bg-red-50 text-red-600 border border-red-200"
                                      : "bg-amber-50 text-amber-600 border border-amber-200"
                                  }`}
                                >
                                  {client.status}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <div className="font-black text-slate-900">{client.policies} <span className="text-slate-600 font-bold ml-1">Active</span></div>
                              </TableCell>
                              <TableCell className="text-right pr-10 font-black text-slate-900 text-lg">
                                ₹{Number(client.premium).toLocaleString()}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Claims Tab */}
            <TabsContent value="claims" className="space-y-8 outline-none">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {claims.map((claim) => (
                  <Card key={claim.id} className="rounded-2xl border border-slate-200/50 shadow-ambient overflow-hidden group hover:shadow-ambient-lg hover:border-blue-200 transition-all duration-300 bg-white">
                    <CardHeader className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <Badge variant="outline" className="text-[10px] font-black tracking-widest uppercase bg-slate-50 border-slate-200 text-slate-600 rounded-full px-3">{claim.id}</Badge>
                        <Badge className="text-[10px] font-black tracking-widest uppercase bg-blue-50 text-blue-600 border border-blue-100 rounded-full px-3">{claim.stage}</Badge>
                      </div>
                      <CardTitle className="text-2xl font-black tracking-tight text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{claim.client}</CardTitle>
                      <CardDescription className="font-bold text-xs uppercase tracking-widest text-slate-600">{claim.type} • {claim.date}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-8 pt-0 space-y-8">
                      <div className="space-y-3">
                        <div className="flex justify-between text-[10px] font-black tracking-widest uppercase text-slate-600">
                          <span>Settlement Progress</span>
                          <span className="text-blue-600">{claim.status}%</span>
                        </div>
                        <Progress value={claim.status} className="h-2.5 bg-slate-100 [&>div]:bg-blue-500" />
                      </div>
                      <div className="flex items-center gap-5 pt-6 border-t border-slate-100">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform"><TrendingUp className="h-6 w-6" strokeWidth={2} /></div>
                        <div>
                          <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-1">Estimated Value</p>
                          <p className="text-2xl font-black text-slate-900 tracking-tight">{claim.amount}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </TabsContent>

            {/* Comparison Tab */}
            <TabsContent value="comparison" className="space-y-8 outline-none">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <Card className="rounded-2xl border border-slate-200/50 shadow-ambient-lg overflow-hidden bg-white">
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader className="bg-slate-50/50">
                        <TableRow className="border-b border-slate-100 hover:bg-slate-50/50">
                          <TableHead className="py-8 pl-10 text-[11px] font-black uppercase tracking-widest text-slate-600">Provider</TableHead>
                          <TableHead className="text-[11px] font-black uppercase tracking-widest text-slate-600">Plan</TableHead>
                          <TableHead className="text-[11px] font-black uppercase tracking-widest text-slate-600">Premium</TableHead>
                          <TableHead className="text-[11px] font-black uppercase tracking-widest text-slate-600">Coverage</TableHead>
                          <TableHead className="text-[11px] font-black uppercase tracking-widest text-slate-600">Rating</TableHead>
                          <TableHead className="text-right pr-10 text-[11px] font-black uppercase tracking-widest text-slate-600">Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {sortedPolicies.map((p, i) => (
                          <TableRow key={i} className="border-b border-slate-50 hover:bg-slate-50/80 transition-colors group cursor-pointer">
                            <TableCell className="py-6 pl-10 font-bold text-slate-900 text-lg group-hover:text-blue-600">{p.provider}</TableCell>
                            <TableCell className="font-semibold text-slate-600">{p.plan}</TableCell>
                            <TableCell className="font-black text-slate-900 text-lg">{p.premium}</TableCell>
                            <TableCell className="font-medium text-slate-600">{p.coverage}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-1 bg-amber-50 rounded-full px-3 py-1.5 w-fit border border-amber-100">
                                <span className="text-xs font-black text-amber-700">{p.rating} ★</span>
                              </div>
                            </TableCell>
                            <TableCell className="text-right pr-10">
                              <Button variant="ghost" className="rounded-2xl h-10 px-6 font-bold text-blue-600 hover:bg-blue-50">Select</Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Documents Tab */}
            <TabsContent value="documents" className="space-y-8 outline-none">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid gap-8">
                <Card className="rounded-2xl border border-slate-200/50 shadow-ambient-lg overflow-hidden bg-white">
                  <CardHeader className="p-8 lg:p-10 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-6 bg-slate-50/50">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-4">
                        <Upload className="size-3" />
                        <span>Document Repository</span>
                      </div>
                      <CardTitle className="text-3xl font-black text-slate-900 tracking-tight mb-2">Secure Assets</CardTitle>
                      <CardDescription className="text-slate-600 font-medium text-lg">Institutional storage for policies and records</CardDescription>
                    </div>
                    <Dialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen}>
                      <DialogTrigger asChild>
                        <Button className="rounded-2xl h-14 px-8 shadow-ambient bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all hover:scale-105 active:scale-95">
                          <Upload className="h-5 w-5 mr-2" strokeWidth={2} /> Upload Record
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="rounded-2xl border-slate-200 p-10 shadow-ambient-lg bg-white/95 backdrop-blur-xl">
                        <DialogHeader><DialogTitle className="text-3xl font-black tracking-tight text-slate-900">Secure Asset Upload</DialogTitle></DialogHeader>
                        <form onSubmit={handleFileUpload} className="space-y-6 pt-6">
                          <div className="space-y-3">
                            <Label className="text-xs font-black uppercase tracking-widest text-slate-600">Asset File</Label>
                            <Input type="file" ref={fileInputRef} onChange={handleFileSelect} className="rounded-2xl h-14 pt-3 border-slate-200" required />
                          </div>
                          <div className="space-y-3">
                            <Label className="text-xs font-black uppercase tracking-widest text-slate-600">Classification</Label>
                            <Select onValueChange={setDocumentType} required>
                              <SelectTrigger className="rounded-2xl h-14 border-slate-200 text-lg"><SelectValue placeholder="Select type" /></SelectTrigger>
                              <SelectContent className="rounded-2xl border-slate-200">
                                <SelectItem value="Policy" className="text-base py-3">Policy document</SelectItem>
                                <SelectItem value="ID" className="text-base py-3">Identity verification</SelectItem>
                                <SelectItem value="Claims" className="text-base py-3">Claims record</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <Button type="submit" disabled={uploadingFile} className="w-full h-14 rounded-2xl mt-8 text-lg font-bold shadow-ambient bg-blue-600 hover:bg-blue-700 text-white">{uploadingFile ? "Encrypting Asset..." : "Finalize Upload"}</Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </CardHeader>
                  <CardContent className="p-8 lg:p-10">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {uploadedFiles.map((file) => (
                        <Card key={file.id} className="rounded-2xl border border-slate-200/70 shadow-sm hover:shadow-ambient transition-all duration-300 group overflow-hidden bg-white hover:border-blue-200">
                          <CardContent className="p-8">
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all"><FileText className="h-7 w-7" strokeWidth={1.5} /></div>
                            <div className="space-y-1.5">
                              <h4 className="font-bold text-slate-900 truncate tracking-tight text-lg">{file.name}</h4>
                              <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">{file.size} • {file.type}</p>
                              <p className="text-xs font-medium text-slate-600 italic mt-2">{file.date}</p>
                            </div>
                            <div className="flex gap-2 mt-8 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-blue-50 text-blue-600" onClick={() => handleFileDownload(file.id)}><Download className="h-5 w-5" strokeWidth={2} /></Button>
                              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-red-50 text-red-500" onClick={() => handleFileDelete(file.id)}><Trash2 className="h-5 w-5" strokeWidth={2} /></Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Reminders Tab */}
            <TabsContent value="reminders" className="space-y-8 outline-none">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid gap-8">
                <Card className="rounded-2xl border border-slate-200/50 shadow-ambient-lg overflow-hidden bg-white">
                  <CardHeader className="p-8 lg:p-10 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-6 bg-slate-50/50">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-4">
                        <Bell className="size-3" />
                        <span>Lifecycle Management</span>
                      </div>
                      <CardTitle className="text-3xl font-black text-slate-900 tracking-tight mb-2">Alert Center</CardTitle>
                      <CardDescription className="text-slate-600 font-medium text-lg">Proactive task tracking</CardDescription>
                    </div>
                    <Dialog open={isReminderDialogOpen} onOpenChange={setIsReminderDialogOpen}>
                      <DialogTrigger asChild>
                        <Button className="rounded-2xl h-14 px-8 shadow-ambient bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all hover:scale-105 active:scale-95"><Plus className="h-5 w-5 mr-2" strokeWidth={2} /> Set Alert</Button>
                      </DialogTrigger>
                      <DialogContent className="rounded-2xl border-slate-200 p-10 shadow-ambient-lg bg-white/95 backdrop-blur-xl">
                        <DialogHeader><DialogTitle className="text-3xl font-black tracking-tight text-slate-900">New Lifecycle Reminder</DialogTitle></DialogHeader>
                        <form onSubmit={handleCreateReminder} className="space-y-6 pt-6">
                          <div className="space-y-3">
                            <Label className="text-xs font-black uppercase tracking-widest text-slate-600">Client Reference</Label>
                            <Select value={reminderFormData.clientId} onValueChange={(v: string) => setReminderFormData(f => ({...f, clientId: v}))} required>
                              <SelectTrigger className="rounded-2xl h-14 border-slate-200 text-lg"><SelectValue placeholder="Select client" /></SelectTrigger>
                              <SelectContent className="rounded-2xl border-slate-200">
                                {clients.map(c => <SelectItem key={c.id} value={c.id.toString()} className="py-3 text-base">{c.name}</SelectItem>)}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-3">
                              <Label className="text-xs font-black uppercase tracking-widest text-slate-600">Event Date</Label>
                              <Input type="date" value={reminderFormData.date} onChange={(e) => setReminderFormData(f => ({...f, date: e.target.value}))} className="rounded-2xl h-14 border-slate-200 text-lg" required />
                            </div>
                            <div className="space-y-3">
                              <Label className="text-xs font-black uppercase tracking-widest text-slate-600">Priority</Label>
                              <Select value={reminderFormData.priority} onValueChange={(v: string) => setReminderFormData(f => ({...f, priority: v}))} required>
                                <SelectTrigger className="rounded-2xl h-14 border-slate-200 text-lg"><SelectValue placeholder="Priority" /></SelectTrigger>
                                <SelectContent className="rounded-2xl border-slate-200">
                                  <SelectItem value="High" className="py-3 text-base">Priority (High)</SelectItem>
                                  <SelectItem value="Medium" className="py-3 text-base">Standard (Med)</SelectItem>
                                  <SelectItem value="Low" className="py-3 text-base">Future (Low)</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <Label className="text-xs font-black uppercase tracking-widest text-slate-600">Event Description</Label>
                            <Input placeholder="Renewal of Health Policy" value={reminderFormData.type} onChange={(e) => setReminderFormData(f => ({...f, type: e.target.value}))} className="rounded-2xl h-14 border-slate-200 text-lg" required />
                          </div>
                          <Button type="submit" className="w-full h-14 rounded-2xl mt-8 text-lg font-bold shadow-ambient bg-blue-600 hover:bg-blue-700 text-white">Activate</Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </CardHeader>
                  <CardContent className="p-8 lg:p-10">
                    <div className="space-y-4">
                      {reminders.length === 0 ? (
                        <div className="text-center py-16 text-slate-600 font-bold text-lg">No active lifecycle alerts found.</div>
                      ) : (
                        reminders.map((reminder) => (
                          <div key={reminder.id} className={`flex items-center justify-between p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${reminder.completed ? 'opacity-50 grayscale bg-slate-50 border-slate-100 text-slate-600' : 'bg-white border-slate-200/70 shadow-sm hover:shadow-ambient hover:border-blue-200 text-slate-900 group'}`}>
                            <div className="flex items-center gap-6 flex-1">
                              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${reminder.completed ? 'bg-slate-100 text-slate-600' : 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'}`}>
                                <Calendar className="h-7 w-7" strokeWidth={1.5} />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-1">
                                  <p className={`text-xl font-bold tracking-tight ${reminder.completed ? 'line-through text-slate-600' : 'text-slate-900 group-hover:text-blue-600 transition-colors'}`}>{reminder.type}</p>
                                  {reminder.completed && <Badge className="bg-slate-200 text-slate-600 hover:bg-slate-200 text-[10px] font-black uppercase tracking-widest border-none px-2 rounded-full">COMPLETED</Badge>}
                                </div>
                                <p className="text-sm font-black text-slate-600 uppercase tracking-widest">{reminder.clientName}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-6 sm:gap-10">
                              <Badge className={`uppercase tracking-widest text-[10px] font-black px-3 py-1 rounded-full ${reminder.priority === 'High' ? 'bg-red-50 text-red-600 border border-red-200' : reminder.priority === 'Medium' ? 'bg-amber-50 text-amber-600 border border-amber-200' : 'bg-slate-100 text-slate-600 border border-slate-200'}`}>{reminder.priority}</Badge>
                              <span className="text-sm font-black text-slate-600 tracking-tight hidden sm:block">{new Date(reminder.date).toLocaleDateString()}</span>
                              <div className="flex gap-2">
                                {!reminder.completed && (
                                  <Button variant="ghost" size="icon" className="group/btn h-12 w-12 rounded-full bg-slate-50 hover:bg-emerald-50" onClick={() => handleMarkReminderComplete(reminder.id)}><CheckCircle className="h-6 w-6 text-slate-600 group-hover/btn:text-emerald-500" strokeWidth={2} /></Button>
                                )}
                                <Button variant="ghost" size="icon" className="group/btn h-12 w-12 rounded-full bg-slate-50 hover:bg-red-50" onClick={() => handleDeleteReminder(reminder.id)}><Trash2 className="h-6 w-6 text-slate-600 group-hover/btn:text-red-500" strokeWidth={2} /></Button>
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Reports Tab */}
            <TabsContent value="reports" className="space-y-8 outline-none">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid gap-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="rounded-2xl border border-slate-200/50 shadow-ambient-lg p-10 bg-white group">
                    <CardHeader className="p-0 mb-8"><CardTitle className="text-2xl font-black text-slate-900 uppercase tracking-tight group-hover:text-blue-600 transition-colors">Revenue Matrix</CardTitle></CardHeader>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={salesData}><CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" /><XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8', fontWeight: 900}} /><YAxis hide /><RechartsTooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '1.5rem', border: '1px solid #e2e8f0', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)', padding: '16px', fontWeight: 'bold'}} /><Bar dataKey="achieved" fill="#2563eb" radius={[6, 6, 0, 0]} barSize={40} /></BarChart>
                      </ResponsiveContainer>
                    </div>
                  </Card>
                  <Card className="rounded-2xl border border-slate-200/50 shadow-ambient-lg p-10 bg-white group">
                    <CardHeader className="p-0 mb-8"><CardTitle className="text-2xl font-black text-slate-900 uppercase tracking-tight group-hover:text-blue-600 transition-colors">Growth Velocity</CardTitle></CardHeader>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={salesData}><CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" /><XAxis dataKey="month" hide /><YAxis hide /><RechartsTooltip cursor={{stroke: '#e2e8f0', strokeWidth: 2, strokeDasharray: '4 4'}} contentStyle={{borderRadius: '1.5rem', border: '1px solid #e2e8f0', padding: '16px', fontWeight: 'bold', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)'}} /><Line type="monotone" dataKey="achieved" stroke="#2563eb" strokeWidth={4} dot={{r: 6, fill: '#2563eb', strokeWidth: 3, stroke: '#fff'}} activeDot={{r: 8, strokeWidth: 4}} /></LineChart>
                      </ResponsiveContainer>
                    </div>
                  </Card>
                </div>
              </motion.div>
            </TabsContent>

            {/* Marketing Tab */}
            <TabsContent value="marketing" className="space-y-8 outline-none">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <Card className="rounded-2xl border border-slate-200/50 shadow-ambient-lg overflow-hidden bg-white">
                  <CardHeader className="p-8 lg:p-12 relative overflow-hidden bg-slate-900 text-white">
                    <div className="absolute inset-0 pointer-events-none opacity-20">
                      <div className="absolute -top-10 -right-10 w-96 h-96 bg-blue-500 rounded-full blur-[100px]" />
                    </div>
                    <div className="relative z-10 w-full mb-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-blue-300 text-[10px] font-black uppercase tracking-widest backdrop-blur-md mb-6">
                        <Sparkles className="size-3" />
                        <span>AURA™ AI Engine</span>
                      </div>
                      <CardTitle className="text-4xl font-black uppercase tracking-tight mb-2">Brand Acceleration</CardTitle>
                      <CardDescription className="text-slate-400 font-medium text-lg">Generate premium institutional collateral</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8 lg:p-12 grid md:grid-cols-2 gap-12 bg-slate-50/50">
                    <div className="space-y-8">
                      <div>
                        <Label className="text-xs font-black uppercase tracking-widest text-slate-600 block mb-6">Distribution Platforms</Label>
                        <div className="grid grid-cols-2 gap-5">
                          {[
                            { name: "Facebook", icon: Facebook, color: "text-[#1877F2]" },
                            { name: "Instagram", icon: Instagram, color: "text-[#E4405F]" },
                            { name: "LinkedIn", icon: Linkedin, color: "text-[#0A66C2]" },
                            { name: "X (Twitter)", icon: Twitter, color: "text-slate-900" },
                          ].map((p, i) => (
                            <Button key={i} variant="outline" className="h-[120px] rounded-2xl flex flex-col gap-3 font-bold hover:border-blue-200 hover:shadow-ambient transition-all bg-white border-slate-200" onClick={() => handleGenerateMarketing(p.name)}>
                              <p.icon className={`h-8 w-8 ${p.color}`} strokeWidth={1.5} />
                              <span className="text-[11px] uppercase tracking-widest text-slate-600">{p.name}</span>
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl p-10 border border-slate-200/70 shadow-sm flex flex-col items-center justify-center text-center relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      <div className="w-20 h-20 rounded-2xl bg-slate-50 text-slate-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                        <Sparkles className="h-10 w-10 animate-pulse" strokeWidth={1.5} />
                      </div>
                      <h4 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Creative Direction</h4>
                      <p className="text-lg text-slate-600 max-w-sm mb-8 font-medium">Select a campaign theme to generate AI-driven institutional assets and copy.</p>
                      <Button className="rounded-2xl h-14 px-10 shadow-ambient bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg transition-all hover:scale-105">Activate AURA™ AI</Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
