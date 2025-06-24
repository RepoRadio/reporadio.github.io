import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Upload, Brain, Headphones } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: "Connect Repository",
      description: "Point RepoRad.io to your GitHub repository or local codebase using our CLI tool.",
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description: "Our LLMs analyze your code structure, documentation, and changes to generate episode scripts.",
    },
    {
      icon: Headphones,
      title: "Audio Generation",
      description: "High-quality voice synthesis creates professional narrated episodes with transcripts.",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your codebase into audio content in three simple steps
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="text-center border border-gray-200 shadow-sm bg-white">
                  <CardContent className="pt-8 pb-6">
                    <div className="h-16 w-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <step.icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-orange-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
