"use client"

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
  return (
    <>
      {/* Header */}
      <div className="bg-[#22c55e] text-white p-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold">Find Your Next Opportunity</h1>
          <p className="mt-2 text-green-100">Discover job opportunities in skilled trades and technical fields</p>

          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by job title, company, or location"
                className="pl-9 bg-white border-none shadow-sm w-full text-black"
              />
            </div>
            <Button variant="outline" className="gap-2 text-white border-white hover:bg-[#16a34a]">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Job Card 1 */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-2xl">🏢</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Junior Web Developer</h3>
                  <p className="text-sm text-gray-600">Tech Solutions Inc.</p>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin size={16} />
                  <span>London, UK</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Briefcase size={16} />
                  <span>Full-time</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Building2 size={16} />
                  <span>Hybrid</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Looking for a motivated junior web developer to join our growing team. Experience with React and Node.js preferred.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Node.js</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">JavaScript</span>
              </div>
              <Button className="w-full">Apply Now</Button>
            </CardContent>
          </Card>

          {/* Job Card 2 */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-2xl">💻</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">UI/UX Designer</h3>
                  <p className="text-sm text-gray-600">Creative Designs Ltd</p>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin size={16} />
                  <span>Manchester, UK</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Briefcase size={16} />
                  <span>Part-time</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Building2 size={16} />
                  <span>Remote</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Seeking a creative UI/UX designer to help shape our digital products. Experience with Figma and user research required.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Figma</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">UI/UX</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Design</span>
              </div>
              <Button className="w-full">Apply Now</Button>
            </CardContent>
          </Card>

          {/* Job Card 3 */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Data Analyst</h3>
                  <p className="text-sm text-gray-600">Data Insights Co</p>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin size={16} />
                  <span>Birmingham, UK</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Briefcase size={16} />
                  <span>Full-time</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Building2 size={16} />
                  <span>On-site</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Join our data team to help analyze and visualize business metrics. Strong Python and SQL skills required.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">Python</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">SQL</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">Data Analysis</span>
              </div>
              <Button className="w-full">Apply Now</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
