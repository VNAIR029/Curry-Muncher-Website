"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Briefcase, Building2, Filter } from "lucide-react"

const jobs = [
  {
    id: 1,
    title: "Electrical Technician",
    company: "PowerGrid Solutions",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    salary: "₹25,000 - ₹35,000/month",
    posted: "2 days ago",
    description: "Looking for an experienced electrical technician to join our team. Must have knowledge of industrial electrical systems and safety protocols.",
    requirements: [
      "2+ years of experience in electrical work",
      "Knowledge of industrial electrical systems",
      "Safety certification required",
      "Ability to work in shifts"
    ],
    recruiter: {
      name: "Vikram Mehta",
      role: "HR Manager",
      avatar: "/placeholder.svg?height=24&width=24",
      initials: "VM",
    },
  },
  {
    id: 2,
    title: "Industrial Maintenance Engineer",
    company: "TechMach Industries",
    location: "Bangalore, Karnataka",
    type: "Full-time",
    salary: "₹35,000 - ₹45,000/month",
    posted: "1 week ago",
    description: "Seeking a skilled maintenance engineer to oversee factory equipment and ensure smooth operations.",
    requirements: [
      "3+ years in industrial maintenance",
      "Strong mechanical aptitude",
      "Problem-solving skills",
      "Team leadership experience"
    ],
    recruiter: {
      name: "Sunil Verma",
      role: "Operations Manager",
      avatar: "/placeholder.svg?height=24&width=24",
      initials: "SV",
    },
  },
  {
    id: 3,
    title: "Construction Project Manager",
    company: "BuildRight Constructions",
    location: "Delhi NCR",
    type: "Full-time",
    salary: "₹50,000 - ₹70,000/month",
    posted: "3 days ago",
    description: "Experienced project manager needed for large-scale construction projects. Must have proven track record in project delivery.",
    requirements: [
      "5+ years in construction management",
      "Civil engineering background",
      "Project management certification",
      "Strong communication skills"
    ],
    recruiter: {
      name: "Rajesh Kumar",
      role: "Director of Projects",
      avatar: "/placeholder.svg?height=24&width=24",
      initials: "RK",
    },
  },
  {
    id: 4,
    title: "Plumbing Supervisor",
    company: "WaterWorks Solutions",
    location: "Chennai, Tamil Nadu",
    type: "Full-time",
    salary: "₹30,000 - ₹40,000/month",
    posted: "5 days ago",
    description: "Looking for a plumbing supervisor to lead our team of technicians and ensure quality service delivery.",
    requirements: [
      "4+ years in plumbing",
      "Supervisory experience",
      "Knowledge of modern plumbing systems",
      "Customer service skills"
    ],
    recruiter: {
      name: "Meera Joshi",
      role: "HR Director",
      avatar: "/placeholder.svg?height=24&width=24",
      initials: "MJ",
    },
  },
  {
    id: 5,
    title: "Welding Specialist",
    company: "MetalCraft Industries",
    location: "Pune, Maharashtra",
    type: "Full-time",
    salary: "₹28,000 - ₹38,000/month",
    posted: "1 day ago",
    description: "Skilled welder needed for precision metal work in our manufacturing facility.",
    requirements: [
      "3+ years welding experience",
      "Certification in welding",
      "Knowledge of different welding techniques",
      "Attention to detail"
    ],
    recruiter: {
      name: "Arjun Singh",
      role: "Production Manager",
      avatar: "/placeholder.svg?height=24&width=24",
      initials: "AS",
    },
  },
  {
    id: 6,
    title: "HVAC Technician",
    company: "ClimateControl Systems",
    location: "Hyderabad, Telangana",
    type: "Full-time",
    salary: "₹32,000 - ₹42,000/month",
    posted: "4 days ago",
    description: "Experienced HVAC technician required for installation and maintenance of climate control systems.",
    requirements: [
      "3+ years in HVAC",
      "Technical certification",
      "Problem-solving abilities",
      "Physical fitness"
    ],
    recruiter: {
      name: "Ananya Patel",
      role: "Technical Manager",
      avatar: "/placeholder.svg?height=24&width=24",
      initials: "AP",
    },
  },
]

export default function JobsPage() {
  const [query, setQuery] = useState("")

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(query.toLowerCase()) ||
    job.company.toLowerCase().includes(query.toLowerCase()) ||
    job.location.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <>
      <header className="bg-gradient-to-r from-green-600 to-green-400 text-white py-10">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h1 className="text-4xl font-extrabold">Find Your Next Opportunity</h1>
          <p className="mt-2 text-lg opacity-90">Discover job opportunities in skilled trades and technical fields</p>
          <div className="flex flex-col md:flex-row gap-4 mt-8 justify-center">
            <div className="relative w-full md:w-2/3">
              <Search className="absolute left-4 top-4 h-5 w-5 text-gray-300" />
              <Input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search by title, company, or location"
                className="pl-12 pr-4 py-3 rounded-full bg-white text-gray-800 shadow-lg"
              />
            </div>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 rounded-full px-6">
              <Filter className="w-5 h-5 mr-2" />Filters
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map(job => (
            <Card key={job.id} className="rounded-xl overflow-hidden transform hover:-translate-y-1 hover:shadow-xl transition-all">
              <div className="h-24 bg-gradient-to-r from-green-500 to-green-700" />
              <CardContent className="pt-8 px-6 pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={job.recruiter.avatar}
                    alt={job.recruiter.name}
                    className="w-12 h-12 rounded-full border-2 border-white -mt-8 shadow-md"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <p className="text-sm text-gray-500">{job.company}</p>
                  </div>
                </div>
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-600" />{job.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-green-600" />{job.type}
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-green-600" />{job.salary}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 text-sm line-clamp-3">{job.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {job.requirements.map(req => (
                    <span key={req} className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs">
                      {req}
                    </span>
                  ))}
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-500 text-white rounded-full py-2">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </>
  )
}
