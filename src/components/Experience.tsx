import { Calendar, MapPin, ExternalLink } from 'lucide-react'

const experiences = [
  {
    title: "Senior Technical Lead",
    company: "LMNTO PERFORMANCE INFORMATION TECHNOLOGY",
    location: "Dubai, United Arab Emirates",
    period: "Apr 2022 - Present · 3 yrs 4 mos",
    description: [
      "Drive significant advancements in digital transformation across various sectors, including Web3 and Blockchain technologies",
      "Lead cross-functional teams to execute high-impact digital transformations in IoT and Web3, enhancing operational efficiency",
      "Spearhead the development of innovative architectures, transforming monolithic systems to microservices, resulting in increase in system performance",
      "Successfully orchestrated digital transformations that significantly improved system performance and operational efficiency"
    ],
    technologies: ["Web3", "Blockchain", "IoT", "Microservices", "Digital Transformation", "System Architecture"]
  },
  {
    title: "Technical Lead",
    company: "Bites Worldwide",
    location: "Dubai, United Arab Emirates",
    period: "Jun 2019 - Apr 2022 · 2 yrs 11 mos",
    description: [
      "Directed a cross-functional team to elevate the development and deployment of web and mobile applications",
      "Led a cross-functional team in enhancing web and mobile application development, focusing on DevOps practices",
      "Spearheaded the development of a high-performance trading platform for both Crypto and Forex markets",
      "Implemented streamlined deployment processes, resulting in reduction in time-to-market for new features",
      "Enhanced DevOps practices, resulting in faster deployment cycles and improved team collaboration"
    ],
    technologies: ["Mobile Applications", "Web Development", "DevOps", "Trading Platforms", "Crypto", "Forex"]
  },
  {
    title: "Senior Software Engineer",
    company: "Objects By Design",
    location: "New York (Remote Working)",
    period: "2018 - 2019",
    description: [
      "Focused on innovative solutions for home security and educational applications",
      "Led the development of a mobile app using Flutter, enhancing user experience in online learning",
      "Improved the Google Cloud Client Library for Python, which streamlined data management processes for better performance",
      "Developed a comprehensive Home Security System to enhance user data tracking through advanced analytics and machine learning algorithms"
    ],
    technologies: ["Flutter", "Python", "Google Cloud", "Machine Learning", "Mobile Development", "Security Systems"]
  },
  {
    title: "Software Engineer",
    company: "Wingreens Technologies",
    location: "India",
    period: "2016 - 2018",
    description: [
      "Specialized in Laravel and Django frameworks for robust web application development",
      "Enhanced user experience and ensuring seamless integration across platforms",
      "Developed and maintained web applications using Laravel PHP and Django Python Frameworks, enhancing system efficiency",
      "Designed and implemented RESTful APIs with Django, improving data accessibility and integration",
      "Collaborated with cross-functional teams to deliver high-quality software solutions, contributing to project success"
    ],
    technologies: ["Laravel", "Django", "PHP", "Python", "RESTful APIs", "Web Development"]
  },
  {
    title: "Graduate Trainee",
    company: "Air India",
    location: "Mumbai",
    period: "Jul 2013 - Jul 2013 · 1 mo",
    description: [
      "Professional training at Air India Limited as part of graduate development program",
      "Gained exposure to aviation industry operations and technical systems"
    ],
    technologies: ["Aviation Systems", "Technical Operations"]
  },
  {
    title: "Industrial Trainee",
    company: "Essar Group",
    location: "Daman",
    period: "Jun 2012 - Jul 2012 · 2 mos",
    description: [
      "Industrial training at Essar Group focusing on engineering processes and industrial operations",
      "Hands-on experience with industrial systems and manufacturing processes"
    ],
    technologies: ["Industrial Systems", "Manufacturing", "Engineering Processes"]
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
                <div className="mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      {exp.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                        <span className="text-lg font-semibold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-lg border border-cyan-500/30">
                          {exp.company}
                        </span>
                        <div className="flex items-center gap-2 text-gray-300">
                          <MapPin size={16} className="text-cyan-400" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 bg-gray-800/50 px-3 py-1 rounded-lg border border-gray-600/30">
                        <Calendar size={16} className="text-cyan-400" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    Key Responsibilities & Achievements
                  </h4>
                  <ul className="space-y-3">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start gap-3 leading-relaxed">
                        <span className="text-cyan-400 mt-1.5 text-lg">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    Technologies & Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30 rounded-full text-sm font-medium hover:from-cyan-500/30 hover:to-blue-500/30 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
}
}