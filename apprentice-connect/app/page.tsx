"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Calendar } from "@/components/ui/calendar"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Welcome to ApprenticeConnect</h1>
      </div>
      <p className="mb-8">Your journey to success starts here.</p>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-2">Active Courses</h3>
            <p className="text-3xl font-bold text-green-600">3</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-2">Completed Hours</h3>
            <p className="text-3xl font-bold text-green-600">120</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-2">Upcoming Classes</h3>
            <p className="text-3xl font-bold text-green-600">2</p>
          </CardContent>
        </Card>
      </div>

      {/* In Progress Courses */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">In Progress Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Web Development Fundamentals</h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Progress</span>
                <span className="text-sm font-medium">65%</span>
              </div>
              <Progress value={65} className="h-2" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Database Management</h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Progress</span>
                <span className="text-sm font-medium">40%</span>
              </div>
              <Progress value={40} className="h-2" />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Calendar and Upcoming Events */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Calendar</h2>
          <Card>
            <CardContent className="p-6">
              <Calendar />
            </CardContent>
          </Card>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Upcoming Classes</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="font-medium">Web Development Fundamentals</h3>
                  <p className="text-sm text-gray-600">Tomorrow, 10:00 AM</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-medium">Database Management</h3>
                  <p className="text-sm text-gray-600">Friday, 2:00 PM</p>
                </div>
                <div>
                  <h3 className="font-medium">Project Work</h3>
                  <p className="text-sm text-gray-600">Next Monday, 9:00 AM</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-xl font-semibold mt-6 mb-4">Recent Achievements</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600">✓</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Completed HTML/CSS Module</h3>
                    <p className="text-sm text-gray-600">2 days ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600">✓</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Passed JavaScript Quiz</h3>
                    <p className="text-sm text-gray-600">1 week ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
