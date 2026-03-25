import { Heart, LifeBuoy, Shield, TrendingUp, Search, FileCheck, Upload, FolderLock, Bell, BarChart3 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export function ProductsPage() {
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
      color: "text-red-600",
      bgColor: "bg-red-50",
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
      bgColor: "bg-blue-50",
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
      color: "text-green-600",
      bgColor: "bg-green-50",
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
      color: "text-purple-600",
      bgColor: "bg-purple-50",
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">Our Products & Solutions</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive tools for managing Health, Life, General Insurance, and Mutual Funds—all in one platform.
          </p>
        </div>
      </section>

      {/* Key Features Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Powerful Features for Every Product</h2>
            <p className="text-xl text-gray-600">
              Every product category comes with these comprehensive tools
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
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

      {/* Product Categories with Tabs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="health" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto gap-2 bg-transparent mb-8">
              {productCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex flex-col items-center gap-2 py-4 data-[state=active]:bg-white data-[state=active]:shadow-md"
                >
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                  <span>{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {productCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="space-y-8">
                  {/* Category Header */}
                  <div className={`${category.bgColor} rounded-lg p-8`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                        <category.icon className={`h-8 w-8 ${category.color}`} />
                      </div>
                      <div>
                        <h2 className="text-3xl">{category.name}</h2>
                        <p className="text-gray-600 mt-2">{category.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Plans Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.plans.map((plan, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex justify-between items-start mb-2">
                            <CardTitle>{plan.name}</CardTitle>
                            <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                              {plan.coverage}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {plan.features.map((feature, fIndex) => (
                              <li key={fIndex} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                                <span className="text-gray-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Category-specific Tools */}
                  <Card className="border-2 border-blue-100">
                    <CardHeader>
                      <CardTitle>Available Tools for {category.name}</CardTitle>
                      <CardDescription>
                        Streamline your {category.name.toLowerCase()} operations with these integrated features
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3 mb-2">
                            <Search className="h-5 w-5 text-blue-600" />
                            <span>Quote Comparison</span>
                          </div>
                          <p className="text-sm text-gray-600">
                            Compare multiple providers side-by-side
                          </p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3 mb-2">
                            <Upload className="h-5 w-5 text-blue-600" />
                            <span>Document Management</span>
                          </div>
                          <p className="text-sm text-gray-600">
                            Upload and verify KYC documents
                          </p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3 mb-2">
                            <Bell className="h-5 w-5 text-blue-600" />
                            <span>Renewal Reminders</span>
                          </div>
                          <p className="text-sm text-gray-600">
                            Automated notifications for renewals
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Document Upload Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">Secure Document Management</h2>
              <p className="text-lg text-gray-600 mb-6">
                Upload, store, and manage all client documents in one secure, encrypted platform.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <span>Aadhaar & PAN verification</span> - Instant validation and secure storage
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <span>Health card storage</span> - Keep all health records organized
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <span>Policy documents & receipts</span> - Centralized access for you and clients
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <span>Password protection</span> - Bank-level encryption and access control
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                <Upload className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl mb-2">Drag & Drop Documents</h3>
                <p className="text-gray-600 mb-4">
                  Support for PDF, JPG, PNG up to 10MB
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline">Aadhaar</Badge>
                  <Badge variant="outline">PAN</Badge>
                  <Badge variant="outline">Health Card</Badge>
                  <Badge variant="outline">Application Forms</Badge>
                  <Badge variant="outline">KYC Docs</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
