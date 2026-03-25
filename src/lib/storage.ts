// Simple localStorage-based database for Finestro

export interface UploadedDocument {
  id: string;
  name: string;
  type: string;
  size: string;
  date: string;
  clientName?: string;
  file: string; // base64 encoded file data
  mimeType: string;
}

export interface Reminder {
  id: string;
  clientId: string;
  clientName: string;
  type: string;
  date: string;
  priority: string;
  completed: boolean;
  createdAt: string;
  notes?: string;
}

export interface Client {
  id: number;
  name: string;
  email: string;
  phone?: string;
  policies: number;
  status: string;
  lastContact: string;
  premium: string;
}

// Initialize storage with default data if empty
const initializeStorage = () => {
  if (!localStorage.getItem('finestro_documents')) {
    const defaultDocs: UploadedDocument[] = [
      {
        id: "1",
        name: "Rajesh_Kumar_Aadhaar.pdf",
        type: "Aadhaar",
        size: "2.4 MB",
        date: "2025-10-10",
        clientName: "Rajesh Kumar",
        file: "",
        mimeType: "application/pdf"
      },
      {
        id: "2",
        name: "Policy_Document_12345.pdf",
        type: "Policy",
        size: "1.8 MB",
        date: "2025-10-08",
        clientName: "Priya Sharma",
        file: "",
        mimeType: "application/pdf"
      },
      {
        id: "3",
        name: "Health_Card_Priya.jpg",
        type: "Health Card",
        size: "856 KB",
        date: "2025-10-05",
        clientName: "Amit Patel",
        file: "",
        mimeType: "image/jpeg"
      }
    ];
    localStorage.setItem('finestro_documents', JSON.stringify(defaultDocs));
  }

  if (!localStorage.getItem('finestro_reminders')) {
    const defaultReminders: Reminder[] = [
      {
        id: "1",
        clientId: "1",
        clientName: "Rajesh Kumar",
        type: "Policy Renewal",
        date: "2025-10-15",
        priority: "High",
        completed: false,
        createdAt: new Date().toISOString()
      },
      {
        id: "2",
        clientId: "2",
        clientName: "Priya Sharma",
        type: "Claim Follow-up",
        date: "2025-10-18",
        priority: "Medium",
        completed: false,
        createdAt: new Date().toISOString()
      }
    ];
    localStorage.setItem('finestro_reminders', JSON.stringify(defaultReminders));
  }

  if (!localStorage.getItem('finestro_clients')) {
    const defaultClients: Client[] = [
      { id: 1, name: "Rajesh Kumar", policies: 3, status: "Active", lastContact: "2 days ago", premium: "45000", email: "rajesh@example.com" },
      { id: 2, name: "Priya Sharma", policies: 2, status: "Renewal Due", lastContact: "1 week ago", premium: "32000", email: "priya@example.com" },
      { id: 3, name: "Amit Patel", policies: 4, status: "Active", lastContact: "Today", premium: "67000", email: "amit@example.com" },
      { id: 4, name: "Sneha Iyer", policies: 1, status: "New", lastContact: "3 days ago", premium: "18000", email: "sneha@example.com" },
      { id: 5, name: "Mohammed Ahmed", policies: 5, status: "Active", lastContact: "5 days ago", premium: "89000", email: "mohammed@example.com" }
    ];
    localStorage.setItem('finestro_clients', JSON.stringify(defaultClients));
  }
};

// Document operations
export const getDocuments = (): UploadedDocument[] => {
  initializeStorage();
  const docs = localStorage.getItem('finestro_documents');
  return docs ? JSON.parse(docs) : [];
};

export const addDocument = (doc: UploadedDocument): void => {
  const docs = getDocuments();
  docs.unshift(doc);
  localStorage.setItem('finestro_documents', JSON.stringify(docs));
};

export const deleteDocument = (id: string): void => {
  const docs = getDocuments();
  const filtered = docs.filter(d => d.id !== id);
  localStorage.setItem('finestro_documents', JSON.stringify(filtered));
};

export const getDocumentById = (id: string): UploadedDocument | null => {
  const docs = getDocuments();
  return docs.find(d => d.id === id) || null;
};

// Reminder operations
export const getReminders = (): Reminder[] => {
  initializeStorage();
  const reminders = localStorage.getItem('finestro_reminders');
  return reminders ? JSON.parse(reminders) : [];
};

export const addReminder = (reminder: Reminder): void => {
  const reminders = getReminders();
  reminders.unshift(reminder);
  localStorage.setItem('finestro_reminders', JSON.stringify(reminders));
};

export const updateReminder = (id: string, updates: Partial<Reminder>): void => {
  const reminders = getReminders();
  const index = reminders.findIndex(r => r.id === id);
  if (index !== -1) {
    reminders[index] = { ...reminders[index], ...updates };
    localStorage.setItem('finestro_reminders', JSON.stringify(reminders));
  }
};

export const deleteReminder = (id: string): void => {
  const reminders = getReminders();
  const filtered = reminders.filter(r => r.id !== id);
  localStorage.setItem('finestro_reminders', JSON.stringify(filtered));
};

export const markReminderComplete = (id: string): void => {
  updateReminder(id, { completed: true });
};

// Client operations
export const getClients = (): Client[] => {
  initializeStorage();
  const clients = localStorage.getItem('finestro_clients');
  return clients ? JSON.parse(clients) : [];
};

export const addClient = (client: Client): void => {
  const clients = getClients();
  clients.push(client);
  localStorage.setItem('finestro_clients', JSON.stringify(clients));
};

export const getClientById = (id: number): Client | null => {
  const clients = getClients();
  return clients.find(c => c.id === id) || null;
};

// Utility functions
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
};

export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
};

export const downloadBase64File = (base64: string, filename: string, mimeType: string) => {
  const link = document.createElement('a');
  link.href = base64 || `data:${mimeType};base64,`;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Check for upcoming reminders (within next 7 days)
export const getUpcomingReminders = (): Reminder[] => {
  const reminders = getReminders();
  const today = new Date();
  const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
  
  return reminders.filter(r => {
    if (r.completed) return false;
    const reminderDate = new Date(r.date);
    return reminderDate >= today && reminderDate <= nextWeek;
  });
};
