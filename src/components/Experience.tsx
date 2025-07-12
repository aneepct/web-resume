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
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Professional Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg shadow-lg border border-cyan-500/20 p-8 hover:shadow-xl hover:border-cyan-400/40 transition-all">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-4 text-gray-300 mb-2">
                      <span className="font-medium text-cyan-400">{exp.company}</span>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start gap-2">
                      <span className="text-cyan-400 mt-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30 rounded-full text-sm font-medium"
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