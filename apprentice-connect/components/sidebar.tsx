"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, Briefcase, Calendar, GraduationCap, Home, Layers, Mic, Settings, User, Users } from "lucide-react"

export function Sidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div className="w-64 bg-green-gradient text-white flex flex-col h-full">
      <div className="p-4 flex items-center gap-2 border-b border-[#16a34a]">
        <GraduationCap className="w-6 h-6" />
        <span className="font-semibold text-lg">ApprenticeConnect</span>
      </div>

      <div className="px-2 py-4 flex-1 overflow-auto">
        <div className="text-sm font-medium text-green-100 px-4 py-2">MAIN</div>
        <nav className="space-y-1">
          <Link
            href="/"
            className={`flex items-center gap-3 px-4 py-3 rounded-md text-white transition-all duration-200 ${
              isActive("/") 
                ? "bg-green-gradient-hover scale-105" 
                : "hover:bg-green-gradient-hover hover:scale-105 active:scale-95"
            }`}
          >
            <Home className="w-5 h-5" />
            <span>Dashboard</span>
          </Link>
          <Link
            href="/mentors"
            className={`flex items-center gap-3 px-4 py-3 rounded-md text-white transition-all duration-200 ${
              isActive("/mentors") 
                ? "bg-green-gradient-hover scale-105" 
                : "hover:bg-green-gradient-hover hover:scale-105 active:scale-95"
            }`}
          >
            <Users className="w-5 h-5" />
            <span>Mentors</span>
          </Link>
          <Link
            href="/courses"
            className={`flex items-center gap-3 px-4 py-3 rounded-md text-white transition-all duration-200 ${
              isActive("/courses") 
                ? "bg-green-gradient-hover scale-105" 
                : "hover:bg-green-gradient-hover hover:scale-105 active:scale-95"
            }`}
          >
            <BookOpen className="w-5 h-5" />
            <span>Courses</span>
          </Link>
          <Link
            href="/jobs"
            className={`flex items-center gap-3 px-4 py-3 rounded-md text-white transition-all duration-200 ${
              isActive("/jobs") 
                ? "bg-green-gradient-hover scale-105" 
                : "hover:bg-green-gradient-hover hover:scale-105 active:scale-95"
            }`}
          >
            <Briefcase className="w-5 h-5" />
            <span>Jobs</span>
          </Link>
          <Link
            href="/calendar"
            className={`flex items-center gap-3 px-4 py-3 rounded-md text-white transition-all duration-200 ${
              isActive("/calendar") 
                ? "bg-green-gradient-hover scale-105" 
                : "hover:bg-green-gradient-hover hover:scale-105 active:scale-95"
            }`}
          >
            <Calendar className="w-5 h-5" />
            <span>Calendar</span>
          </Link>
        </nav>

        <div className="text-sm font-medium text-green-100 px-4 py-2 mt-6">TOOLS</div>
        <nav className="space-y-1">
          <Link
            href="/resources"
            className={`flex items-center gap-3 px-4 py-3 rounded-md text-white transition-all duration-200 ${
              isActive("/resources") 
                ? "bg-green-gradient-hover scale-105" 
                : "hover:bg-green-gradient-hover hover:scale-105 active:scale-95"
            }`}
          >
            <Layers className="w-5 h-5" />
            <span>Resources</span>
          </Link>
          <Link
            href="/notes"
            className={`flex items-center gap-3 px-4 py-3 rounded-md text-white transition-all duration-200 ${
              isActive("/notes") 
                ? "bg-green-gradient-hover scale-105" 
                : "hover:bg-green-gradient-hover hover:scale-105 active:scale-95"
            }`}
          >
            <Mic className="w-5 h-5" />
            <span>Notes</span>
          </Link>
        </nav>

        <div className="text-sm font-medium text-green-100 px-4 py-2 mt-6">MORE</div>
        <nav className="space-y-1">
          <Link
            href="/profile"
            className={`flex items-center gap-3 px-4 py-3 rounded-md text-white transition-all duration-200 ${
              isActive("/profile") 
                ? "bg-green-gradient-hover scale-105" 
                : "hover:bg-green-gradient-hover hover:scale-105 active:scale-95"
            }`}
          >
            <User className="w-5 h-5" />
            <span>Profile</span>
          </Link>
          <Link
            href="/settings"
            className={`flex items-center gap-3 px-4 py-3 rounded-md text-white transition-all duration-200 ${
              isActive("/settings") 
                ? "bg-green-gradient-hover scale-105" 
                : "hover:bg-green-gradient-hover hover:scale-105 active:scale-95"
            }`}
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </Link>
        </nav>
      </div>
    </div>
  )
}
