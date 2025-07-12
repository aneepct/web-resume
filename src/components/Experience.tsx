import { Calendar, MapPin, ExternalLink } from 'lucide-react'

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    location: "Dubai, UAE",
    period: "2022 - Present",
    description: [
      "Led development of microservices architecture serving 1M+ users",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Mentored junior developers and conducted code reviews",
      "Collaborated with cross-functional teams to deliver high-quality solutions"
    ],
    technologies: ["React", "Node.js", "AWS", "Docker", "Kubernetes"]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Innovations Ltd.",
    location: "Dubai, UAE",
    period: "2020 - 2022",
    description: [
      "Developed and maintained web applications using modern frameworks",
      "Optimized database queries improving performance by 40%",
      "Integrated third-party APIs and payment gateways",
      "Participated in agile development processes"
    ],
    technologies: ["Vue.js", "Python", "PostgreSQL", "Redis", "GCP"]
  },
  {
    title: "Software Developer",
    company: "StartupTech",
    location: "Mumbai, India",
    period: "2018 - 2020",
    description: [
      "Built responsive web applications from scratch",
      "Implemented automated testing reducing bugs by 50%",
      "Worked closely with designers to create pixel-perfect UIs",
      "Contributed to technical documentation and best practices"
    ],
    technologies: ["Angular", "Java", "MySQL", "Jenkins", "Azure"]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Professional Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-4 text-gray-600 mb-2">
                      <span className="font-medium text-blue-600">{exp.company}</span>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-gray-600 flex items-start gap-2">
                      <span className="text-blue-600 mt-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}