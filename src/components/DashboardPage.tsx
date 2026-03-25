import { useState, useEffect, useRef } from "react";
import { Users, FileText, TrendingUp, Bell, Download, Calendar, Search, Plus, Facebook, Instagram, Linkedin, Twitter, FileImage, Upload, Trash2, Eye, CheckCircle, Clock, AlertCircle, ArrowUpDown, X } from "lucide-react";
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
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer } from "recharts";
import {
  getDocuments,
  addDocument,
  deleteDocument,
  getDocumentById,
  downloadBase64File,
  getReminders,
  addReminder,
  updateReminder,
  deleteReminder,
  markReminderComplete,
  getClients,
  addClient,
  formatFileSize,
  fileToBase64,
  getUpcomingReminders,
  type UploadedDocument,
  type Reminder,
  type Client
} from "../lib/storage";

export function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState<string>("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [isAddClientOpen, setIsAddClientOpen] = useState(false);
  const [isClaimDialogOpen, setIsClaimDialogOpen] = useState(false);
  const [isReminderDialogOpen, setIsReminderDialogOpen] = useState(false);
  const [isMarketingDialogOpen, setIsMarketingDialogOpen] = useState(false);
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

  const policyComparison = [
    { provider: "Star Health", plan: "Comprehensive", premium: "₹12,000", coverage: "₹10L", cashless: "Yes", rating: 4.5 },
    { provider: "HDFC Ergo", plan: "Premium Plus", premium: "₹15,000", coverage: "₹15L", cashless: "Yes", rating: 4.7 },
    { provider: "ICICI Lombard", plan: "Health Shield", premium: "₹11,500", coverage: "₹8L", cashless: "Yes", rating: 4.3 },
    { provider: "Care Health", plan: "Supreme", premium: "₹13,500", coverage: "₹12L", cashless: "Yes", rating: 4.6 },
  ];

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const sortedPolicies = [...policyComparison].sort((a, b) => {
    if (!sortColumn) return 0;
    const aVal = a[sortColumn as keyof typeof a];
    const bVal = b[sortColumn as keyof typeof b];
    const modifier = sortDirection === "asc" ? 1 : -1;
    return aVal > bVal ? modifier : -modifier;
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
      // Check file size (max 10MB)
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
    
    if (!selectedFile) {
      toast.error("No file selected");
      return;
    }

    if (!documentType) {
      toast.error("Please select document type");
      return;
    }

    setUploadingFile(true);

    try {
      // Convert file to base64
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
      
      toast.success("Document uploaded successfully!", {
        description: `${selectedFile.name} has been added to the document center.`
      });

      // Reset form
      setSelectedFile(null);
      setDocumentType("");
      setDocumentClient("");
      setIsUploadDialogOpen(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      toast.error("Upload failed", {
        description: "There was an error uploading the file. Please try again."
      });
    } finally {
      setUploadingFile(false);
    }
  };

  const handleFileDelete = (id: string) => {
    const doc = getDocumentById(id);
    if (doc) {
      deleteDocument(id);
      setUploadedFiles(getDocuments());
      toast.success("Document deleted successfully!", {
        description: `${doc.name} has been removed.`
      });
    }
  };

  const handleFileDownload = (id: string) => {
    const doc = getDocumentById(id);
    if (doc) {
      if (doc.file) {
        downloadBase64File(doc.file, doc.name, doc.mimeType);
        toast.success(`Downloading ${doc.name}...`);
      } else {
        toast.info("This is a demo document", {
          description: "No file data available for download."
        });
      }
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
    
    toast.success("Reminder created!", {
      description: `You'll be notified on ${new Date(reminderFormData.date).toLocaleDateString()}.`
    });

    // Reset form
    setReminderFormData({
      clientId: "",
      type: "",
      date: "",
      priority: "",
      notes: ""
    });
    setIsReminderDialogOpen(false);

    // Simulate notification popup after 2 seconds
    setTimeout(() => {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5000);
    }, 2000);
  };

  const handleMarkReminderComplete = (id: string) => {
    const reminder = reminders.find(r => r.id === id);
    if (reminder) {
      markReminderComplete(id);
      setReminders(getReminders());
      toast.success("Reminder marked as complete!", {
        description: `${reminder.type} for ${reminder.clientName} is done.`
      });
    }
  };

  const handleDeleteReminder = (id: string) => {
    deleteReminder(id);
    setReminders(getReminders());
    toast.success("Reminder deleted!");
  };

  const handleGenerateMarketing = (platform: string) => {
    toast.success(`${platform} post generated!`, {
      description: "Preview is ready. You can edit and publish."
    });
  };

  const handleDownloadReport = (reportName: string) => {
    toast.success(`${reportName} downloaded!`, {
      description: "Check your downloads folder."
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Real-time Notification Popup */}
        {showNotification && (
          <div className="fixed top-20 right-4 z-50 animate-in slide-in-from-right">
            <Card className="w-80 border-2 border-orange-500 shadow-lg">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bell className="h-5 w-5 text-orange-600" />
                    <CardTitle className="text-base">Reminder Alert</CardTitle>
                  </div>
                  <button onClick={() => setShowNotification(false)} className="text-gray-400 hover:text-gray-600">
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </CardHeader>
              <CardContent>
                {getUpcomingReminders().slice(0, 1).map(reminder => (
                  <div key={reminder.id}>
                    <p className="text-sm mb-1">{reminder.clientName}</p>
                    <p className="text-sm text-gray-600 mb-3">{reminder.type} due on {new Date(reminder.date).toLocaleDateString()}</p>
                    <Button 
                      size="sm" 
                      className="w-full bg-orange-600 hover:bg-orange-700"
                      onClick={() => {
                        setShowNotification(false);
                        // Could scroll to reminders tab here
                      }}
                    >
                      View Details
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl mb-2">Agent Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's your business overview.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-[22px] opacity-0 group-hover:opacity-100 transition duration-300 blur-sm"></div>
              <Card className="glass relative rounded-[20px] border-slate-200/50 shadow-ambient overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.title}</span>
                  <div className={`w-10 h-10 ${stat.bgColor} rounded-xl flex items-center justify-center shadow-inner`}>
                    <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold tracking-tight text-slate-900 mb-1">{stat.value}</div>
                  <div className="flex items-center gap-1.5">
                    <span className={`text-xs font-bold px-1.5 py-0.5 rounded-full ${
                      stat.change.startsWith('+') ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {stat.change}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">vs last month</span>
                  </div>
                </CardContent>
                
                {/* Decorative Sparkline pattern (SVG) */}
                <div className="absolute bottom-0 left-0 right-0 h-1 opacity-20 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
              </Card>
            </motion.div>
          ))}
        </div>

        <Tabs defaultValue="clients" className="space-y-6">
          <TabsList className="flex-wrap h-auto">
            <TabsTrigger value="clients">Clients</TabsTrigger>
            <TabsTrigger value="claims">Claim Tracking</TabsTrigger>
            <TabsTrigger value="comparison">Compare Plans</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="reminders">Reminders</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="marketing">Marketing</TabsTrigger>
          </TabsList>

          {/* Client Management Tab */}
          <TabsContent value="clients" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <div>
                    <CardTitle>Client Management</CardTitle>
                    <CardDescription>Manage and track all your clients in one place</CardDescription>
                  </div>
                  <Dialog open={isAddClientOpen} onOpenChange={setIsAddClientOpen}>
                    <DialogTrigger asChild>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Client
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Add New Client</DialogTitle>
                        <DialogDescription>Enter client details to add them to your portfolio</DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleAddClient} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="clientName">Full Name *</Label>
                          <Input id="clientName" name="clientName" placeholder="Enter client name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="clientEmail">Email *</Label>
                          <Input id="clientEmail" name="clientEmail" type="email" placeholder="client@example.com" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="clientPhone">Phone *</Label>
                          <Input id="clientPhone" name="clientPhone" type="tel" placeholder="+91 98765 43210" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="clientType">Policy Interest</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="health">Health Insurance</SelectItem>
                              <SelectItem value="life">Life Insurance</SelectItem>
                              <SelectItem value="motor">Motor Insurance</SelectItem>
                              <SelectItem value="mutual">Mutual Funds</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <DialogFooter>
                          <Button type="button" variant="outline" onClick={() => setIsAddClientOpen(false)}>
                            Cancel
                          </Button>
                          <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                            Add Client
                          </Button>
                        </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search clients..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Clients</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="renewal">Renewal Due</SelectItem>
                      <SelectItem value="new">New</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Client Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Policies</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Last Contact</TableHead>
                        <TableHead>Annual Premium</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {clients.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase())).map((client) => (
                        <TableRow key={client.id}>
                          <TableCell>{client.name}</TableCell>
                          <TableCell className="text-sm text-gray-600">{client.email}</TableCell>
                          <TableCell>{client.policies}</TableCell>
                          <TableCell>
                            <Badge variant={
                              client.status === "Active" ? "default" :
                              client.status === "Renewal Due" ? "destructive" :
                              "secondary"
                            }>
                              {client.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{client.lastContact}</TableCell>
                          <TableCell>₹{Number(client.premium).toLocaleString()}</TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm" onClick={() => toast.info("Opening client details...")}>
                              View Details
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 pb-4 border-b last:border-b-0">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                      <div className="flex-1">
                        <p className="text-sm">{activity.action}</p>
                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Claim Tracking Tab */}
          <TabsContent value="claims" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <div>
                    <CardTitle>Claim Tracking</CardTitle>
                    <CardDescription>Monitor claim status with real-time updates</CardDescription>
                  </div>
                  <Dialog open={isClaimDialogOpen} onOpenChange={setIsClaimDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        <Plus className="h-4 w-4 mr-2" />
                        Submit Claim
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Submit New Claim</DialogTitle>
                        <DialogDescription>Enter claim details for processing</DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleSubmitClaim} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="claimClient">Client Name *</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select client" />
                            </SelectTrigger>
                            <SelectContent>
                              {clients.map(c => (
                                <SelectItem key={c.id} value={c.id.toString()}>{c.name}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="claimType">Claim Type *</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="health">Health Insurance</SelectItem>
                              <SelectItem value="life">Life Insurance</SelectItem>
                              <SelectItem value="motor">Motor Insurance</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="claimAmount">Claim Amount *</Label>
                          <Input id="claimAmount" type="number" placeholder="Enter amount" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="claimDescription">Description *</Label>
                          <Textarea id="claimDescription" placeholder="Describe the claim..." rows={3} required />
                        </div>
                        <DialogFooter>
                          <Button type="button" variant="outline" onClick={() => setIsClaimDialogOpen(false)}>
                            Cancel
                          </Button>
                          <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                            Submit Claim
                          </Button>
                        </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {claims.map((claim) => (
                    <Card key={claim.id} className="border-2">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg">{claim.client}</CardTitle>
                            <CardDescription>Claim ID: {claim.id} • {claim.type} Insurance</CardDescription>
                          </div>
                          <Badge variant={
                            claim.status >= 90 ? "default" :
                            claim.status >= 60 ? "secondary" :
                            "outline"
                          }>
                            {claim.stage}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Amount: {claim.amount}</span>
                          <span className="text-gray-600">Submitted: {claim.date}</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span>{claim.status}%</span>
                          </div>
                          <Progress value={claim.status} />
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                          <div className="text-center">
                            <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${claim.status >= 25 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                              {claim.status >= 25 ? <CheckCircle className="h-4 w-4" /> : '1'}
                            </div>
                            <p className="text-xs mt-1">Submitted</p>
                          </div>
                          <div className="text-center">
                            <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${claim.status >= 50 ? 'bg-blue-600 text-white' : claim.status >= 25 ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}>
                              {claim.status >= 50 ? <CheckCircle className="h-4 w-4" /> : claim.status >= 25 ? <Clock className="h-4 w-4" /> : '2'}
                            </div>
                            <p className="text-xs mt-1">Review</p>
                          </div>
                          <div className="text-center">
                            <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${claim.status >= 75 ? 'bg-blue-600 text-white' : claim.status >= 50 ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}>
                              {claim.status >= 75 ? <CheckCircle className="h-4 w-4" /> : claim.status >= 50 ? <Clock className="h-4 w-4" /> : '3'}
                            </div>
                            <p className="text-xs mt-1">Approved</p>
                          </div>
                          <div className="text-center">
                            <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${claim.status >= 100 ? 'bg-green-600 text-white' : claim.status >= 75 ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}>
                              {claim.status >= 100 ? <CheckCircle className="h-4 w-4" /> : claim.status >= 75 ? <Clock className="h-4 w-4" /> : '4'}
                            </div>
                            <p className="text-xs mt-1">Settled</p>
                          </div>
                        </div>
                        <Button variant="outline" className="w-full" onClick={() => toast.info("Viewing claim details...")}>
                          <Eye className="h-4 w-4 mr-2" />
                          View Full Details
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Policy Comparison Tab */}
          <TabsContent value="comparison" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Policy Comparison</CardTitle>
                <CardDescription>Compare policies side-by-side with sortable columns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>
                          <button onClick={() => handleSort("provider")} className="flex items-center gap-1 hover:text-blue-600">
                            Provider <ArrowUpDown className="h-4 w-4" />
                          </button>
                        </TableHead>
                        <TableHead>
                          <button onClick={() => handleSort("plan")} className="flex items-center gap-1 hover:text-blue-600">
                            Plan <ArrowUpDown className="h-4 w-4" />
                          </button>
                        </TableHead>
                        <TableHead>
                          <button onClick={() => handleSort("premium")} className="flex items-center gap-1 hover:text-blue-600">
                            Premium <ArrowUpDown className="h-4 w-4" />
                          </button>
                        </TableHead>
                        <TableHead>
                          <button onClick={() => handleSort("coverage")} className="flex items-center gap-1 hover:text-blue-600">
                            Coverage <ArrowUpDown className="h-4 w-4" />
                          </button>
                        </TableHead>
                        <TableHead>Cashless</TableHead>
                        <TableHead>
                          <button onClick={() => handleSort("rating")} className="flex items-center gap-1 hover:text-blue-600">
                            Rating <ArrowUpDown className="h-4 w-4" />
                          </button>
                        </TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sortedPolicies.map((policy, index) => (
                        <TableRow key={index}>
                          <TableCell>{policy.provider}</TableCell>
                          <TableCell>{policy.plan}</TableCell>
                          <TableCell>{policy.premium}</TableCell>
                          <TableCell>{policy.coverage}</TableCell>
                          <TableCell>
                            <Badge variant="default">{policy.cashless}</Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              <span>{policy.rating}</span>
                              <span className="text-yellow-500">★</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Button size="sm" variant="outline" onClick={() => toast.success("Quote requested!")}>
                              Get Quote
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <div>
                    <CardTitle>Document Center</CardTitle>
                    <CardDescription>Secure storage for all client documents ({uploadedFiles.length} files)</CardDescription>
                  </div>
                  <Dialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Document
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Upload Document</DialogTitle>
                        <DialogDescription>Upload client documents securely (Max 10MB)</DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleFileUpload} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="fileUpload">Select File *</Label>
                          <Input
                            id="fileUpload"
                            ref={fileInputRef}
                            type="file"
                            onChange={handleFileSelect}
                            accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                            required
                          />
                          {selectedFile && (
                            <p className="text-sm text-gray-600">
                              Selected: {selectedFile.name} ({formatFileSize(selectedFile.size)})
                            </p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="docType">Document Type *</Label>
                          <Select value={documentType} onValueChange={setDocumentType} required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Aadhaar">Aadhaar Card</SelectItem>
                              <SelectItem value="PAN">PAN Card</SelectItem>
                              <SelectItem value="Health Card">Health Card</SelectItem>
                              <SelectItem value="Policy">Policy Document</SelectItem>
                              <SelectItem value="KYC">KYC Document</SelectItem>
                              <SelectItem value="Application">Application Form</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="docClient">Client (Optional)</Label>
                          <Select value={documentClient} onValueChange={setDocumentClient}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select client" />
                            </SelectTrigger>
                            <SelectContent>
                              {clients.map(c => (
                                <SelectItem key={c.id} value={c.id.toString()}>{c.name}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <DialogFooter>
                          <Button 
                            type="button" 
                            variant="outline" 
                            onClick={() => {
                              setIsUploadDialogOpen(false);
                              setSelectedFile(null);
                              setDocumentType("");
                              setDocumentClient("");
                            }}
                          >
                            Cancel
                          </Button>
                          <Button 
                            type="submit" 
                            className="bg-blue-600 hover:bg-blue-700"
                            disabled={uploadingFile}
                          >
                            {uploadingFile ? "Uploading..." : "Upload"}
                          </Button>
                        </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>File Name</TableHead>
                        <TableHead>Client</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Size</TableHead>
                        <TableHead>Upload Date</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {uploadedFiles.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center text-gray-500 py-8">
                            No documents uploaded yet. Click "Upload Document" to add files.
                          </TableCell>
                        </TableRow>
                      ) : (
                        uploadedFiles.map((file) => (
                          <TableRow key={file.id}>
                            <TableCell className="flex items-center gap-2">
                              <FileText className="h-4 w-4 text-blue-600" />
                              {file.name}
                            </TableCell>
                            <TableCell>{file.clientName || "—"}</TableCell>
                            <TableCell>
                              <Badge variant="secondary">{file.type}</Badge>
                            </TableCell>
                            <TableCell>{file.size}</TableCell>
                            <TableCell>{new Date(file.date).toLocaleDateString()}</TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button 
                                  size="sm" 
                                  variant="outline"
                                  onClick={() => handleFileDownload(file.id)}
                                  title="Download"
                                >
                                  <Download className="h-4 w-4" />
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant="outline"
                                  onClick={() => handleFileDelete(file.id)}
                                  title="Delete"
                                >
                                  <Trash2 className="h-4 w-4 text-red-600" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reminders Tab */}
          <TabsContent value="reminders" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <div>
                    <CardTitle>Reminders & Notifications</CardTitle>
                    <CardDescription>
                      {reminders.filter(r => !r.completed).length} active reminders
                    </CardDescription>
                  </div>
                  <Dialog open={isReminderDialogOpen} onOpenChange={setIsReminderDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        <Plus className="h-4 w-4 mr-2" />
                        Create Reminder
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Create New Reminder</DialogTitle>
                        <DialogDescription>Set up automated notifications for important dates</DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleCreateReminder} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="reminderClient">Client *</Label>
                          <Select 
                            value={reminderFormData.clientId} 
                            onValueChange={(value) => setReminderFormData({...reminderFormData, clientId: value})}
                            required
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select client" />
                            </SelectTrigger>
                            <SelectContent>
                              {clients.map(c => (
                                <SelectItem key={c.id} value={c.id.toString()}>{c.name}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="reminderType">Reminder Type *</Label>
                          <Select 
                            value={reminderFormData.type}
                            onValueChange={(value) => setReminderFormData({...reminderFormData, type: value})}
                            required
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Policy Renewal">Policy Renewal</SelectItem>
                              <SelectItem value="Premium Payment">Premium Payment</SelectItem>
                              <SelectItem value="Follow-up Call">Follow-up Call</SelectItem>
                              <SelectItem value="Document Collection">Document Collection</SelectItem>
                              <SelectItem value="Claim Follow-up">Claim Follow-up</SelectItem>
                              <SelectItem value="Birthday Wishes">Birthday Wishes</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="reminderDate">Date *</Label>
                          <Input 
                            id="reminderDate" 
                            type="date" 
                            value={reminderFormData.date}
                            onChange={(e) => setReminderFormData({...reminderFormData, date: e.target.value})}
                            min={new Date().toISOString().split('T')[0]}
                            required 
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="reminderPriority">Priority *</Label>
                          <Select 
                            value={reminderFormData.priority}
                            onValueChange={(value) => setReminderFormData({...reminderFormData, priority: value})}
                            required
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select priority" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="High">High</SelectItem>
                              <SelectItem value="Medium">Medium</SelectItem>
                              <SelectItem value="Low">Low</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="reminderNotes">Notes (Optional)</Label>
                          <Textarea 
                            id="reminderNotes"
                            value={reminderFormData.notes}
                            onChange={(e) => setReminderFormData({...reminderFormData, notes: e.target.value})}
                            placeholder="Add any additional notes..."
                            rows={3}
                          />
                        </div>
                        <DialogFooter>
                          <Button 
                            type="button" 
                            variant="outline" 
                            onClick={() => {
                              setIsReminderDialogOpen(false);
                              setReminderFormData({
                                clientId: "",
                                type: "",
                                date: "",
                                priority: "",
                                notes: ""
                              });
                            }}
                          >
                            Cancel
                          </Button>
                          <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                            Create Reminder
                          </Button>
                        </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reminders.length === 0 ? (
                    <div className="text-center text-gray-500 py-8">
                      No reminders yet. Click "Create Reminder" to add one.
                    </div>
                  ) : (
                    reminders.map((reminder) => (
                      <div 
                        key={reminder.id} 
                        className={`flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow ${
                          reminder.completed ? 'bg-gray-50 opacity-60' : ''
                        }`}
                      >
                        <div className="flex items-center gap-4 flex-1">
                          <Calendar className={`h-5 w-5 ${reminder.completed ? 'text-gray-400' : 'text-blue-600'}`} />
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <p className={reminder.completed ? 'line-through text-gray-500' : ''}>{reminder.type}</p>
                              {reminder.completed && <Badge variant="outline">Completed</Badge>}
                            </div>
                            <p className="text-sm text-gray-600">{reminder.clientName}</p>
                            {reminder.notes && <p className="text-xs text-gray-500 mt-1">{reminder.notes}</p>}
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant={
                            reminder.priority === "High" ? "destructive" :
                            reminder.priority === "Medium" ? "default" :
                            "secondary"
                          }>
                            {reminder.priority}
                          </Badge>
                          <span className="text-sm text-gray-600 min-w-[100px]">
                            {new Date(reminder.date).toLocaleDateString()}
                          </span>
                          <div className="flex gap-2">
                            {!reminder.completed && (
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleMarkReminderComplete(reminder.id)}
                              >
                                <CheckCircle className="h-4 w-4" />
                              </Button>
                            )}
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleDeleteReminder(reminder.id)}
                            >
                              <Trash2 className="h-4 w-4 text-red-600" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Sales Performance</CardTitle>
                  <CardDescription>Track your monthly targets</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={salesData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <RechartsTooltip />
                      <Legend />
                      <Bar dataKey="target" fill="#94a3b8" name="Target" />
                      <Bar dataKey="achieved" fill="#3b82f6" name="Achieved" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Revenue Trend</CardTitle>
                  <CardDescription>Monthly revenue over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={salesData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <RechartsTooltip />
                      <Legend />
                      <Line type="monotone" dataKey="achieved" stroke="#3b82f6" strokeWidth={2} name="Revenue" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Download Reports</CardTitle>
                <CardDescription>Generate and download comprehensive reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  <Button 
                    variant="outline" 
                    className="justify-start"
                    onClick={() => handleDownloadReport("Client Portfolio Report")}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Client Portfolio Report
                  </Button>
                  <Button 
                    variant="outline" 
                    className="justify-start"
                    onClick={() => handleDownloadReport("Monthly Sales Summary")}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Monthly Sales Summary
                  </Button>
                  <Button 
                    variant="outline" 
                    className="justify-start"
                    onClick={() => handleDownloadReport("Commission Statement")}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Commission Statement
                  </Button>
                  <Button 
                    variant="outline" 
                    className="justify-start"
                    onClick={() => handleDownloadReport("Renewal Forecast")}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Renewal Forecast
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Marketing Toolkit Tab */}
          <TabsContent value="marketing" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Social Media Content Generator</CardTitle>
                <CardDescription>Create professional posts for your social channels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <label className="text-sm mb-3 block">Select Platform</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <Button 
                        variant="outline" 
                        className="flex flex-col items-center gap-2 h-auto py-4"
                        onClick={() => handleGenerateMarketing("Facebook")}
                      >
                        <Facebook className="h-6 w-6 text-blue-600" />
                        <span className="text-sm">Facebook</span>
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex flex-col items-center gap-2 h-auto py-4"
                        onClick={() => handleGenerateMarketing("Instagram")}
                      >
                        <Instagram className="h-6 w-6 text-pink-600" />
                        <span className="text-sm">Instagram</span>
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex flex-col items-center gap-2 h-auto py-4"
                        onClick={() => handleGenerateMarketing("LinkedIn")}
                      >
                        <Linkedin className="h-6 w-6 text-blue-700" />
                        <span className="text-sm">LinkedIn</span>
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex flex-col items-center gap-2 h-auto py-4"
                        onClick={() => handleGenerateMarketing("X")}
                      >
                        <Twitter className="h-6 w-6 text-blue-400" />
                        <span className="text-sm">X (Twitter)</span>
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="contentTheme">Content Theme</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="health">Health Insurance Tips</SelectItem>
                        <SelectItem value="life">Life Insurance Benefits</SelectItem>
                        <SelectItem value="savings">Tax Saving Strategies</SelectItem>
                        <SelectItem value="festival">Festival Offers</SelectItem>
                        <SelectItem value="testimonial">Client Testimonial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Card className="bg-gray-50">
                    <CardHeader>
                      <CardTitle className="text-base">Preview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-white p-4 rounded-lg border">
                        <p className="mb-3">🏥 <strong>Protect Your Health, Secure Your Future</strong></p>
                        <p className="text-sm text-gray-600 mb-3">
                          Don't wait for a medical emergency to realize the importance of health insurance. 
                          Get comprehensive coverage starting at just ₹500/month.
                        </p>
                        <p className="text-sm text-blue-600">
                          💡 Call us today for a free consultation!<br />
                          📞 +91 98765 43210
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Marketing Materials</CardTitle>
                <CardDescription>Generate pamphlets and promotional materials</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  <Button 
                    variant="outline" 
                    className="justify-start"
                    onClick={() => toast.success("Health Insurance Brochure generated!")}
                  >
                    <FileImage className="h-4 w-4 mr-2" />
                    Health Insurance Brochure
                  </Button>
                  <Button 
                    variant="outline" 
                    className="justify-start"
                    onClick={() => toast.success("Life Insurance Flyer generated!")}
                  >
                    <FileImage className="h-4 w-4 mr-2" />
                    Life Insurance Flyer
                  </Button>
                  <Button 
                    variant="outline" 
                    className="justify-start"
                    onClick={() => toast.success("Mutual Funds Explainer generated!")}
                  >
                    <FileImage className="h-4 w-4 mr-2" />
                    Mutual Funds Explainer
                  </Button>
                  <Button 
                    variant="outline" 
                    className="justify-start"
                    onClick={() => toast.success("Custom Pamphlet generated!")}
                  >
                    <FileImage className="h-4 w-4 mr-2" />
                    Custom Pamphlet
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
