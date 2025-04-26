"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Clock, Filter, PlayCircle, Search, Trophy, Users } from "lucide-react"

// Course data
const courses = [
  { title: "Electrical Basics for Field Work", description: "Learn fundamental electrical concepts for on-site applications", level: "Beginner", progress: 68, duration: "4 weeks", students: 1245, instructor: { name: "Vikram Mehta", avatar: "/placeholder.svg?height=24&width=24", initials: "VM" } },
  { title: "Industrial Machinery Maintenance", description: "Hands-on training for maintaining factory equipment", level: "Intermediate", progress: 32, duration: "6 weeks", students: 876, instructor: { name: "Sunil Verma", avatar: "/placeholder.svg?height=24&width=24", initials: "SV" } },
  { title: "Construction Site Management", description: "Essential skills for managing construction projects", level: "Advanced", progress: 12, duration: "8 weeks", students: 654, instructor: { name: "Rajesh Kumar", avatar: "/placeholder.svg?height=24&width=24", initials: "RK" } },
  { title: "Plumbing and Pipefitting Fundamentals", description: "Master the basics of plumbing systems and pipefitting", level: "Beginner", progress: 0, duration: "5 weeks", students: 932, instructor: { name: "Meera Joshi", avatar: "/placeholder.svg?height=24&width=24", initials: "MJ" } },
  { title: "Welding Techniques for Beginners", description: "Learn essential welding skills for industrial applications", level: "Beginner", progress: 0, duration: "6 weeks", students: 1087, instructor: { name: "Arjun Singh", avatar: "/placeholder.svg?height=24&width=24", initials: "AS" } },
  { title: "HVAC Systems and Maintenance", description: "Comprehensive guide to heating, ventilation, and air conditioning", level: "Intermediate", progress: 0, duration: "7 weeks", students: 765, instructor: { name: "Ananya Patel", avatar: "/placeholder.svg?height=24&width=24", initials: "AP" } },
]

const recommended = [
  { title: "Solar Panel Installation", description: "Learn to install and maintain solar energy systems", level: "Intermediate", duration: "6 weeks", students: 876, reason: "Based on your interest in electrical work", instructor: { name: "Vikram Mehta", avatar: "/placeholder.svg?height=24&width=24", initials: "VM" } },
  { title: "Automotive Electronics", description: "Understanding modern vehicle electrical systems", level: "Intermediate", duration: "5 weeks", students: 723, reason: "Popular in your region", instructor: { name: "Sunil Verma", avatar: "/placeholder.svg?height=24&width=24", initials: "SV" } },
  { title: "Industrial Safety Standards", description: "Essential safety protocols for industrial environments", level: "Beginner", duration: "3 weeks", students: 1432, reason: "Required for most blue-collar jobs", instructor: { name: "Priya Sharma", avatar: "/placeholder.svg?height=24&width=24", initials: "PS" } },
]

export default function CoursesPage() {
  const [search, setSearch] = useState("")
  const [tab, setTab] = useState("all")

  const filtered = courses.filter(c => {
    const match =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.instructor.name.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase())

    if (tab === "inprogress") return match && c.progress > 0
    if (tab === "recommended") return match && recommended.some(r => r.title === c.title)
    return match
  })

  return (
    <>
      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 to-green-400 text-white py-10">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h1 className="text-4xl font-extrabold">Enhance Your Skills</h1>
          <p className="mt-2 text-lg opacity-90">Discover courses to advance your career in skilled trades</p>

          <div className="flex flex-col md:flex-row gap-4 mt-8 justify-center">
            <div className="relative w-full md:w-2/3">
              <Search className="absolute left-4 top-4 h-5 w-5 text-gray-300" />
              <Input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search courses, instructors or topics"
                className="pl-12 pr-4 py-3 rounded-full bg-white text-gray-800 shadow-lg"
              />
            </div>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 rounded-full px-6">
              <Filter className="w-5 h-5 mr-2" />Filters
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-8 space-y-12">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Your Learning Journey</h2>
          <div className="inline-flex items-center bg-white bg-opacity-20 text-white px-3 py-1 rounded-full">
            <Trophy className="w-4 h-4 mr-1" />
            <span className="text-sm">3 day streak!</span>
          </div>
        </div>

        <Tabs defaultValue="all" onValueChange={setTab} className="space-y-6">
          <TabsList className="bg-gray-100 p-1 rounded-full flex justify-center">
            <TabsTrigger value="all" className="data-[state=active]:bg-green-600 data-[state=active]:text-white px-4 rounded-full">All Courses</TabsTrigger>
            <TabsTrigger value="inprogress" className="data-[state=active]:bg-green-600 data-[state=active]:text-white px-4 rounded-full">In Progress</TabsTrigger>
            <TabsTrigger value="recommended" className="data-[state=active]:bg-green-600 data-[state=active]:text-white px-4 rounded-full">Recommended</TabsTrigger>
          </TabsList>

          <TabsContent value={tab} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map(course => (
              <Card key={course.title} className="transform hover:-translate-y-1 hover:shadow-xl transition-all rounded-xl">
                <div className="aspect-video bg-gray-100 rounded-t-xl flex items-center justify-center">
                  <PlayCircle className="w-12 h-12 text-green-600" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-gray-100 text-green-600">{course.level}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />{course.duration}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src={course.instructor.avatar} alt={course.instructor.name} />
                      <AvatarFallback className="bg-gray-100 text-green-600">{course.instructor.initials}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{course.instructor.name}</span>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span className="font-medium text-green-600">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2 bg-gray-100 [&>div]:bg-green-600 rounded-full" />
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-1" />{course.students}
                    </div>
                    <Button variant="outline" className="text-green-600 border-green-600 hover:bg-gray-100">Continue</Button>
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
