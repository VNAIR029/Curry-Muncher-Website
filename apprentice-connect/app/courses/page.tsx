import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Clock, Filter, PlayCircle, Search, Trophy, Users } from "lucide-react"

// Move data outside component to prevent recreation on each render
const courses = [
  {
    title: "Electrical Basics for Field Work",
    description: "Learn fundamental electrical concepts for on-site applications",
    level: "Beginner",
    progress: 68,
    duration: "4 weeks",
    students: 1245,
    instructor: {
      name: "Vikram Mehta",
      avatar: "/placeholder.svg?height=24&width=24",
      initials: "VM",
    },
  },
  {
    title: "Industrial Machinery Maintenance",
    description: "Hands-on training for maintaining factory equipment",
    level: "Intermediate",
    progress: 32,
    duration: "6 weeks",
    students: 876,
    instructor: {
      name: "Sunil Verma",
      avatar: "/placeholder.svg?height=24&width=24",
      initials: "SV",
    },
  },
  {
    title: "Construction Site Management",
    description: "Essential skills for managing construction projects",
    level: "Advanced",
    progress: 12,
    duration: "8 weeks",
    students: 654,
    instructor: {
      name: "Rajesh Kumar",
      avatar: "/placeholder.svg?height=24&width=24",
      initials: "RK",
    },
  },
  {
    title: "Plumbing and Pipefitting Fundamentals",
    description: "Master the basics of plumbing systems and pipefitting",
    level: "Beginner",
    progress: 0,
    duration: "5 weeks",
    students: 932,
    instructor: {
      name: "Meera Joshi",
      avatar: "/placeholder.svg?height=24&width=24",
      initials: "MJ",
    },
  },
  {
    title: "Welding Techniques for Beginners",
    description: "Learn essential welding skills for industrial applications",
    level: "Beginner",
    progress: 0,
    duration: "6 weeks",
    students: 1087,
    instructor: {
      name: "Arjun Singh",
      avatar: "/placeholder.svg?height=24&width=24",
      initials: "AS",
    },
  },
  {
    title: "HVAC Systems and Maintenance",
    description: "Comprehensive guide to heating, ventilation, and air conditioning",
    level: "Intermediate",
    progress: 0,
    duration: "7 weeks",
    students: 765,
    instructor: {
      name: "Ananya Patel",
      avatar: "/placeholder.svg?height=24&width=24",
      initials: "AP",
    },
  },
]

const recommendedCourses = [
  {
    title: "Solar Panel Installation",
    description: "Learn to install and maintain solar energy systems",
    level: "Intermediate",
    duration: "6 weeks",
    students: 876,
    recommendationReason: "Based on your interest in electrical work",
    instructor: {
      name: "Vikram Mehta",
      avatar: "/placeholder.svg?height=24&width=24",
      initials: "VM",
    },
  },
  {
    title: "Automotive Electronics",
    description: "Understanding modern vehicle electrical systems",
    level: "Intermediate",
    duration: "5 weeks",
    students: 723,
    recommendationReason: "Popular in your region",
    instructor: {
      name: "Sunil Verma",
      avatar: "/placeholder.svg?height=24&width=24",
      initials: "SV",
    },
  },
  {
    title: "Industrial Safety Standards",
    description: "Essential safety protocols for industrial environments",
    level: "Beginner",
    duration: "3 weeks",
    students: 1432,
    recommendationReason: "Required for most blue-collar jobs",
    instructor: {
      name: "Priya Sharma",
      avatar: "/placeholder.svg?height=24&width=24",
      initials: "PS",
    },
  },
]

export default function CoursesPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-[#22c55e] text-white p-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold">Skill Development Courses</h1>
          <p className="mt-2 text-green-100">Learn practical skills that employers are looking for</p>

          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search courses by title or skill"
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
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Your Learning Journey</h2>
          <div className="flex items-center gap-2 text-[#22c55e] bg-[#f0fdf4] px-3 py-1 rounded-full">
            <Trophy className="w-4 h-4" />
            <span className="text-sm font-medium">3 day streak!</span>
          </div>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="bg-[#f0fdf4] p-1">
            <TabsTrigger value="all" className="data-[state=active]:bg-[#22c55e] data-[state=active]:text-white">
              All Courses
            </TabsTrigger>
            <TabsTrigger value="inprogress" className="data-[state=active]:bg-[#22c55e] data-[state=active]:text-white">
              In Progress
            </TabsTrigger>
            <TabsTrigger
              value="recommended"
              className="data-[state=active]:bg-[#22c55e] data-[state=active]:text-white"
            >
              Recommended
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <Card key={course.title} className="border-none shadow-sm hover:shadow-md transition-all">
                  <div className="aspect-video bg-[#f0fdf4] relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PlayCircle className="w-12 h-12 text-[#22c55e]" />
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge className="bg-[#f0fdf4] text-[#22c55e] hover:bg-[#dcfce7] border-[#bbf7d0]">
                        {course.level}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1 text-[#22c55e]" />
                        {course.duration}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <Avatar className="w-6 h-6">
                        <AvatarImage src={course.instructor.avatar} alt={course.instructor.name} />
                        <AvatarFallback className="bg-[#f0fdf4] text-[#22c55e]">
                          {course.instructor.initials}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{course.instructor.name}</span>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Course Progress</span>
                        <span className="font-medium text-[#22c55e]">{course.progress}%</span>
                      </div>
                      <Progress
                        value={course.progress}
                        className="h-2 bg-[#f0fdf4]"
                        indicatorClassName="bg-[#22c55e]"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-1 text-[#22c55e]" />
                      {course.students} students
                    </div>
                    <Button className="bg-[#22c55e] hover:bg-[#16a34a] text-white">
                      {course.progress > 0 ? "Continue" : "Start Learning"}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="inprogress">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {courses
                .filter((course) => course.progress > 0)
                .map((course) => (
                  <Card key={course.title} className="border-none shadow-sm hover:shadow-md transition-all">
                    <div className="aspect-video bg-[#f0fdf4] relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <PlayCircle className="w-12 h-12 text-[#22c55e]" />
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge className="bg-[#f0fdf4] text-[#22c55e] hover:bg-[#dcfce7] border-[#bbf7d0]">
                          {course.level}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1 text-[#22c55e]" />
                          {course.duration}
                        </div>
                      </div>
                      <CardTitle className="text-xl">{course.title}</CardTitle>
                      <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mt-2 space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Course Progress</span>
                          <span className="font-medium text-[#22c55e]">{course.progress}%</span>
                        </div>
                        <Progress
                          value={course.progress}
                          className="h-2 bg-[#f0fdf4]"
                          indicatorClassName="bg-[#22c55e]"
                        />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white">Continue Learning</Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="recommended">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {recommendedCourses.map((course) => (
                <Card key={course.title} className="border-none shadow-sm hover:shadow-md transition-all">
                  <div className="aspect-video bg-[#f0fdf4] relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PlayCircle className="w-12 h-12 text-[#22c55e]" />
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge className="bg-[#f0fdf4] text-[#22c55e] hover:bg-[#dcfce7] border-[#bbf7d0]">
                        {course.level}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1 text-[#22c55e]" />
                        {course.duration}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <Avatar className="w-6 h-6">
                        <AvatarImage src={course.instructor.avatar} alt={course.instructor.name} />
                        <AvatarFallback className="bg-[#f0fdf4] text-[#22c55e]">
                          {course.instructor.initials}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{course.instructor.name}</span>
                    </div>
                    <div className="mt-4 p-3 bg-[#f0fdf4] rounded-md">
                      <p className="text-sm">
                        <span className="font-medium text-[#22c55e]">Recommended:</span> {course.recommendationReason}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white">Enroll Now</Button>
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
