import { Mail, Phone, MapPin, MessageCircle, CreditCard } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export function ContactPage() {
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
      description: "Drive In Rd, Sunrise Park, Thaltej",
      link: "https://www.google.com/maps/dir//ASIA+Campus,+Drive+In+Rd,+Sunrise+Park,+Thaltej,+Ahmedabad,+Gujarat+380054/@23.0460875,72.4463752,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x395e8353dee254bb:0x6909d82c9319e0a0!2m2!1d72.5287768!2d23.0461088?entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D"
    }
  ];

  const paymentMethods = [
    { name: "UPI", supported: true },
    { name: "Net Banking", supported: true },
    { name: "Credit/Debit Card", supported: true },
    { name: "Paytm", supported: true },
    { name: "Google Pay", supported: true },
    { name: "PhonePe", supported: true }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">Get in Touch</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of these channels.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <method.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href={method.link} className="text-blue-600 hover:text-blue-700 mb-2 block">
                    {method.value}
                  </a>
                  <p className="text-sm text-gray-600">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl mb-4">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
              <Card>
                <CardContent className="pt-6">
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="Enter first name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Enter last name" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="+91 98765 43210" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="inquiryType">Inquiry Type *</Label>
                      <Select>
                        <SelectTrigger id="inquiryType">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="demo">Request Demo</SelectItem>
                          <SelectItem value="pricing">Pricing Information</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="sales">Sales Inquiry</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your requirements..."
                        rows={5}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Submit Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl mb-4">Why Contact Us?</h2>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <h3 className="mb-1">Free Demo & Consultation</h3>
                      <p className="text-gray-600 text-sm">
                        Schedule a personalized demo to see how Finestro can transform your business.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <h3 className="mb-1">Custom Solutions</h3>
                      <p className="text-gray-600 text-sm">
                        We'll help tailor Finestro to your specific needs and workflow.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <h3 className="mb-1">Technical Support</h3>
                      <p className="text-gray-600 text-sm">
                        Get help with onboarding, training, and technical questions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Options */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <CreditCard className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle>Payment Options</CardTitle>
                      <CardDescription>Consulting & subscription payments accepted via</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {paymentMethods.map((method, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 p-2 bg-gray-50 rounded-md"
                      >
                        <div className="w-4 h-4 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">
                          ✓
                        </div>
                        <span className="text-sm">{method.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card>
                <CardHeader>
                  <CardTitle>Office Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span>10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="text-red-600">Closed</span>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <a href="#" className="block text-blue-600 hover:text-blue-700 text-sm">
                    FAQ & Help Center
                  </a>
                  <a href="#" className="block text-blue-600 hover:text-blue-700 text-sm">
                    Video Tutorials
                  </a>
                  <a href="#" className="block text-blue-600 hover:text-blue-700 text-sm">
                    Documentation
                  </a>
                  <a href="#" className="block text-blue-600 hover:text-blue-700 text-sm">
                    Agent Community Forum
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl mb-8 text-center">Our Location</h2>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Corporate Office: Mumbai, Maharashtra</p>
              <p className="text-sm text-gray-500 mt-2">Interactive map would be integrated here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
