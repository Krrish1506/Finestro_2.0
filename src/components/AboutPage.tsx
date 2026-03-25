import { Target, Eye, Users, Award, TrendingUp, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutPage() {
  const teamMembers = [
    {
      name: "Siddhant Acharya",
      role: "Founder & CEO",
      bio: "15+ years in insurance technology. Former VP at major insurance tech firm."
    },
    {
      name: "Nischal Sharma",
      role: "Co-Founder & CTO",
      bio: "Technology visionary with deep expertise in building scalable fintech platforms."
    },
    {
      name: "Mandar Yagnik",
      role: "Co-Founder & COO",
      bio: "Operations expert focused on streamlining workflows and business growth."
    },
    {
      name: "Devam Patel",
      role: "Chief Product Officer",
      bio: "Product strategist with expertise in fintech and agent workflow optimization."
    },
    {
      name: "Krrish Shah",
      role: "Head of Engineering",
      bio: "Security-first architect with 12 years building compliant financial platforms."
    },
    {
      name: "Vivek Rawal",
      role: "Head of Customer Success",
      bio: "Former insurance agent turned customer advocate. Passionate about agent success."
    }
  ];

  const successStories = [
    {
      agent: "Ramesh Kumar, Chennai",
      metric: "300% Growth",
      story: "Increased client base from 50 to 200 within 8 months using Finestro's marketing toolkit and automated follow-ups.",
      icon: TrendingUp
    },
    {
      agent: "Anjali Singh, Pune",
      metric: "5 Hours Saved Daily",
      story: "Eliminated manual paperwork and document tracking, now focuses entirely on client relationships and sales.",
      icon: Award
    },
    {
      agent: "Mohammed Ahmed, Hyderabad",
      metric: "98% Client Retention",
      story: "Automated renewal reminders and proactive claim tracking resulted in exceptional client satisfaction and loyalty.",
      icon: Heart
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">About Finestro</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Empowering insurance and mutual fund agents across India with technology that simplifies, automates, and accelerates business growth.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-2 border-blue-100">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  To transform the way insurance and mutual fund agents work in India by providing an all-in-one platform that eliminates administrative burden, enhances client relationships, and drives sustainable business growth.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  To become India's most trusted workflow platform for insurance agents, enabling every agent to deliver exceptional service, build thriving businesses, and achieve financial independence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Finestro was born from a simple observation: insurance agents in India are incredibly hardworking, yet they spend most of their time on paperwork, follow-ups, and administrative tasks instead of building relationships and closing deals.
                </p>
                <p>
                  Our founder, Vikram Mehta, spent years working with agents across Mumbai, Delhi, and Bangalore. He witnessed firsthand how talented professionals struggled with scattered client information, missed renewal deadlines, and manual marketing efforts.
                </p>
                <p>
                  In 2023, we assembled a team of insurance experts, engineers, and product designers to build Finestro—a platform designed from the ground up for the Indian insurance ecosystem. Today, we're proud to serve thousands of agents across 15+ states.
                </p>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1690264421892-46e3af5c3455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjAxODg1MDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Finestro team collaboration"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Experienced professionals committed to agent success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Agent Success Stories</h2>
            <p className="text-xl text-gray-600">
              Real results from agents across India
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4">
                    <story.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl text-blue-600">{story.metric}</CardTitle>
                  <CardDescription className="text-base">{story.agent}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{story.story}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl mb-3">Agent-First</h3>
              <p className="text-gray-600">
                Every feature we build starts with understanding agent needs and challenges.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl mb-3">Excellence</h3>
              <p className="text-gray-600">
                We're committed to delivering the highest quality platform and support.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl mb-3">Integrity</h3>
              <p className="text-gray-600">
                Security, compliance, and ethical practices are at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
