import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Briefcase, Clock, MessageSquare, Upload, Users } from "lucide-react"

// Move data outside component to prevent recreation on each render
const mentorSessions = [
  {
    title: "Electrical Safety Basics",
    mentor: "Vikram Mehta",
    date: "Tomorrow",
    time: "4:00 PM - 5:00 PM",
  },
  {
    title: "Manufacturing Process Overview",
    mentor: "Priya Sharma",
    date: "Thursday",
    time: "5:00 PM - 6:00 PM",
  },
  {
    title: "Construction Site Management",
    mentor: "Rajesh Kumar",
    date: "Friday",
    time: "3:00 PM - 4:00 PM",
  },
]

export default function Home() {
  return (
    <>
      {/* Header */}
      <div className="bg-[#22c55e] text-white p-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold">Welcome to ApprenticeConnect</h1>
              <p className="mt-2 text-green-100">Your all-in-one platform for skilled employment training</p>

              <div className="flex gap-3 mt-4">
                <Button className="bg-white text-[#22c55e] hover:bg-green-100">Take a Tour</Button>
                <Button variant="outline" className="text-white border-white hover:bg-[#16a34a]">
                  View Resources
                </Button>
              </div>
            </div>

            <div className="bg-[#16a34a] p-4 rounded-lg w-full md:w-auto">
              <div className="text-lg font-medium">Today's Progress</div>
              <div className="flex justify-between items-center mt-1">
                <span>2 of 5 tasks completed</span>
                <span className="font-bold">40%</span>
              </div>
              <Progress value={40} className="h-2 mt-2 bg-green-300" indicatorClassName="bg-white" />
              <Button variant="ghost" className="w-full mt-3 text-white hover:bg-[#15803d]">
                View Study Plan
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="max-w-5xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-[#f0fdf4] border-none hover:shadow-md transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#dcfce7] flex items-center justify-center text-[#22c55e] mb-3">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-medium text-lg">Connect with Mentor</h3>
            </CardContent>
          </Card>

          <Card className="bg-[#f0fdf4] border-none hover:shadow-md transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#dcfce7] flex items-center justify-center text-[#22c55e] mb-3">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-medium text-lg">Continue Course</h3>
            </CardContent>
          </Card>

          <Card className="bg-[#f0fdf4] border-none hover:shadow-md transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#dcfce7] flex items-center justify-center text-[#22c55e] mb-3">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="font-medium text-lg">Browse Jobs</h3>
            </CardContent>
          </Card>

          <Card className="bg-[#f0fdf4] border-none hover:shadow-md transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#dcfce7] flex items-center justify-center text-[#22c55e] mb-3">
                <Upload className="w-6 h-6" />
              </div>
              <h3 className="font-medium text-lg">Upload Resume</h3>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-none shadow-sm hover:shadow-md transition-all">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f0fdf4] flex items-center justify-center text-[#22c55e]">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Mentor Connections</h3>
                  <p className="text-gray-600 mt-1">
                    Connect with industry professionals who can guide your career journey.
                  </p>
                </div>
              </div>
              <Button variant="ghost" className="mt-4 text-[#22c55e]">
                Explore
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm hover:shadow-md transition-all">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f0fdf4] flex items-center justify-center text-[#22c55e]">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Skill Development</h3>
                  <p className="text-gray-600 mt-1">
                    Access courses designed to build practical skills employers are looking for.
                  </p>
                </div>
              </div>
              <Button variant="ghost" className="mt-4 text-[#22c55e]">
                Explore
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm hover:shadow-md transition-all">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f0fdf4] flex items-center justify-center text-[#22c55e]">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Job Opportunities</h3>
                  <p className="text-gray-600 mt-1">Find job listings that match your skills and career aspirations.</p>
                </div>
              </div>
              <Button variant="ghost" className="mt-4 text-[#22c55e]">
                Explore
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm hover:shadow-md transition-all">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f0fdf4] flex items-center justify-center text-[#22c55e]">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Progress Tracking</h3>
                  <p className="text-gray-600 mt-1">
                    Monitor your learning journey and track your skill development over time.
                  </p>
                </div>
              </div>
              <Button variant="ghost" className="mt-4 text-[#22c55e]">
                Explore
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Upcoming Sessions */}
      <div className="max-w-5xl mx-auto p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Upcoming Sessions</h2>
          <Button variant="ghost" className="text-[#22c55e]">
            View All
          </Button>
        </div>

        <Card className="border-none shadow-sm">
          <CardContent className="p-4">
            <div className="space-y-4">
              {mentorSessions.map((session, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-[#f0fdf4]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#f0fdf4] flex items-center justify-center text-[#22c55e]">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">{session.title}</h4>
                      <p className="text-sm text-gray-500">{session.mentor}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{session.date}</div>
                    <div className="text-sm text-gray-500">{session.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
