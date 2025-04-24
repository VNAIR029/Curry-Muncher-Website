"use client"

import { useState } from "react"
import { addDays, format, isSameDay, startOfWeek } from "date-fns"
import { ChevronLeft, ChevronRight, Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"

// Sample data for courses and work schedule
const courses = [
  { id: 1, name: "Introduction to Programming", time: "09:00 - 11:00", day: "Monday" },
  { id: 2, name: "Web Development Basics", time: "13:00 - 15:00", day: "Tuesday" },
  { id: 3, name: "Database Management", time: "10:00 - 12:00", day: "Wednesday" },
]

const workSchedule = [
  { id: 1, company: "Tech Solutions Inc.", time: "08:00 - 16:00", day: "Monday" },
  { id: 2, company: "WebDev Co.", time: "09:00 - 17:00", day: "Wednesday" },
  { id: 3, company: "Data Systems", time: "10:00 - 18:00", day: "Friday" },
]

export default function CalendarPage() {
  const [currentWeek, setCurrentWeek] = useState(startOfWeek(new Date()))

  const handlePreviousWeek = () => {
    setCurrentWeek(prev => addDays(prev, -7))
  }

  const handleNextWeek = () => {
    setCurrentWeek(prev => addDays(prev, 7))
  }

  const days = Array.from({ length: 7 }, (_, i) => addDays(currentWeek, i))

  return (
    <>
      {/* Header */}
      <div className="bg-[#22c55e] text-white p-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold">Your Schedule</h1>
          <p className="mt-2 text-green-100">View and manage your courses and work schedule</p>

          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by course name, company, or date"
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
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Button variant="outline" className="h-8 w-8 p-0" onClick={handlePreviousWeek}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="h-8 w-8 p-0" onClick={handleNextWeek}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="text-lg font-semibold">
            {format(currentWeek, "MMMM d, yyyy")} - {format(addDays(currentWeek, 6), "MMMM d, yyyy")}
          </div>
        </div>

        <div className="grid grid-cols-7 gap-4">
          {days.map(day => (
            <div key={day.toString()} className="bg-white rounded-lg p-4 shadow">
              <div className="font-semibold mb-4">{format(day, "EEEE, MMM d")}</div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Courses</h3>
                  {courses
                    .filter(course => course.day === format(day, "EEEE"))
                    .map(course => (
                      <div key={course.id} className="bg-blue-50 p-2 rounded mb-2">
                        <div className="font-medium">{course.name}</div>
                        <div className="text-sm text-gray-500">{course.time}</div>
                      </div>
                    ))}
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Work Schedule</h3>
                  {workSchedule
                    .filter(work => work.day === format(day, "EEEE"))
                    .map(work => (
                      <div key={work.id} className="bg-green-50 p-2 rounded">
                        <div className="font-medium">{work.company}</div>
                        <div className="text-sm text-gray-500">{work.time}</div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
} 