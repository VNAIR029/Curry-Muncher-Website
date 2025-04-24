import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import {
  Briefcase,
  Users,
  Trophy,
  Globe,
  Layers,
  Smartphone,
  ChartPie,
  ShieldCheck,
} from "lucide-react"

const stats = [
  { label: "Projects Completed", value: 128, icon: Briefcase },
  { label: "Happy Clients", value: 64, icon: Users },
  { label: "Awards Won", value: 12, icon: Trophy },
  { label: "Global Partners", value: 16, icon: Globe },
]

const features = [
  {
    icon: Layers,
    title: "Drag & Drop Builder",
    description: "Easily build your page with our intuitive editor.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Looks great on any device, mobile or desktop.",
  },
  {
    icon: ChartPie,
    title: "Real-time Analytics",
    description: "Track your visitors and performance instantly.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Hosting",
    description: "We handle SSL, backups, and security for you.",
  },
]

const testimonials = [
  {
    name: "John Doe",
    role: "Entrepreneur",
    quote:
      "This platform helped me launch my business site in minutes. Incredible UX!",
    avatar: "https://via.placeholder.com/64",
    initials: "JD",
  },
  {
    name: "Jane Smith",
    role: "Freelancer",
    quote:
      "I love the customization options—my portfolio has never looked better.",
    avatar: "https://via.placeholder.com/64",
    initials: "JS",
  },
  {
    name: "Bob Johnson",
    role: "Startup Founder",
    quote: "Reliable, fast and beautiful templates right out of the box.",
    avatar: "https://via.placeholder.com/64",
    initials: "BJ",
  },
]

export default function Dashboard() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gray-100">
        <img
          src="https://via.placeholder.com/1200x600"
          alt="Dashboard hero"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Your Dashboard
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-200 max-w-2xl">
            Quick insights into your project, stats, and next steps.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div className="flex flex-col items-center text-center" key={stat.label}>
                <div className="p-4 rounded-full bg-green-50 text-green-600 mb-2">
                  <Icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="mt-1 text-gray-600">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Dashboard Features</h2>
          <p className="mt-2 text-gray-600">
            Everything you need at a glance.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <Card key={f.title} className="border-none shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-green-100 text-green-600 mb-4">
                    <Icon className="w-6 h-6 m-auto" />
                  </div>
                  <h3 className="text-lg font-medium">{f.title}</h3>
                  <p className="mt-2 text-gray-600">{f.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">What People Say</h2>
        </div>
        <div className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="border-none shadow-sm">
              <CardContent className="p-6">
                <blockquote className="text-gray-600 italic">
                  “{t.quote}”
                </blockquote>
                <div className="flex items-center gap-3 mt-4">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={t.avatar} alt={t.name} />
                    <AvatarFallback>{t.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready for more detail?</h2>
        <Button className="bg-white text-green-600 hover:bg-gray-100">
          Go to Full Dashboard
        </Button>
      </section>
    </>
  )
} 