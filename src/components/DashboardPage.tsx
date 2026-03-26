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

  const stats = [
    { title: "Total Clients", value: clients.length.toString(), change: "+12%", icon: Users, color: "text-blue-600", bgColor: "bg-blue-50" },
    { title: "Active Policies", value: "582", change: "+8%", icon: FileText, color: "text-green-600", bgColor: "bg-green-50" },
    { title: "Monthly Revenue", value: "₹4.2L", change: "+23%", icon: TrendingUp, color: "text-purple-600", bgColor: "bg-purple-50" },
    { title: "Pending Reminders", value: reminders.filter(r => !r.completed).length.toString(), change: "Active", icon: Bell, color: "text-orange-600", bgColor: "bg-orange-50" }
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
    <div className="min-h-screen bg-background pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <Badge variant="outline" className="mb-4 bg-primary/5 text-primary border-primary/20 font-bold px-4 py-1 animate-fade-in">WORKSPACE</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-secondary">Agent <span className="text-primary">Dashboard</span></h1>
            <p className="text-lg text-muted-foreground font-medium mt-2">Managing your portfolio with precision and institutional grade tools.</p>
          </motion.div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="rounded-xl shadow-sm h-11 px-6">
              <Download className="mr-2 h-4 w-4" strokeWidth={1.5} /> Export Data
            </Button>
            <Button className="rounded-xl h-11 px-6">
              <Plus className="mr-2 h-4 w-4" strokeWidth={1.5} /> Quick Action
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="group">
              <Card className="metric-card-gradient rounded-2xl overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{stat.title}</span>
                  <div className={`w-10 h-10 ${stat.bgColor} rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                    <stat.icon className={`h-5 w-5 ${stat.color}`} strokeWidth={1.5} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold tracking-tight text-secondary mb-1">{stat.value}</div>
                  <div className="flex items-center gap-2">
                    <Badge variant="success" className="h-5 px-1.5 text-[10px]">{stat.change}</Badge>
                    <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Growth</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <main className="mt-8">
          <Tabs defaultValue="clients" className="space-y-12">
            <div className="flex justify-start overflow-x-auto pb-4 scrollbar-hide">
              <TabsList className="bg-secondary/5 rounded-2xl p-1.5 h-auto border border-border shadow-inner flex">
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
                    className="flex items-center gap-2 px-6 py-3 rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-floating data-[state=active]:text-primary transition-all font-bold text-muted-foreground"
                  >
                    <tab.icon className="h-4 w-4" strokeWidth={1.5} />
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Clients Tab */}
            <TabsContent value="clients" className="space-y-8 outline-none">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid gap-8">
                <Card className="rounded-xl border-border shadow-floating overflow-hidden">
                  <CardHeader className="p-8 lg:p-10 border-b border-border/50">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                      <div>
                        <CardTitle className="text-2xl font-bold text-secondary uppercase tracking-tight">Client Portfolio</CardTitle>
                        <CardDescription className="text-muted-foreground font-medium">Managing {clients.length} institutional accounts with premium access</CardDescription>
                      </div>
                      <Dialog open={isAddClientOpen} onOpenChange={setIsAddClientOpen}>
                        <DialogTrigger asChild>
                          <Button className="rounded-xl h-12 px-8">
                            <Plus className="h-5 w-5 mr-2" strokeWidth={1.5} /> Onboard Client
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="rounded-2xl border-border p-8 shadow-floating">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold">New Client Registration</DialogTitle>
                            <DialogDescription>Initialize a new secure client profile.</DialogDescription>
                          </DialogHeader>
                          <form onSubmit={handleAddClient} className="space-y-6 pt-4">
                            <div className="space-y-2">
                              <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Legal Name</Label>
                              <Input name="clientName" placeholder="Rahul Sharma" required className="rounded-xl h-12" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Email</Label>
                                <Input name="clientEmail" type="email" placeholder="rahul@domain.com" required className="rounded-xl h-12" />
                              </div>
                              <div className="space-y-2">
                                <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Phone</Label>
                                <Input name="clientPhone" type="tel" placeholder="+91 XXXX" required className="rounded-xl h-12" />
                              </div>
                            </div>
                            <Button type="submit" className="w-full h-12 rounded-xl mt-4">Generate Profile</Button>
                          </form>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="p-8 bg-secondary/5 border-b border-border/50">
                      <div className="relative max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
                        <Input
                          placeholder="Search identity or records..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-11 rounded-xl h-11 border-border bg-white"
                        />
                      </div>
                    </div>
                    <div className="overflow-x-auto">
                      <Table className="premium-table">
                        <TableHeader>
                          <TableRow className="bg-slate-50/50 hover:bg-transparent">
                            <TableHead className="py-5 pl-8 text-[10px] font-black uppercase tracking-widest text-slate-500">Client Identity</TableHead>
                            <TableHead className="text-[10px] font-black uppercase tracking-widest text-slate-500 text-center">Status</TableHead>
                            <TableHead className="text-[10px] font-black uppercase tracking-widest text-slate-500">Policies</TableHead>
                            <TableHead className="text-[10px] font-black uppercase tracking-widest text-slate-500 text-right pr-8">Premium Vol.</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {clients.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase())).map((client) => (
                            <TableRow key={client.id} className="group transition-all duration-300">
                              <TableCell className="py-6 pl-8">
                                <div className="flex items-center gap-4">
                                  <div className="w-10 h-10 rounded-full bg-secondary/5 border border-border flex items-center justify-center font-bold text-muted-foreground shadow-sm transition-transform duration-300 group-hover:scale-110">{client.name.charAt(0)}</div>
                                  <div>
                                    <div className="font-bold text-secondary group-hover:text-primary">{client.name}</div>
                                    <div className="text-xs text-muted-foreground font-medium">{client.email}</div>
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell className="text-center">
                                <Badge
                                  variant={client.status === "Active" ? "success" : "info"}
                                  className="uppercase tracking-tight inline-flex items-center gap-1"
                                >
                                  <span className={`status-dot ${client.status === "Active" ? "status-dot-active" : client.status === "Pending" ? "status-dot-pending" : ""}`} />
                                  {client.status}
                                </Badge>
                              </TableCell>
                              <TableCell className="font-bold text-muted-foreground">{client.policies} Active</TableCell>
                              <TableCell className="text-right pr-8 font-black text-secondary">₹{Number(client.premium).toLocaleString()}</TableCell>
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
                  <Card key={claim.id} className="rounded-xl border-border shadow-floating overflow-hidden group hover:bg-white transition-all duration-300">
                    <CardHeader className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <Badge variant="outline" className="text-[10px] font-bold">{claim.id}</Badge>
                        <Badge variant="info" className="text-[10px] font-bold">{claim.stage}</Badge>
                      </div>
                      <CardTitle className="text-xl font-bold tracking-tight mb-1 group-hover:text-primary transition-colors uppercase">{claim.client}</CardTitle>
                      <CardDescription className="font-bold text-[10px] uppercase tracking-widest text-muted-foreground">{claim.type} • {claim.date}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 pt-0 space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between text-[10px] font-bold tracking-widest uppercase text-muted-foreground">
                          <span>Settlement Progress</span>
                          <span>{claim.status}%</span>
                        </div>
                        <Progress value={claim.status} className="h-2" />
                      </div>
                      <div className="flex items-center gap-4 py-4 border-t border-border/50">
                        <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform"><TrendingUp className="h-5 w-5" strokeWidth={1.5} /></div>
                        <div>
                          <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Estimated Value</p>
                          <p className="text-lg font-bold text-secondary tracking-tight">{claim.amount}</p>
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
                <Card className="rounded-xl border-border shadow-floating overflow-hidden">
                  <CardContent className="p-0">
                    <Table className="premium-table">
                      <TableHeader className="bg-secondary/5">
                        <TableRow className="border-b border-border/50 hover:bg-transparent">
                          <TableHead className="py-6 pl-8 text-[10px] font-bold uppercase tracking-widest">Provider</TableHead>
                          <TableHead className="text-[10px] font-bold uppercase tracking-widest">Plan</TableHead>
                          <TableHead className="text-[10px] font-bold uppercase tracking-widest">Premium</TableHead>
                          <TableHead className="text-[10px] font-bold uppercase tracking-widest">Coverage</TableHead>
                          <TableHead className="text-[10px] font-bold uppercase tracking-widest">Rating</TableHead>
                          <TableHead className="text-right pr-8 text-[10px] font-bold uppercase tracking-widest">Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {sortedPolicies.map((p, i) => (
                          <TableRow key={i} className="border-b border-border/50">
                            <TableCell className="py-6 pl-8 font-bold text-secondary group-hover:text-primary">{p.provider}</TableCell>
                            <TableCell className="font-semibold text-muted-foreground">{p.plan}</TableCell>
                            <TableCell className="font-bold text-secondary">{p.premium}</TableCell>
                            <TableCell className="font-medium text-muted-foreground">{p.coverage}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-1 bg-amber-50 rounded-lg px-2 py-1 w-fit border border-amber-100">
                                <span className="text-xs font-bold text-amber-700">{p.rating} ★</span>
                              </div>
                            </TableCell>
                            <TableCell className="text-right pr-8">
                              <Button variant="ghost" className="rounded-xl h-9 px-4 font-bold text-primary">Select</Button>
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
                <Card className="rounded-xl border-border shadow-floating overflow-hidden">
                  <CardHeader className="p-8 lg:p-10 border-b border-border/50">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                      <div>
                        <CardTitle className="text-2xl font-bold text-secondary uppercase tracking-tight">Document Repository</CardTitle>
                        <CardDescription className="text-muted-foreground font-medium">Secure institutional storage for policies and records</CardDescription>
                      </div>
                      <Dialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen}>
                        <DialogTrigger asChild>
                          <Button className="rounded-xl h-11 px-8">
                            <Upload className="h-4 w-4 mr-2" strokeWidth={1.5} /> Upload Record
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="rounded-2xl border-border p-8 shadow-floating">
                          <DialogHeader><DialogTitle className="text-2xl font-bold">Secure Asset Upload</DialogTitle></DialogHeader>
                          <form onSubmit={handleFileUpload} className="space-y-6 pt-4">
                            <div className="space-y-2">
                              <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Asset File</Label>
                              <Input type="file" ref={fileInputRef} onChange={handleFileSelect} className="rounded-xl h-12 pt-2 border-border" required />
                            </div>
                            <div className="space-y-2">
                              <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Classification</Label>
                              <Select onValueChange={setDocumentType} required>
                                <SelectTrigger className="rounded-xl h-12 border-border"><SelectValue placeholder="Select type" /></SelectTrigger>
                                <SelectContent className="rounded-xl">
                                  <SelectItem value="Policy">Policy document</SelectItem>
                                  <SelectItem value="ID">Identity verification</SelectItem>
                                  <SelectItem value="Claims">Claims record</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <Button type="submit" disabled={uploadingFile} className="w-full h-12 rounded-xl shadow-lg">{uploadingFile ? "Encrypting Asset..." : "Finalize Upload"}</Button>
                          </form>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {uploadedFiles.map((file) => (
                        <Card key={file.id} className="rounded-xl border-border shadow-sm hover:shadow-floating transition-all duration-300 group overflow-hidden border hover:border-primary/20 bg-white">
                          <CardContent className="p-6">
                            <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"><FileText className="h-6 w-6" strokeWidth={1.5} /></div>
                            <div className="space-y-1">
                              <h4 className="font-bold text-secondary truncate tracking-tight">{file.name}</h4>
                              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{file.size} • {file.type}</p>
                              <p className="text-[10px] font-medium text-muted-foreground italic mt-1">{file.date}</p>
                            </div>
                            <div className="flex gap-2 mt-6 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-lg hover:bg-primary/10 text-primary" onClick={() => handleFileDownload(file.id)}><Download className="h-4 w-4" strokeWidth={1.5} /></Button>
                              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-lg hover:bg-red-50 text-red-500" onClick={() => handleFileDelete(file.id)}><Trash2 className="h-4 w-4" strokeWidth={1.5} /></Button>
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
            {/* Reminders Tab */}
            <TabsContent value="reminders" className="space-y-8 outline-none">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid gap-8">
                <Card className="rounded-xl border-border shadow-floating overflow-hidden">
                  <CardHeader className="p-8 lg:p-10 border-b border-border/50">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                      <div>
                        <CardTitle className="text-2xl font-bold text-secondary uppercase tracking-tight">Alert Center</CardTitle>
                        <CardDescription className="text-muted-foreground font-medium">Lifecycle management for institutional tasks</CardDescription>
                      </div>
                      <Dialog open={isReminderDialogOpen} onOpenChange={setIsReminderDialogOpen}>
                        <DialogTrigger asChild>
                          <Button className="rounded-xl h-11 px-6 font-bold"><Plus className="h-4 w-4 mr-2" strokeWidth={1.5} /> Set Alert</Button>
                        </DialogTrigger>
                        <DialogContent className="rounded-2xl border-border p-8 shadow-floating">
                          <DialogHeader><DialogTitle className="text-2xl font-bold">New Lifecycle Reminder</DialogTitle></DialogHeader>
                          <form onSubmit={handleCreateReminder} className="space-y-6 pt-4">
                            <div className="space-y-2">
                              <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Client Reference</Label>
                              <Select value={reminderFormData.clientId} onValueChange={(v: string) => setReminderFormData(f => ({...f, clientId: v}))} required>
                                <SelectTrigger className="rounded-xl h-12 border-border"><SelectValue placeholder="Select client" /></SelectTrigger>
                                <SelectContent className="rounded-xl">
                                  {clients.map(c => <SelectItem key={c.id} value={c.id.toString()}>{c.name}</SelectItem>)}
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Event Date</Label>
                                <Input type="date" value={reminderFormData.date} onChange={(e) => setReminderFormData(f => ({...f, date: e.target.value}))} className="rounded-xl h-12 border-border" required />
                              </div>
                              <div className="space-y-2">
                                <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Priority</Label>
                                <Select value={reminderFormData.priority} onValueChange={(v: string) => setReminderFormData(f => ({...f, priority: v}))} required>
                                  <SelectTrigger className="rounded-xl h-12 border-border"><SelectValue placeholder="Priority" /></SelectTrigger>
                                  <SelectContent className="rounded-xl">
                                    <SelectItem value="High">Priority (High)</SelectItem>
                                    <SelectItem value="Medium">Standard (Med)</SelectItem>
                                    <SelectItem value="Low">Future (Low)</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Event Description</Label>
                              <Input placeholder="Renewal of Health Policy" value={reminderFormData.type} onChange={(e) => setReminderFormData(f => ({...f, type: e.target.value}))} className="rounded-xl h-12 border-border" required />
                            </div>
                            <Button type="submit" className="w-full h-12 rounded-xl font-bold shadow-lg">Activate Reminder</Button>
                          </form>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      {reminders.length === 0 ? (
                        <div className="text-center py-12 text-muted-foreground font-medium">No active lifecycle alerts found.</div>
                      ) : (
                        reminders.map((reminder) => (
                          <div key={reminder.id} className={`flex items-center justify-between p-6 rounded-xl border transition-all duration-300 ${reminder.completed ? 'opacity-50 grayscale bg-secondary/5 border-border/50' : 'bg-white border-border shadow-sm hover:shadow-floating'}`}>
                            <div className="flex items-center gap-6 flex-1">
                              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 hover:scale-110 ${reminder.completed ? 'bg-secondary/10 text-muted-foreground' : 'bg-primary/5 text-primary'}`}>
                                <Calendar className="h-6 w-6" strokeWidth={1.5} />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-3">
                                  <p className={`font-bold text-secondary tracking-tight ${reminder.completed ? 'line-through' : ''}`}>{reminder.type}</p>
                                  {reminder.completed && <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-widest">COMPLETED</Badge>}
                                </div>
                                <p className="text-xs font-bold text-muted-foreground uppercase tracking-tight">{reminder.clientName}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-6">
                              <Badge variant={reminder.priority === "High" ? "destructive" : reminder.priority === "Medium" ? "warning" : "secondary"} className="uppercase tracking-tight">{reminder.priority}</Badge>
                              <span className="text-xs font-bold text-muted-foreground tracking-tight">{new Date(reminder.date).toLocaleDateString()}</span>
                              <div className="flex gap-2">
                                {!reminder.completed && (
                                  <Button variant="ghost" size="icon" className="group" onClick={() => handleMarkReminderComplete(reminder.id)}><CheckCircle className="h-5 w-5 text-muted-foreground group-hover:text-emerald-500" strokeWidth={1.5} /></Button>
                                )}
                                <Button variant="ghost" size="icon" className="group" onClick={() => handleDeleteReminder(reminder.id)}><Trash2 className="h-5 w-5 text-muted-foreground group-hover:text-red-500" strokeWidth={1.5} /></Button>
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
            {/* Reports Tab */}
            <TabsContent value="reports" className="space-y-8 outline-none">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid gap-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="rounded-xl border-border shadow-floating p-8 bg-white">
                    <CardHeader className="p-0 mb-8"><CardTitle className="text-xl font-bold text-secondary uppercase tracking-tight">Revenue Matrix</CardTitle></CardHeader>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={salesData}><CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" /><XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#64748b', fontWeight: 'bold'}} /><YAxis hide /><RechartsTooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '1rem', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} /><Bar dataKey="achieved" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} barSize={30} /></BarChart>
                      </ResponsiveContainer>
                    </div>
                  </Card>
                  <Card className="rounded-xl border-border shadow-floating p-8 bg-white">
                    <CardHeader className="p-0 mb-8"><CardTitle className="text-xl font-bold text-secondary uppercase tracking-tight">Growth Velocity</CardTitle></CardHeader>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={salesData}><CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" /><XAxis dataKey="month" hide /><YAxis hide /><RechartsTooltip contentStyle={{borderRadius: '1rem', border: '1px solid #e2e8f0'}} /><Line type="monotone" dataKey="achieved" stroke="hsl(var(--primary))" strokeWidth={4} dot={{r: 4, fill: 'hsl(var(--primary))', strokeWidth: 2, stroke: '#fff'}} /></LineChart>
                      </ResponsiveContainer>
                    </div>
                  </Card>
                </div>
              </motion.div>
            </TabsContent>

            {/* Marketing Tab */}
            {/* Marketing Tab */}
            <TabsContent value="marketing" className="space-y-8 outline-none">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <Card className="rounded-xl border-border shadow-floating overflow-hidden bg-white">
                  <CardHeader className="p-8 lg:p-10 border-b border-border background bg-secondary text-white">
                    <CardTitle className="text-2xl font-bold uppercase tracking-tight">Brand Acceleration Engine</CardTitle>
                    <CardDescription className="text-primary/80 font-bold uppercase tracking-widest text-[10px]">Generate premium institutional collateral</CardDescription>
                  </CardHeader>
                  <CardContent className="p-8 grid md:grid-cols-2 gap-10">
                    <div className="space-y-8">
                      <div>
                        <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground block mb-4">Distribution Platforms</Label>
                        <div className="grid grid-cols-2 gap-4">
                          {[
                            { name: "Facebook", icon: Facebook },
                            { name: "Instagram", icon: Instagram },
                            { name: "LinkedIn", icon: Linkedin },
                            { name: "X (Twitter)", icon: Twitter },
                          ].map((p, i) => (
                            <Button key={i} variant="outline" className="h-24 rounded-xl flex flex-col gap-2 font-bold hover:border-primary hover:text-primary transition-all bg-white shadow-sm" onClick={() => handleGenerateMarketing(p.name)}>
                              <p.icon className="h-6 w-6" strokeWidth={1.5} />
                              <span className="text-[10px] uppercase tracking-widest">{p.name}</span>
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="bg-secondary/5 rounded-xl p-8 border-2 border-dashed border-border flex flex-col items-center justify-center text-center">
                      <Sparkles className="h-12 w-12 text-primary/20 mb-4 animate-pulse" />
                      <h4 className="text-lg font-bold text-secondary mb-2 tracking-tight">Creative Direction</h4>
                      <p className="text-sm text-muted-foreground max-w-xs mb-6 font-medium">Select a campaign theme to generate AI-driven institutional assets and copy.</p>
                      <Button className="rounded-xl h-12 px-8 shadow-floating">Activate AURA™ AI</Button>
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
