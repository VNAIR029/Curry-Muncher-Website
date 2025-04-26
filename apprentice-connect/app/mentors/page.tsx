"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Clock, Filter, Search, Star } from "lucide-react"

// Mentor data
const mentors = [
  {
    id: 1,
    name: "Vikram Mehta",
    role: "Senior Electrical Engineer",
    experience: "15 years",
    expertise: ["Industrial Electrical Systems", "Safety Protocols", "Project Management"],
    availability: "Mon-Fri, 9AM-5PM",
    rating: 4.9,
    reviews: 128,
    avatar: "/placeholder.svg?height=24&width=24",
    initials: "VM",
    bio: "With over 15 years of experience in electrical engineering, I've mentored over 200 apprentices in industrial systems and safety."
  },
  {
    id: 2,
    name: "Sunil Verma",
    role: "Industrial Maintenance Expert",
    experience: "12 years",
    expertise: ["Equipment Maintenance", "Process Optimization", "Team Leadership"],
    availability: "Mon-Wed, 10AM-6PM",
    rating: 4.8,
    reviews: 95,
    avatar: "/placeholder.svg?height=24&width=24",
    initials: "SV",
    bio: "I focus on practical skills in equipment maintenance and optimization to build future maintenance leaders."
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    role: "Construction Project Director",
    experience: "18 years",
    expertise: ["Project Management", "Construction Planning", "Quality Control"],
    availability: "Tue-Thu, 11AM-7PM",
    rating: 4.9,
    reviews: 156,
    avatar: "/placeholder.svg?height=24&width=24",
    initials: "RK",
    bio: "Nearly two decades in construction management, mentoring aspiring project managers with hands-on learning."
  },
  {
    id: 4,
    name: "Meera Joshi",
    role: "Master Plumber",
    experience: "14 years",
    expertise: ["Modern Plumbing Systems", "Water Conservation", "Team Management"],
    availability: "Mon-Fri, 8AM-4PM",
    rating: 4.7,
    reviews: 112,
    avatar: "/placeholder.svg?height=24&width=24",
    initials: "MJ",
    bio: "As a master plumber with 14 years of experience, I'm passionate about teaching modern plumbing and sustainable water management."
  },
  {
    id: 5,
    name: "Arjun Singh",
    role: "Welding Specialist",
    experience: "10 years",
    expertise: ["Precision Welding", "Metal Fabrication", "Quality Assurance"],
    availability: "Wed-Fri, 9AM-5PM",
    rating: 4.8,
    reviews: 87,
    avatar: "/placeholder.svg?height=24&width=24",
    initials: "AS",
    bio: "With a decade in precision welding, I mentor apprentices in developing their technical skills and attention to detail."
  },
  {
    id: 6,
    name: "Ananya Patel",
    role: "HVAC Systems Expert",
    experience: "11 years",
    expertise: ["System Design", "Energy Efficiency", "Technical Troubleshooting"],
    availability: "Mon-Thu, 10AM-6PM",
    rating: 4.7,
    reviews: 103,
    avatar: "/placeholder.svg?height=24&width=24",
    initials: "AP",
    bio: "I teach energy-efficient HVAC design and sustainable climate control solutions."
  }
]

export default function MentorsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  // Filter based on search and tab
  const filtered = mentors.filter(m => {
    const matchesSearch =
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.expertise.some(e => e.toLowerCase().includes(searchQuery.toLowerCase()))

    if (activeTab === 'available') return matchesSearch && m.availability.toLowerCase().includes('mon')
    // For now, recommended tab shows all matching results
    return matchesSearch
  })

  return (
    <>
      <header className="bg-gradient-to-r from-green-600 to-green-400 text-white py-10">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h1 className="text-4xl font-extrabold">Find Your Mentor</h1>
          <p className="mt-2 text-lg opacity-90">Connect with industry pros to guide your career journey</p>
          <div className="flex flex-col md:flex-row gap-4 mt-8 justify-center">
            <div className="relative w-full md:w-2/3">
              <Search className="absolute left-4 top-4 h-5 w-5 text-gray-300" />
              <Input
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search by name, role, or skill"
                className="pl-12 pr-4 py-3 rounded-full bg-white text-gray-800 shadow-lg"
              />
            </div>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 rounded-full px-6">
              <Filter className="w-5 h-5 mr-2" /> Filters
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-8 space-y-12">
        <Tabs defaultValue="all" onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-gray-100 p-1 rounded-full">
            <TabsTrigger value="all" className="data-[state=active]:bg-green-600 data-[state=active]:text-white px-4 rounded-full">All Mentors</TabsTrigger>
            <TabsTrigger value="recommended" className="data-[state=active]:bg-green-600 data-[state=active]:text-white px-4 rounded-full">Recommended</TabsTrigger>
            <TabsTrigger value="available" className="data-[state=active]:bg-green-600 data-[state=active]:text-white px-4 rounded-full">Available Now</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map(m => (
              <Card key={m.id} className="transform hover:-translate-y-1 hover:shadow-xl transition-all rounded-xl">
                <div className="h-24 bg-gradient-to-r from-green-500 to-green-700 rounded-t-xl" />
                <CardContent className="pt-8 p-6">
                  <div className="flex items-center gap-4 -mt-4">
                    <Avatar className="w-16 h-16 border-4 border-white">
                      <AvatarImage src={m.avatar} alt={m.name} />
                      <AvatarFallback className="bg-gray-100 text-green-600">{m.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold">{m.name}</h3>
                      <p className="text-sm text-gray-500">{m.role}</p>
                      <div className="flex items-center gap-1 pt-1">
                        <Star className="w-4 h-4 text-yellow-400" /> <span className="text-sm font-medium">{m.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium mb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {m.expertise.map(skill => (
                        <Badge key={skill} className="bg-green-50 text-green-700 text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-600 line-clamp-3">{m.bio}</p>
                  <div className="flex justify-between items-center mt-6 pt-4 border-t">
                    <div className="flex items-center text-sm text-gray-500 gap-1">
                      <Clock className="w-4 h-4 text-green-600" />
                      <span>{m.availability}</span>
                    </div>
                    <Button className="bg-green-600 hover:bg-green-500 text-white rounded-full px-4">View Profile</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </main>
    </>
  )
}
