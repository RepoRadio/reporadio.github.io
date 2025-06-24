import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Github, Headphones } from "lucide-react"
import AudioPlayer from "./audio-player"

export default function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-6 bg-orange-100 border border-orange-200 text-orange-800">
            <Headphones className="h-3 w-3 mr-1" />
            Transform Code into Audio
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Turn GitHub Repos into <span className="text-orange-600">Podcast Episodes</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Help developers onboard faster, understand architecture, and stay up-to-date with changelogs through
            AI-generated narrated episodes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 bg-orange-600 text-white font-medium hover:bg-orange-700" asChild>
              <a href="https://github.com/RepoRadio/reporadio-cli" target="_blank" rel="noopener noreferrer">
                <Play className="h-5 w-5 mr-2" />
                Try Free Demo
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 border-gray-300 text-gray-700 hover:bg-gray-50"
              asChild
            >
              <a href="https://github.com/RepoRadio/reporadio-cli" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                View on GitHub
              </a>
            </Button>
          </div>

          {/* Live Audio Player */}
          <AudioPlayer />
        </div>
      </div>
    </section>
  )
}
