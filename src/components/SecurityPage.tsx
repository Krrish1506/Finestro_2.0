import { Shield, Lock, Cloud, FileCheck, Eye, Server, AlertTriangle, CheckCircle, FolderLock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function SecurityPage() {
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
      color: "bg-blue-50 border-blue-200"
    },
    {
      level: "Admin Access",
      permissions: ["Manage all agents", "System configuration", "Compliance reports"],
      color: "bg-purple-50 border-purple-200"
    },
    {
      level: "Client Access",
      permissions: ["View own policies", "Download documents", "Track claims"],
      color: "bg-green-50 border-green-200"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">Security & Compliance</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Your data security and regulatory compliance are our top priorities. We implement industry-leading practices to protect your business and client information.
          </p>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Enterprise-Grade Security</h2>
            <p className="text-xl text-gray-600">
              Built with security at the core, not as an afterthought
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Compliance & Certifications</h2>
            <p className="text-xl text-gray-600">
              Meeting and exceeding regulatory requirements
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceStandards.map((standard, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg">{standard.name}</CardTitle>
                    <Badge variant={
                      standard.status === "Certified" ? "default" :
                      standard.status === "Compliant" ? "secondary" :
                      "outline"
                    }>
                      {standard.status}
                    </Badge>
                  </div>
                  <CardDescription>{standard.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">Comprehensive Data Protection</h2>
              <p className="text-lg text-gray-600 mb-8">
                We implement multiple layers of security to ensure your client data remains private and protected at all times.
              </p>
              <ul className="space-y-3">
                {dataProtectionPractices.map((practice, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{practice}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1730085422157-6783ac9306b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudCUyMHNlY3VyaXR5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjAyNjE5NTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Security technology"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Access Control */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Role-Based Access Control</h2>
            <p className="text-xl text-gray-600">
              Granular permissions ensure users only access what they need
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {accessControls.map((control, index) => (
              <Card key={index} className={`border-2 ${control.color}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="h-5 w-5" />
                    {control.level}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {control.permissions.map((permission, pIndex) => (
                      <li key={pIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{permission}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Document Security */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Card className="border-2 border-blue-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <FolderLock className="h-6 w-6 text-blue-600" />
                    Secure Document Center
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="mb-2">Password-Protected Storage</h4>
                    <p className="text-sm text-gray-600">
                      All sensitive documents (Aadhaar, PAN, health cards) are encrypted and protected with individual passwords.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="mb-2">Secure Sharing</h4>
                    <p className="text-sm text-gray-600">
                      Share documents with clients via encrypted links with expiry dates and view limits.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="mb-2">Version Control</h4>
                    <p className="text-sm text-gray-600">
                      Track all document versions with complete audit trails and rollback capabilities.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl mb-6">Document-Level Security</h2>
              <p className="text-lg text-gray-600 mb-6">
                Every document uploaded to Finestro is treated with the highest security standards, ensuring client privacy and regulatory compliance.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="mb-1">Automated Malware Scanning</h4>
                    <p className="text-sm text-gray-600">
                      All uploads are automatically scanned for viruses and malicious content
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="mb-1">Document Watermarking</h4>
                    <p className="text-sm text-gray-600">
                      Optional watermarking for additional protection against unauthorized sharing
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="mb-1">Secure Deletion</h4>
                    <p className="text-sm text-gray-600">
                      Permanently delete documents with cryptographic verification
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Transparency */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Our Commitment to Your Security</h2>
          <p className="text-xl text-blue-100 mb-8">
            We believe security and compliance are continuous journeys, not destinations. We're committed to maintaining the highest standards and keeping you informed.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl mb-2">24/7</div>
              <p className="text-blue-100">Security Monitoring</p>
            </div>
            <div>
              <div className="text-4xl mb-2">99.9%</div>
              <p className="text-blue-100">Uptime Guarantee</p>
            </div>
            <div>
              <div className="text-4xl mb-2">{"<1hr"}</div>
              <p className="text-blue-100">Incident Response Time</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
