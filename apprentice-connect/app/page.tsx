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

// Dashboard data arrays
const stats = [
  { id: 1, label: "Projects Completed", value: 128, icon: Briefcase, bg: "from-green-300 to-green-500" },
  { id: 2, label: "Happy Clients", value: 64, icon: Users, bg: "from-blue-300 to-blue-500" },
  { id: 3, label: "Awards Won", value: 12, icon: Trophy, bg: "from-yellow-300 to-yellow-500" },
  { id: 4, label: "Global Partners", value: 16, icon: Globe, bg: "from-purple-300 to-purple-500" },
]

const features = [
  { id: 1, icon: Layers, title: "Drag & Drop Builder", description: "Easily build your page with our intuitive editor." },
  { id: 2, icon: Smartphone, title: "Responsive Design", description: "Looks great on any device, mobile or desktop." },
  { id: 3, icon: ChartPie, title: "Real-time Analytics", description: "Track your visitors and performance instantly." },
  { id: 4, icon: ShieldCheck, title: "Secure Hosting", description: "We handle SSL, backups, and security for you." },
]

const testimonials = [
  { id: 1, name: "John Doe", role: "Entrepreneur", quote: "This platform launched my business site in minutes!", avatar: "https://via.placeholder.com/64", initials: "JD" },
  { id: 2, name: "Jane Smith", role: "Freelancer", quote: "Real-time analytics keeps me motivated.", avatar: "https://via.placeholder.com/64", initials: "JS" },
  { id: 3, name: "Bob Johnson", role: "Startup Founder", quote: "Responsive design means I study on the go.", avatar: "https://via.placeholder.com/64", initials: "BJ" },
]

const inProgressCourses = [
  { id: 1, name: "Introduction to Programming", progress: 75, nextLesson: "Functions and Modules", dueDate: "2024-03-15" },
  { id: 2, name: "Web Development Basics", progress: 45, nextLesson: "CSS Grid Layout", dueDate: "2024-03-20" },
]

const upcomingClasses = [
  { id: 1, name: "Database Management", time: "10:00 AM", date: "2024-03-12", instructor: "John Smith" },
  { id: 2, name: "UI/UX Design", time: "2:00 PM", date: "2024-03-13", instructor: "Sarah Johnson" },
]

const recentAchievements = [
  { id: 1, title: "Completed HTML/CSS Module", date: "2024-03-10", points: 100 },
  { id: 2, title: "First Project Submission", date: "2024-03-08", points: 250 },
]

export default function Dashboard() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <>
      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 to-green-400 text-white py-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold">Welcome Back!</h1>
          <p className="mt-2 text-lg opacity-90">Track your progress and stay on top of your schedule</p>

          <div className="flex flex-col md:flex-row gap-4 mt-8 justify-center">
            <div className="relative w-full md:w-2/3">
              <Search className="absolute left-4 top-4 h-5 w-5 text-gray-300" />
              <Input
                placeholder="Search courses, achievements, or schedule"
                className="pl-12 pr-4 py-3 rounded-full bg-white text-gray-800 shadow-lg"
              />
            </div>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 rounded-full px-6">
              <Filter className="w-5 h-5 mr-2" />
              Filters
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-8 space-y-12">
        {/* Quick Stats */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(stat => (
            <Card
              key={stat.id}
              className={
                `bg-gradient-to-br ${stat.bg} text-white transform hover:scale-105 transition p-6 rounded-xl shadow-lg`
              }
            >
              <CardContent className="flex items-center gap-4 p-0">
                <div className="p-3 bg-white bg-opacity-20 rounded-full">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-sm opacity-80">{stat.label}</p>
                  <p className="text-3xl font-bold mt-1">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Features */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map(feature => (
              <Card
                key={feature.id}
                className="hover:shadow-xl transform hover:-translate-y-1 transition bg-white rounded-xl"
              >
                <CardContent className="flex flex-col items-center text-center p-6">
                  <feature.icon className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* In Progress Courses */}
        <section>
          <h2 className="text-2xl font-bold mb-6">In Progress Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {inProgressCourses.map(course => (
              <Card key={course.id} className="bg-white rounded-xl hover:shadow-md transition">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{course.name}</h3>
                  <Progress value={course.progress} className="h-3 rounded-full mb-3" />
                  <p className="text-sm text-gray-500 mb-1">{course.progress}% complete</p>
                  <p className="text-sm"><span className="font-medium">Next:</span> {course.nextLesson}</p>
                  <p className="text-sm"><span className="font-medium">Due:</span> {format(new Date(course.dueDate), "MMMM d, yyyy")}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Calendar & Upcoming */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold">Calendar</h2>
            <Card className="bg-white rounded-xl shadow">
              <CardContent className="p-4">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Upcoming Classes</h2>
              <div className="space-y-4">
                {upcomingClasses.map(item => (
                  <Card key={item.id} className="bg-white rounded-lg shadow hover:shadow-md transition">
                    <CardContent className="p-4">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-500">{format(new Date(item.date), "MMMM d, yyyy")} at {item.time}</p>
                      <p className="text-sm text-gray-500">Instructor: {item.instructor}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Recent Achievements</h2>
              <div className="space-y-4">
                {recentAchievements.map(ach => (
                  <Card key={ach.id} className="bg-white rounded-lg shadow hover:shadow-md transition">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{ach.title}</h3>
                        <p className="text-sm text-gray-500">{format(new Date(ach.date), "MMMM d, yyyy")}</p>
                      </div>
                      <span className="text-green-600 font-bold">+{ach.points}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-center">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map(t => (
              <Card key={t.id} className="bg-white rounded-xl transform hover:scale-105 transition shadow">
                <CardContent className="p-6 text-center">
                  <Avatar className="mx-auto mb-4">
                    <AvatarImage src={t.avatar} alt={t.name} />
                    <AvatarFallback>{t.initials}</AvatarFallback>
                  </Avatar>
                  <p className="italic mb-4">"{t.quote}"</p>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
