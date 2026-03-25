import { CheckCircle, Users, TrendingUp, Shield, FileText, Bell, BarChart, Share2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    {
      icon: Users,
      title: "Centralized Client Management",
      description: "Manage all your clients, policies, and interactions in one unified platform."
    },
    {
      icon: FileText,
      title: "Document Management",
      description: "Secure storage for KYC documents, policy papers, and health cards with easy access."
    },
    {
      icon: TrendingUp,
      title: "Sales Analytics",
      description: "Track your performance with real-time insights and downloadable reports."
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Never miss a renewal or claim deadline with automated notifications."
    },
    {
      icon: BarChart,
      title: "Quote Comparison",
      description: "Compare policies across multiple providers to offer the best solutions."
    },
    {
      icon: Share2,
      title: "Marketing Toolkit",
      description: "Generate social media content and pamphlets to grow your business."
    }
  ];

  const testimonials = [
    {
      name: "Rajiv Shukla",
      role: "Senior Insurance Agent, Ahmedabad",
      quote: "Finestro transformed my workflow. I now manage 3x more clients with half the effort. The automated reminders alone saved me countless hours."
    },
    {
      name: "Priya Sharma",
      role: "Mutual Fund Advisor, Surat",
      quote: "The marketing toolkit is a game-changer. I can create professional social media posts in minutes and my client base has grown by 40%."
    },
    {
      name: "Amit Patel",
      role: "Insurance Agent, Baroda",
      quote: "Document management was always a headache. Now everything is organized, secure, and accessible from anywhere. Highly recommended!"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                Streamline Your Insurance & Mutual Fund Business
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                The all-in-one workflow solution for agents across India. Manage clients, track claims, automate reminders, and grow your business effortlessly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => onNavigate("dashboard")} size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Start Free Trial
                </Button>
                <Button onClick={() => onNavigate("products")} size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Explore Products
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1660099501266-f18132684a57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBpbnN1cmFuY2UlMjBhZ2VudCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2MDI2MTk1N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Insurance agents collaborating"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Solved */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Problems We Solve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the challenges insurance and mutual fund agents face daily
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Scattered Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Client data, policies, and documents spread across files, emails, and WhatsApp? We bring everything into one secure platform.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Missed Renewals & Claims</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Automated reminders ensure you never miss a renewal deadline or claim opportunity, improving client satisfaction.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Manual Marketing Effort</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Generate professional social media posts and pamphlets instantly with our integrated marketing toolkit.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Why Choose Finestro?</h2>
            <p className="text-xl text-gray-600">
              Everything you need to manage and grow your insurance business
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">Built Specifically for Indian Agents</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-700">
                      Compliance with IRDAI regulations and data protection standards
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-700">
                      Supports Aadhaar, PAN, and health card verification
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-700">
                      Integration with popular Indian payment gateways
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-700">
                      Multi-language support for regional markets
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1748609339084-ea43ec1b8fbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzYwMjUxMjYxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Financial dashboard"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">What Our Agents Say</h2>
            <p className="text-xl text-gray-600">
              Join thousands of successful agents using Finestro
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of agents who are already growing their business with Finestro
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => onNavigate("dashboard")} size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Start Your Free Trial
            </Button>
            <Button onClick={() => onNavigate("contact")} size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
