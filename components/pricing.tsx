import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for individual developers",
      features: [
        "Bring your own OpenAI keys",
        "CLI tool access",
        "Local audio & transcripts",
        "All episode types",
        "Community support",
      ],
      cta: "Get Started Free",
      ctaLink: "https://github.com/RepoRadio/reporadio-cli",
      available: true,
      popular: false,
    },
    {
      name: "Ad-Subsidized",
      price: "$0",
      period: "with ads",
      description: "Free hosting with revenue sharing",
      features: [
        "Hosted audio & transcripts",
        "Public landing pages",
        "Revenue sharing with OSS",
        "SEO-optimized pages",
        "Community discovery",
      ],
      cta: "Coming Soon",
      ctaLink: "#",
      available: false,
      popular: true,
    },
    {
      name: "Paid",
      price: "$29",
      period: "per month",
      description: "Ad-free professional experience",
      features: [
        "No ads",
        "Private or public pages",
        "RSS feeds for podcast apps",
        "Custom branding",
        "Priority support",
      ],
      cta: "Coming Soon",
      ctaLink: "#",
      available: false,
      popular: false,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For teams and organizations",
      features: [
        "SSO/OAuth integration",
        "Team access controls",
        "Slack/email notifications",
        "Audit logs & metrics",
        "SLA & dedicated support",
      ],
      cta: "Coming Soon",
      ctaLink: "#",
      available: false,
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Choose Your Plan</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">From free CLI access to enterprise-grade solutions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative shadow-sm bg-white ${
                plan.popular ? "ring-2 ring-orange-500 shadow-lg" : "border border-gray-200"
              } ${!plan.available ? "opacity-75" : ""}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white">
                  <Star className="h-3 w-3 mr-1" />
                  Most Popular
                </Badge>
              )}

              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-900">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
                <CardDescription className="mt-2 text-gray-600">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <Check className="h-4 w-4 text-orange-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {plan.available ? (
                  <Button className="w-full font-medium bg-orange-600 text-white hover:bg-orange-700" asChild>
                    <a href={plan.ctaLink} target="_blank" rel="noopener noreferrer">
                      {plan.cta}
                    </a>
                  </Button>
                ) : (
                  <Button className="w-full font-medium" variant="outline" disabled>
                    {plan.cta}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
