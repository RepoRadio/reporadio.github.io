import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import HowItWorks from "@/components/how-it-works"
import Pricing from "@/components/pricing"
import UseCases from "@/components/use-cases"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <UseCases />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}
