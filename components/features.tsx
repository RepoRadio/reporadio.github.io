import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mic, Brain, Zap, Globe, Shield, Users } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Scripts",
      description:
        "Advanced LLMs analyze your codebase and generate engaging, informative episode scripts automatically.",
    },
    {
      icon: Mic,
      title: "High-Quality Audio",
      description: "Professional voice synthesis using OpenAI APIs creates natural-sounding narrated episodes.",
    },
    {
      icon: Zap,
      title: "CLI Integration",
      description: "Simple command-line tool integrates seamlessly into your development workflow.",
    },
    {
      icon: Globe,
      title: "Hosted Content",
      description: "Public or private landing pages with RSS feeds for podcast players and easy sharing.",
    },
    {
      icon: Shield,
      title: "Enterprise Ready",
      description: "SSO, team access controls, audit logs, and SLA support for enterprise deployments.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Role-based access, internal linking, and team notifications for collaborative development.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            Powerful Features for Modern Development
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to transform your repositories into engaging audio content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white"
            >
              <CardHeader>
                <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
