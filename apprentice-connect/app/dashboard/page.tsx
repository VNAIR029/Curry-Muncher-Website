"use client"

import { useState } from "react"
import { format } from "date-fns"
import { Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
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
  Calendar as CalendarIcon,
} from "lucide-react"
import { Calendar } from "@/components/ui/calendar"

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

// Sample data for in-progress courses
const inProgressCourses = [
  {
    id: 1,
    name: "Introduction to Programming",
    progress: 75,
    nextLesson: "Functions and Modules",
    dueDate: "2024-03-15"
  },
  {
    id: 2,
    name: "Web Development Basics",
    progress: 45,
    nextLesson: "CSS Grid Layout",
    dueDate: "2024-03-20"
  }
]

// Sample data for upcoming classes
const upcomingClasses = [
  {
    id: 1,
    name: "Database Management",
    time: "10:00 AM",
    date: "2024-03-12",
    instructor: "John Smith"
  },
  {
    id: 2,
    name: "UI/UX Design",
    time: "2:00 PM",
    date: "2024-03-13",
    instructor: "Sarah Johnson"
  }
]

// Sample data for recent achievements
const recentAchievements = [
  {
    id: 1,
    title: "Completed HTML/CSS Module",
    date: "2024-03-10",
    points: 100
  },
  {
    id: 2,
    title: "First Project Submission",
    date: "2024-03-08",
    points: 250
  }
]

export default function Dashboard() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <>
      {/* Header */}
      <div className="bg-[#22c55e] text-white p-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold">Welcome Back!</h1>
          <p className="mt-2 text-green-100">Track your progress and stay on top of your schedule</p>

          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search courses, achievements, or schedule"
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

      <div className="container mx-auto p-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Courses in Progress</h3>
              <p className="text-3xl font-bold text-green-600">2</p>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Upcoming Classes</h3>
              <p className="text-3xl font-bold text-blue-600">3</p>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Total Points</h3>
              <p className="text-3xl font-bold text-purple-600">850</p>
            </CardContent>
          </Card>
        </div>

        {/* In Progress Courses */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">In Progress Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {inProgressCourses.map(course => (
              <Card key={course.id} className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
                  <div className="mb-4">
                    <Progress value={course.progress} className="h-2" />
                    <p className="text-sm text-gray-500 mt-1">{course.progress}% complete</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <span className="font-medium">Next Lesson:</span> {course.nextLesson}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Due Date:</span> {format(new Date(course.dueDate), "MMMM d, yyyy")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Calendar and Upcoming Classes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Calendar</h2>
            <Card className="bg-white">
              <CardContent className="p-6">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Upcoming Classes</h2>
            <div className="space-y-4">
              {upcomingClasses.map(classItem => (
                <Card key={classItem.id} className="bg-white">
                  <CardContent className="p-4">
                    <h3 className="font-semibold">{classItem.name}</h3>
                    <p className="text-sm text-gray-500">
                      {format(new Date(classItem.date), "MMMM d, yyyy")} at {classItem.time}
                    </p>
                    <p className="text-sm text-gray-500">Instructor: {classItem.instructor}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Recent Achievements</h2>
            <div className="space-y-4">
              {recentAchievements.map(achievement => (
                <Card key={achievement.id} className="bg-white">
                  <CardContent className="p-4">
                    <h3 className="font-semibold">{achievement.title}</h3>
                    <p className="text-sm text-gray-500">
                      {format(new Date(achievement.date), "MMMM d, yyyy")}
                    </p>
                    <p className="text-sm text-green-600">+{achievement.points} points</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 