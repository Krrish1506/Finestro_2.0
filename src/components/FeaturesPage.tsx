import { Brain, TrendingUp, Bell, Target, FileText, Scan, LayoutDashboard, Shield, Zap, Database } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function FeaturesPage() {
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
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
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
      <section className="bg-gradient-to-br from-purple-600 to-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">Powered by AI</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">Advanced Features</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Next-generation tools that give you a competitive edge in the insurance industry
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Intelligent Features That Work For You</h2>
            <p className="text-xl text-gray-600">
              Cutting-edge technology meets practical insurance operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center`}>
                      <feature.icon className={`h-7 w-7 ${feature.color}`} />
                    </div>
                    <Badge variant="secondary">AI Powered</Badge>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm mb-3">Key Benefits:</p>
                    {feature.benefits.map((benefit, bIndex) => (
                      <div key={bIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">See Features In Action</h2>
            <p className="text-xl text-gray-600">
              Real-world scenarios showing how our features work together
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {useCase.steps.map((step, sIndex) => (
                      <div key={sIndex} className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">
                          {sIndex + 1}
                        </div>
                        <p className="text-sm text-gray-600 mt-0.5">{step}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="ai" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="ai">AI & ML</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="integration">Integration</TabsTrigger>
            </TabsList>

            <TabsContent value="ai">
              <Card>
                <CardHeader>
                  <CardTitle>Artificial Intelligence & Machine Learning</CardTitle>
                  <CardDescription>Our AI models are trained on millions of insurance transactions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="mb-3 flex items-center gap-2">
                        <Brain className="h-5 w-5 text-purple-600" />
                        Predictive Models
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Client churn prediction (92% accuracy)</li>
                        <li>• Policy recommendation engine</li>
                        <li>• Risk assessment automation</li>
                        <li>• Premium optimization suggestions</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 flex items-center gap-2">
                        <Scan className="h-5 w-5 text-red-600" />
                        OCR Technology
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• 99.5% extraction accuracy</li>
                        <li>• Support for 10+ Indian languages</li>
                        <li>• Real-time processing</li>
                        <li>• Handwriting recognition</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security">
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise Security & Compliance</CardTitle>
                  <CardDescription>Bank-grade security for your sensitive data</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="mb-3 flex items-center gap-2">
                        <Shield className="h-5 w-5 text-green-600" />
                        Data Protection
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• AES-256 encryption at rest</li>
                        <li>• TLS 1.3 for data in transit</li>
                        <li>• Role-based access control</li>
                        <li>• Automated security audits</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 flex items-center gap-2">
                        <Database className="h-5 w-5 text-blue-600" />
                        Compliance
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• IRDAI compliant</li>
                        <li>• ISO 27001 certified</li>
                        <li>• GDPR ready</li>
                        <li>• Regular compliance audits</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="integration">
              <Card>
                <CardHeader>
                  <CardTitle>Seamless Integration</CardTitle>
                  <CardDescription>Connect with your existing tools and workflows</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="mb-3">APIs & Webhooks</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• RESTful API access</li>
                        <li>• Real-time webhooks</li>
                        <li>• Comprehensive documentation</li>
                        <li>• Rate limits: 1000 req/min</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3">Third-Party Integrations</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• WhatsApp Business API</li>
                        <li>• Payment gateways (UPI, Cards)</li>
                        <li>• Email service providers</li>
                        <li>• CRM systems</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Start your free trial and see how AI-powered tools can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-md transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-md transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
