import { Button } from "@/components/ui/button"
import { ArrowRight, Github } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 bg-orange-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Ready to Transform Your Repositories?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Join developers who are already using RepoRad.io to create better onboarding experiences and documentation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 bg-white text-orange-600 font-medium hover:bg-gray-50" asChild>
              <a href="https://github.com/RepoRadio/reporadio-cli" target="_blank" rel="noopener noreferrer">
                Start Free Today
                <ArrowRight className="h-5 w-5 ml-2" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-white text-white hover:bg-white/10"
              asChild
            >
              <a href="https://github.com/RepoRadio/reporadio-cli" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                View Documentation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
