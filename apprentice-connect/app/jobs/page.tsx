import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, Building2, Filter, MapPin, Search, ThumbsUp } from "lucide-react"

// Move data outside component to prevent recreation on each render
const jobs = [
  {
    title: "Junior Electrical Technician",
    company: "Tata Power",
    location: "Mumbai, Maharashtra",
    salary: "₹25,000 - ₹35,000/month",
    tags: ["Electrical", "Field Work", "Entry Level"],
    posted: "2 days ago",
    type: "Full-time",
    description:
      "We are looking for a Junior Electrical Technician to join our team. The ideal candidate will have basic knowledge of electrical systems and be willing to learn on the job. This position involves field work and maintenance of electrical equipment.",
  },
  {
    title: "Manufacturing Associate",
    company: "Mahindra & Mahindra",
    location: "Pune, Maharashtra",
    salary: "₹22,000 - ₹30,000/month",
    tags: ["Manufacturing", "Assembly", "Shift Work"],
    posted: "1 week ago",
    type: "Full-time",
    description:
      "Join our manufacturing team as an Associate. You will be responsible for assembly line operations, quality checks, and maintaining production standards. Experience with automotive assembly is a plus but not required.",
  },
  {
    title: "Construction Site Supervisor",
    company: "L&T Construction",
    location: "Bangalore, Karnataka",
    salary: "₹35,000 - ₹45,000/month",
    tags: ["Construction", "Supervision", "Safety"],
    posted: "3 days ago",
    type: "Full-time",
    description:
      "L&T Construction is seeking a Site Supervisor to oversee construction activities, ensure safety protocols are followed, and coordinate with various teams. The ideal candidate will have experience in construction and leadership skills.",
  },
  {
    title: "HVAC Maintenance Technician",
    company: "Blue Star Limited",
    location: "Delhi, NCR",
    salary: "₹28,000 - ₹38,000/month",
    tags: ["HVAC", "Maintenance", "Technical"],
    posted: "5 days ago",
    type: "Full-time",
    description:
      "Blue Star is hiring HVAC Maintenance Technicians to service and repair air conditioning and refrigeration systems. Candidates should have basic knowledge of HVAC systems and be willing to work in various locations.",
  },
  {
    title: "Apprentice Welder",
    company: "Jindal Steel & Power",
    location: "Raigarh, Chhattisgarh",
    salary: "₹18,000 - ₹25,000/month",
    tags: ["Welding", "Apprenticeship", "Manufacturing"],
    posted: "1 week ago",
    type: "Apprenticeship",
    description:
      "Jindal Steel & Power is offering apprenticeship positions for welders. This is a great opportunity for those looking to develop skills in industrial welding. Training will be provided, and successful apprentices may be offered permanent positions.",
  },
]

const recommendedJobs = [
  {
    title: "Electrical Maintenance Technician",
    company: "Reliance Industries",
    location: "Mumbai, Maharashtra",
    salary: "₹30,000 - ₹40,000/month",
    tags: ["Electrical", "Maintenance", "Industrial"],
    posted: "1 day ago",
    type: "Full-time",
    description:
      "Reliance Industries is seeking an Electrical Maintenance Technician to join our team. The role involves maintaining and troubleshooting electrical systems in our manufacturing facility.",
    recommendationReason:
      "This matches your electrical skills and course progress in Electrical Basics for Field Work.",
  },
  {
    title: "Solar Panel Installation Technician",
    company: "Adani Solar",
    location: "Ahmedabad, Gujarat",
    salary: "₹28,000 - ₹38,000/month",
    tags: ["Solar", "Renewable Energy", "Installation"],
    posted: "3 days ago",
    type: "Full-time",
    description:
      "Join Adani Solar as an Installation Technician for solar panel systems. You will be responsible for installing and maintaining solar panels for residential and commercial properties.",
    recommendationReason: "Based on your interest in electrical work and renewable energy from your mentor sessions.",
  },
  {
    title: "Automation Technician Trainee",
    company: "Siemens India",
    location: "Pune, Maharashtra",
    salary: "₹25,000 - ₹32,000/month",
    tags: ["Automation", "PLC", "Training"],
    posted: "1 week ago",
    type: "Full-time",
    description:
      "Siemens is looking for Automation Technician Trainees to work with our industrial automation systems. This position includes comprehensive training on PLC programming and industrial control systems.",
    recommendationReason: "This aligns with your career goals in industrial automation mentioned in your profile.",
  },
]

export default function JobsPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-[#22c55e] text-white p-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold">Find Your Next Opportunity</h1>
          <p className="mt-2 text-green-100">Browse jobs that match your skills and experience</p>

          <div className="grid gap-4 md:grid-cols-[2fr_1fr_auto] mt-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Job title, skills, or keywords"
                className="pl-9 bg-white border-none shadow-sm w-full"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="border-none bg-white shadow-sm">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="mumbai">Mumbai</SelectItem>
                <SelectItem value="delhi">Delhi</SelectItem>
                <SelectItem value="bangalore">Bangalore</SelectItem>
                <SelectItem value="pune">Pune</SelectItem>
                <SelectItem value="chennai">Chennai</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="gap-2 text-white border-white hover:bg-[#16a34a]">
              <Filter className="w-4 h-4" />
              More Filters
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Job Opportunities</h2>
          <div className="flex items-center gap-2 text-[#22c55e] bg-[#f0fdf4] px-3 py-1 rounded-full">
            <ThumbsUp className="w-4 h-4" />
            <span className="text-sm font-medium">Profile strength: Good</span>
          </div>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="bg-[#f0fdf4] p-1">
            <TabsTrigger value="all" className="data-[state=active]:bg-[#22c55e] data-[state=active]:text-white">
              All Jobs
            </TabsTrigger>
            <TabsTrigger
              value="recommended"
              className="data-[state=active]:bg-[#22c55e] data-[state=active]:text-white"
            >
              Recommended
            </TabsTrigger>
            <TabsTrigger value="applied" className="data-[state=active]:bg-[#22c55e] data-[state=active]:text-white">
              Applied
            </TabsTrigger>
            <TabsTrigger value="saved" className="data-[state=active]:bg-[#22c55e] data-[state=active]:text-white">
              Saved
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <div className="grid gap-6">
              {jobs.map((job) => (
                <Card key={job.title} className="border-none shadow-sm hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-md bg-[#f0fdf4] flex items-center justify-center text-[#22c55e]">
                          <Building2 className="w-6 h-6" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-semibold text-lg">{job.title}</h3>
                          <div className="flex items-center gap-2 text-gray-500">
                            <span>{job.company}</span>
                            <span>•</span>
                            <div className="flex items-center">
                              <MapPin className="w-3 h-3 mr-1 text-[#22c55e]" />
                              {job.location}
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1 pt-1">
                            {job.tags.map((tag) => (
                              <Badge
                                key={tag}
                                className="text-xs bg-[#f0fdf4] text-[#22c55e] hover:bg-[#dcfce7] border-[#bbf7d0]"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="font-medium text-[#22c55e]">{job.salary}</div>
                        <div className="text-xs text-gray-500">Posted {job.posted}</div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-gray-600 line-clamp-2">{job.description}</p>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-4 mt-4 pt-4 border-t">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-[#22c55e]" />
                        <span className="text-sm text-gray-500">{job.type}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" className="border-[#22c55e] text-[#22c55e] hover:bg-[#f0fdf4]">
                          Save
                        </Button>
                        <Button className="bg-[#22c55e] hover:bg-[#16a34a] text-white">Apply Now</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recommended">
            <div className="grid gap-6">
              {recommendedJobs.map((job) => (
                <Card key={job.title} className="border-none shadow-sm hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-md bg-[#f0fdf4] flex items-center justify-center text-[#22c55e]">
                          <Building2 className="w-6 h-6" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-lg">{job.title}</h3>
                            <Badge className="bg-[#f0fdf4] text-[#22c55e] border-[#bbf7d0]">95% Match</Badge>
                          </div>
                          <div className="flex items-center gap-2 text-gray-500">
                            <span>{job.company}</span>
                            <span>•</span>
                            <div className="flex items-center">
                              <MapPin className="w-3 h-3 mr-1 text-[#22c55e]" />
                              {job.location}
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1 pt-1">
                            {job.tags.map((tag) => (
                              <Badge
                                key={tag}
                                className="text-xs bg-[#f0fdf4] text-[#22c55e] hover:bg-[#dcfce7] border-[#bbf7d0]"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="font-medium text-[#22c55e]">{job.salary}</div>
                        <div className="text-xs text-gray-500">Posted {job.posted}</div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-gray-600 line-clamp-2">{job.description}</p>
                    </div>
                    <div className="mt-4 p-3 bg-[#f0fdf4] rounded-md">
                      <p className="text-sm">
                        <span className="font-medium text-[#22c55e]">Why we recommend this: </span>
                        {job.recommendationReason}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-4 mt-4 pt-4 border-t">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-[#22c55e]" />
                        <span className="text-sm text-gray-500">{job.type}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" className="border-[#22c55e] text-[#22c55e] hover:bg-[#f0fdf4]">
                          Save
                        </Button>
                        <Button className="bg-[#22c55e] hover:bg-[#16a34a] text-white">Apply Now</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="applied">
            <div className="rounded-lg bg-[#f0fdf4] p-8 text-center shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#dcfce7] text-[#22c55e] mb-4">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium mb-2">No Applications Yet</h3>
              <p className="text-gray-600 mb-4 max-w-md mx-auto">
                You haven't applied to any jobs yet. Start exploring opportunities that match your skills.
              </p>
              <Button className="bg-[#22c55e] hover:bg-[#16a34a] text-white">Browse Jobs</Button>
            </div>
          </TabsContent>

          <TabsContent value="saved">
            <div className="rounded-lg bg-[#f0fdf4] p-8 text-center shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#dcfce7] text-[#22c55e] mb-4">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium mb-2">No Saved Jobs</h3>
              <p className="text-gray-600 mb-4 max-w-md mx-auto">
                You haven't saved any jobs yet. Save jobs you're interested in to apply later.
              </p>
              <Button className="bg-[#22c55e] hover:bg-[#16a34a] text-white">Browse Jobs</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}
