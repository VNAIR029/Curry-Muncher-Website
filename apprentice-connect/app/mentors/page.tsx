import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Filter, MessageSquare, Search, Star } from "lucide-react"

// Move data outside component to prevent recreation on each render
const mentors = [
  {
    id: 1,
    name: "Vikram Mehta",
    role: "Senior Electrical Engineer",
    company: "PowerGrid Solutions",
    experience: "15 years",
    expertise: ["Industrial Electrical Systems", "Safety Protocols", "Project Management"],
    availability: "Mon-Fri, 9AM-5PM",
    rating: 4.9,
    reviews: 128,
    avatar: "/placeholder.svg?height=24&width=24",
    initials: "VM",
    bio: "With over 15 years of experience in electrical engineering, I specialize in industrial electrical systems and safety protocols. I've mentored over 200 apprentices in their journey to becoming certified electricians.",
    achievements: [
      "Certified Master Electrician",
      "Industrial Safety Expert",
      "Project Management Professional"
    ],
  },
  {
    id: 2,
    name: "Sunil Verma",
    role: "Industrial Maintenance Expert",
    company: "TechMach Industries",
    experience: "12 years",
    expertise: ["Equipment Maintenance", "Process Optimization", "Team Leadership"],
    availability: "Mon-Wed, 10AM-6PM",
    rating: 4.8,
    reviews: 95,
    avatar: "/placeholder.svg?height=24&width=24",
    initials: "SV",
    bio: "As an industrial maintenance expert with 12 years of experience, I focus on helping apprentices develop practical skills in equipment maintenance and process optimization. My goal is to create the next generation of maintenance leaders.",
    achievements: [
      "Certified Maintenance Manager",
      "Lean Six Sigma Black Belt",
      "Technical Training Specialist"
    ],
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    role: "Construction Project Director",
    company: "BuildRight Constructions",
    experience: "18 years",
    expertise: ["Project Management", "Construction Planning", "Quality Control"],
    availability: "Tue-Thu, 11AM-7PM",
    rating: 4.9,
    reviews: 156,
    avatar: "/placeholder.svg?height=24&width=24",
    initials: "RK",
    bio: "With nearly two decades in construction management, I mentor aspiring project managers in developing their leadership and technical skills. I believe in hands-on learning and real-world project experience.",
    achievements: [
      "Project Management Professional",
      "Construction Safety Expert",
      "Quality Management Specialist"
    ],
  },
  {
    id: 4,
    name: "Meera Joshi",
    role: "Master Plumber",
    company: "WaterWorks Solutions",
    experience: "14 years",
    expertise: ["Modern Plumbing Systems", "Water Conservation", "Team Management"],
    availability: "Mon-Fri, 8AM-4PM",
    rating: 4.7,
    reviews: 112,
    avatar: "/placeholder.svg?height=24&width=24",
    initials: "MJ",
    bio: "As a master plumber with 14 years of experience, I'm passionate about teaching the next generation of plumbing professionals. I specialize in modern plumbing systems and sustainable water management practices.",
    achievements: [
      "Master Plumber Certification",
      "Green Building Specialist",
      "Technical Training Instructor"
    ],
  },
  {
    id: 5,
    name: "Arjun Singh",
    role: "Welding Specialist",
    company: "MetalCraft Industries",
    experience: "10 years",
    expertise: ["Precision Welding", "Metal Fabrication", "Quality Assurance"],
    availability: "Wed-Fri, 9AM-5PM",
    rating: 4.8,
    reviews: 87,
    avatar: "/placeholder.svg?height=24&width=24",
    initials: "AS",
    bio: "With a decade of experience in precision welding, I mentor apprentices in developing their technical skills and attention to detail. I believe in combining traditional techniques with modern technology.",
    achievements: [
      "Certified Welding Inspector",
      "Precision Welding Specialist",
      "Quality Control Expert"
    ],
  },
  {
    id: 6,
    name: "Ananya Patel",
    role: "HVAC Systems Expert",
    company: "ClimateControl Systems",
    experience: "11 years",
    expertise: ["System Design", "Energy Efficiency", "Technical Troubleshooting"],
    availability: "Mon-Thu, 10AM-6PM",
    rating: 4.7,
    reviews: 103,
    avatar: "/placeholder.svg?height=24&width=24",
    initials: "AP",
    bio: "As an HVAC systems expert, I focus on teaching apprentices about energy-efficient system design and maintenance. I'm passionate about sustainable climate control solutions and technical innovation.",
    achievements: [
      "HVAC Excellence Certification",
      "Energy Efficiency Specialist",
      "Technical Training Coordinator"
    ],
  },
]

export default function MentorsPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-[#22c55e] text-white p-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold">Find Your Mentor</h1>
          <p className="mt-2 text-green-100">Connect with industry professionals who can guide your career journey</p>

          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by name, skill, or industry"
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
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="bg-[#f0fdf4] p-1">
            <TabsTrigger value="all" className="data-[state=active]:bg-[#22c55e] data-[state=active]:text-white">
              All Mentors
            </TabsTrigger>
            <TabsTrigger
              value="recommended"
              className="data-[state=active]:bg-[#22c55e] data-[state=active]:text-white"
            >
              Recommended
            </TabsTrigger>
            <TabsTrigger value="available" className="data-[state=active]:bg-[#22c55e] data-[state=active]:text-white">
              Available Now
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {mentors.map((mentor) => (
                <Card key={mentor.name} className="border-none shadow-sm hover:shadow-md transition-all">
                  <div className="h-20 bg-gradient-to-r from-[#16a34a] to-[#22c55e]" />
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <Avatar className="w-16 h-16 border-4 border-white -mt-12 shadow-sm">
                        <AvatarImage src={mentor.avatar} alt={mentor.name} />
                        <AvatarFallback className="bg-[#f0fdf4] text-[#22c55e]">{mentor.initials}</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold">{mentor.name}</h3>
                        <p className="text-sm text-gray-500">{mentor.role}</p>
                        <div className="flex items-center gap-1 pt-1">
                          <Star className="w-4 h-4 fill-[#22c55e] text-[#22c55e]" />
                          <span className="text-sm font-medium">{mentor.rating}</span>
                          <span className="text-xs text-gray-500">({mentor.reviews} reviews)</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium mb-2">Expertise</h4>
                      <div className="flex flex-wrap gap-1">
                        {mentor.expertise.map((skill) => (
                          <Badge
                            key={skill}
                            className="text-xs bg-[#f0fdf4] text-[#22c55e] hover:bg-[#dcfce7] border-[#bbf7d0]"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 text-sm">
                      <p className="line-clamp-3 text-gray-600">{mentor.bio}</p>
                    </div>
                    <div className="flex justify-between items-center mt-4 pt-4 border-t">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1 text-[#22c55e]" />
                        <span>Available: {mentor.availability}</span>
                      </div>
                      <Button className="bg-[#22c55e] hover:bg-[#16a34a] text-white">View Profile</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recommended">
            <div className="rounded-lg bg-[#f0fdf4] p-8 text-center shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#dcfce7] text-[#22c55e] mb-4">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium mb-2">Personalized Recommendations</h3>
              <p className="text-gray-600 mb-4 max-w-md mx-auto">
                Complete your profile to get mentor recommendations based on your skills and career goals.
              </p>
              <Button className="bg-[#22c55e] hover:bg-[#16a34a] text-white">Complete Profile</Button>
            </div>
          </TabsContent>

          <TabsContent value="available">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {mentors.map((mentor) => (
                <Card key={mentor.name} className="border-none shadow-sm hover:shadow-md transition-all">
                  <div className="h-20 bg-gradient-to-r from-[#16a34a] to-[#22c55e]" />
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <Avatar className="w-16 h-16 border-4 border-white -mt-12 shadow-sm">
                          <AvatarImage src={mentor.avatar} alt={mentor.name} />
                          <AvatarFallback className="bg-[#f0fdf4] text-[#22c55e]">{mentor.initials}</AvatarFallback>
                        </Avatar>
                        <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold">{mentor.name}</h3>
                        <p className="text-sm text-gray-500">{mentor.role}</p>
                        <div className="flex items-center gap-1 pt-1">
                          <Star className="w-4 h-4 fill-[#22c55e] text-[#22c55e]" />
                          <span className="text-sm font-medium">{mentor.rating}</span>
                          <span className="text-xs text-gray-500">({mentor.reviews} reviews)</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium mb-2">Expertise</h4>
                      <div className="flex flex-wrap gap-1">
                        {mentor.expertise.map((skill) => (
                          <Badge
                            key={skill}
                            className="text-xs bg-[#f0fdf4] text-[#22c55e] hover:bg-[#dcfce7] border-[#bbf7d0]"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-4 pt-4 border-t">
                      <div className="flex items-center text-sm text-green-500 font-medium">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>Available now</span>
                      </div>
                      <Button className="bg-[#22c55e] hover:bg-[#16a34a] text-white">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Chat Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}
