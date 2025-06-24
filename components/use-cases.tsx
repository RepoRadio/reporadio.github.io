import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UserPlus, Building, GitBranch, BookOpen } from "lucide-react"

export default function UseCases() {
  const useCases = [
    {
      icon: UserPlus,
      title: "New Hire Onboarding",
      description:
        "Help new developers understand your codebase faster with guided audio walkthroughs of key components and architecture decisions.",
      benefits: ["Faster onboarding", "Better code comprehension", "Reduced mentoring overhead"],
    },
    {
      icon: Building,
      title: "Architecture Documentation",
      description:
        "Create living documentation that explains your system architecture, design patterns, and technical decisions in an engaging format.",
      benefits: ["Living documentation", "Better knowledge sharing", "Improved team alignment"],
    },
    {
      icon: GitBranch,
      title: "Weekly Changelog Episodes",
      description:
        "Keep your team and users informed about changes, new features, and improvements with regular audio updates.",
      benefits: ["Better communication", "Increased transparency", "User engagement"],
    },
    {
      icon: BookOpen,
      title: "OSS Contributor Guidance",
      description:
        "Help open source contributors understand your project structure and contribution guidelines through audio guides.",
      benefits: ["More contributors", "Better contributions", "Community growth"],
    },
  ]

  return (
    <section id="use-cases" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Perfect for Every Development Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how RepoRad.io can transform your development workflow
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <Card
              key={index}
              className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white"
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <useCase.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900">{useCase.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">{useCase.description}</CardDescription>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                      <div className="h-1.5 w-1.5 bg-orange-400 rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
