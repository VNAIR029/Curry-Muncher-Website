import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Filter, MessageSquare, Search, Star } from "lucide-react"

// Move data outside component to prevent recreation on each render
const mentors = [
  {
    name: "Vikram Mehta",
    role: "Senior Electrical Engineer",
    avatar: "/placeholder.svg?height=64&width=64",
    initials: "VM",
    skills: ["Electrical", "Solar", "Automation"],
    bio: "15+ years of experience in electrical engineering with expertise in renewable energy systems. Passionate about mentoring the next generation of engineers.",
    rating: "4.9",
    reviews: 124,
    availability: "Mon, Wed, Fri",
    status: "online",
  },
  {
    name: "Priya Sharma",
    role: "Manufacturing Specialist",
    avatar: "/placeholder.svg?height=64&width=64",
    initials: "PS",
    skills: ["Manufacturing", "Quality Control", "Lean"],
    bio: "Manufacturing expert with experience at major automotive companies. Specializes in quality control and lean manufacturing processes.",
    rating: "4.7",
    reviews: 98,
    availability: "Tue, Thu, Sat",
    status: "offline",
  },
  {
    name: "Rajesh Kumar",
    role: "Construction Manager",
    avatar: "/placeholder.svg?height=64&width=64",
    initials: "RK",
    skills: ["Construction", "Project Management", "Safety"],
    bio: "Construction professional with 20+ years of experience managing large-scale infrastructure projects across India.",
    rating: "4.8",
    reviews: 156,
    availability: "Weekdays",
    status: "online",
  },
  {
    name: "Ananya Patel",
    role: "HVAC Technician",
    avatar: "/placeholder.svg?height=64&width=64",
    initials: "AP",
    skills: ["HVAC", "Refrigeration", "Maintenance"],
    bio: "Certified HVAC technician with expertise in commercial and industrial cooling systems. Passionate about hands-on training.",
    rating: "4.6",
    reviews: 87,
    availability: "Weekends",
    status: "offline",
  },
  {
    name: "Sunil Verma",
    role: "Automotive Mechanic",
    avatar: "/placeholder.svg?height=64&width=64",
    initials: "SV",
    skills: ["Automotive", "Diagnostics", "Engine Repair"],
    bio: "Master mechanic with specialization in engine diagnostics and repair. Former trainer at Maruti Suzuki technical academy.",
    rating: "4.9",
    reviews: 203,
    availability: "Flexible",
    status: "online",
  },
  {
    name: "Meera Joshi",
    role: "Plumbing Specialist",
    avatar: "/placeholder.svg?height=64&width=64",
    initials: "MJ",
    skills: ["Plumbing", "Pipefitting", "Water Systems"],
    bio: "Expert plumber with experience in residential and commercial projects. Advocates for women in skilled trades.",
    rating: "4.8",
    reviews: 112,
    availability: "Mon-Thu",
    status: "offline",
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
                className="pl-9 bg-white border-none shadow-sm w-full"
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
                  <CardHeader className="p-0">
                    <div className="h-20 bg-gradient-to-r from-[#16a34a] to-[#22c55e]" />
                  </CardHeader>
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <Avatar className="w-16 h-16 border-4 border-white -mt-12 shadow-sm">
                        <AvatarImage src={mentor.avatar} alt={mentor.name} />
                        <AvatarFallback className="bg-[#f0fdf4] text-[#22c55e]">{mentor.initials}</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <CardTitle>{mentor.name}</CardTitle>
                        <CardDescription>{mentor.role}</CardDescription>
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
                        {mentor.skills.map((skill) => (
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
                  </CardContent>
                  <CardFooter className="flex justify-between p-5 pt-0">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1 text-[#22c55e]" />
                      <span>Available: {mentor.availability}</span>
                    </div>
                    <Button className="bg-[#22c55e] hover:bg-[#16a34a] text-white">View Profile</Button>
                  </CardFooter>
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
              {mentors
                .filter((mentor) => mentor.status === "online")
                .map((mentor) => (
                  <Card key={mentor.name} className="border-none shadow-sm hover:shadow-md transition-all">
                    <CardHeader className="p-0">
                      <div className="h-20 bg-gradient-to-r from-[#16a34a] to-[#22c55e]" />
                    </CardHeader>
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
                          <CardTitle>{mentor.name}</CardTitle>
                          <CardDescription>{mentor.role}</CardDescription>
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
                          {mentor.skills.map((skill) => (
                            <Badge
                              key={skill}
                              className="text-xs bg-[#f0fdf4] text-[#22c55e] hover:bg-[#dcfce7] border-[#bbf7d0]"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between p-5 pt-0">
                      <div className="flex items-center text-sm text-green-500 font-medium">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>Available now</span>
                      </div>
                      <Button className="bg-[#22c55e] hover:bg-[#16a34a] text-white">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Chat Now
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}
