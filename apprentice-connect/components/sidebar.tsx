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
    <div className="w-64 bg-[#22c55e] text-white flex flex-col h-full">
      <div className="p-4 flex items-center gap-2 border-b border-[#16a34a]">
        <GraduationCap className="w-6 h-6" />
        <span className="font-semibold text-lg">ApprenticeConnect</span>
      </div>

      <div className="px-2 py-4 flex-1 overflow-auto">
        <div className="text-sm font-medium text-green-100 px-4 py-2">MAIN</div>
        <nav className="space-y-1">
          <Link
            href="/"
            className={`flex items-center gap-3 px-4 py-2 rounded-md text-white ${
              isActive("/") ? "bg-[#16a34a]" : "hover:bg-[#16a34a] transition-colors"
            }`}
          >
            <Home className="w-5 h-5" />
            <span>Dashboard</span>
          </Link>
          <Link
            href="/mentors"
            className={`flex items-center gap-3 px-4 py-2 rounded-md text-white ${
              isActive("/mentors") ? "bg-[#16a34a]" : "hover:bg-[#16a34a] transition-colors"
            }`}
          >
            <Users className="w-5 h-5" />
            <span>Mentors</span>
          </Link>
          <Link
            href="/courses"
            className={`flex items-center gap-3 px-4 py-2 rounded-md text-white ${
              isActive("/courses") ? "bg-[#16a34a]" : "hover:bg-[#16a34a] transition-colors"
            }`}
          >
            <BookOpen className="w-5 h-5" />
            <span>Courses</span>
          </Link>
          <Link
            href="/jobs"
            className={`flex items-center gap-3 px-4 py-2 rounded-md text-white ${
              isActive("/jobs") ? "bg-[#16a34a]" : "hover:bg-[#16a34a] transition-colors"
            }`}
          >
            <Briefcase className="w-5 h-5" />
            <span>Jobs</span>
          </Link>
          <Link
            href="/calendar"
            className={`flex items-center gap-3 px-4 py-2 rounded-md text-white ${
              isActive("/calendar") ? "bg-[#16a34a]" : "hover:bg-[#16a34a] transition-colors"
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
            className={`flex items-center gap-3 px-4 py-2 rounded-md text-white ${
              isActive("/resources") ? "bg-[#16a34a]" : "hover:bg-[#16a34a] transition-colors"
            }`}
          >
            <Layers className="w-5 h-5" />
            <span>Resources</span>
          </Link>
          <Link
            href="/notes"
            className={`flex items-center gap-3 px-4 py-2 rounded-md text-white ${
              isActive("/notes") ? "bg-[#16a34a]" : "hover:bg-[#16a34a] transition-colors"
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
            className={`flex items-center gap-3 px-4 py-2 rounded-md text-white ${
              isActive("/profile") ? "bg-[#16a34a]" : "hover:bg-[#16a34a] transition-colors"
            }`}
          >
            <User className="w-5 h-5" />
            <span>Profile</span>
          </Link>
          <Link
            href="/settings"
            className={`flex items-center gap-3 px-4 py-2 rounded-md text-white ${
              isActive("/settings") ? "bg-[#16a34a]" : "hover:bg-[#16a34a] transition-colors"
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
