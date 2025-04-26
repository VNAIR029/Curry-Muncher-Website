"use client"

import { useState } from "react"
import { addDays, format, startOfWeek } from "date-fns"
import { ChevronLeft, ChevronRight, Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

// Schedule data
const courseSchedule = [
  { id: 1, name: "Electrical Basics for Field Work", time: "09:00 - 11:00", day: "Monday" },
  { id: 2, name: "Industrial Machinery Maintenance", time: "13:00 - 15:00", day: "Tuesday" },
  { id: 3, name: "Construction Site Management", time: "10:00 - 12:00", day: "Wednesday" },
  { id: 4, name: "Plumbing and Pipefitting Fundamentals", time: "14:00 - 16:00", day: "Thursday" },
  { id: 5, name: "Welding Techniques for Beginners", time: "09:00 - 11:00", day: "Friday" },
  { id: 6, name: "HVAC Systems and Maintenance", time: "13:00 - 15:00", day: "Friday" },
]

const workSchedule = [
  { id: 1, company: "PowerGrid Solutions", time: "16:00 - 18:00", day: "Monday" },
  { id: 2, company: "TechMach Industries", time: "16:00 - 18:00", day: "Tuesday" },
  { id: 3, company: "BuildRight Constructions", time: "16:00 - 18:00", day: "Wednesday" },
  { id: 4, company: "WaterWorks Solutions", time: "16:00 - 18:00", day: "Thursday" },
  { id: 5, company: "MetalCraft Industries", time: "16:00 - 18:00", day: "Friday" },
  { id: 6, company: "ClimateControl Systems", time: "16:00 - 18:00", day: "Friday" },
]

export default function CalendarPage() {
  const [currentWeek, setCurrentWeek] = useState(startOfWeek(new Date(), { weekStartsOn: 1 }))

  const prevWeek = () => setCurrentWeek(w => addDays(w, -7))
  const nextWeek = () => setCurrentWeek(w => addDays(w, 7))

  const days = Array.from({ length: 7 }, (_, i) => addDays(currentWeek, i))

  return (
    <>
      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 to-green-400 text-white py-10">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h1 className="text-4xl font-extrabold">Your Schedule</h1>
          <p className="mt-2 text-lg opacity-90">View and manage your courses and work shifts</p>
          <div className="flex flex-col md:flex-row gap-4 mt-8 justify-center">
            <div className="relative w-full md:w-2/3">
              <Search className="absolute left-4 top-4 h-5 w-5 text-gray-300" />
              <Input
                placeholder="Search by course, company, or date"
                className="pl-12 pr-4 py-3 rounded-full bg-white text-gray-800 shadow-lg"
              />
            </div>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 rounded-full px-6">
              <Filter className="w-5 h-5 mr-2" />Filters
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-8 space-y-6">
        {/* Week nav */}
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <Button variant="outline" className="p-2 rounded-full" onClick={prevWeek}>
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </Button>
            <Button variant="outline" className="p-2 rounded-full" onClick={nextWeek}>
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </Button>
          </div>
          <div className="text-lg font-semibold">
            {format(currentWeek, "MMM d")} - {format(addDays(currentWeek, 6), "MMM d, yyyy")}
          </div>
        </div>

        {/* Days grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {days.map(day => (
            <Card key={day.toString()} className="rounded-xl hover:shadow-lg transition-all">
              <CardContent className="p-5">
                <div className="text-lg font-semibold mb-4">{format(day, "EEE, MMM d")}</div>
                <div className="space-y-4">
                  <section>
                    <h4 className="text-sm font-medium text-gray-600 mb-2">Courses</h4>
                    {courseSchedule.filter(c => c.day === format(day, "EEEE")).map(c => (
                      <div key={c.id} className="bg-blue-100 p-3 rounded-lg mb-2 hover:bg-blue-200 transition">
                        <div className="font-medium">{c.name}</div>
                        <div className="text-sm text-gray-500">{c.time}</div>
                      </div>
                    ))}
                  </section>
                  <section>
                    <h4 className="text-sm font-medium text-gray-600 mb-2">Work Shifts</h4>
                    {workSchedule.filter(w => w.day === format(day, "EEEE")).map(w => (
                      <div key={w.id} className="bg-green-100 p-3 rounded-lg hover:bg-green-200 transition">
                        <div className="font-medium">{w.company}</div>
                        <div className="text-sm text-gray-500">{w.time}</div>
                      </div>
                    ))}
                  </section>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </>
  )
}
