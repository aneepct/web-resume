import { GraduationCap, Award, Calendar } from 'lucide-react'

const education = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "University of Technology",
    location: "Mumbai, India",
    period: "2014 - 2018",
    grade: "First Class with Distinction",
    description: "Specialized in software engineering, algorithms, and data structures. Active member of the coding club and participated in various hackathons."
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "Science College",
    location: "Mumbai, India", 
    period: "2012 - 2014",
    grade: "92%",
    description: "Focused on Mathematics, Physics, and Computer Science. Secured top 5% ranking in state board examinations."
  }
]

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-SAA-123456"
  },
  {
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2022",
    credentialId: "GCP-PD-789012"
  },
  {
    name: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "2022",
    credentialId: "CKA-345678"
  },
  {
    name: "MongoDB Certified Developer",
    issuer: "MongoDB Inc.",
    date: "2021",
    credentialId: "MDB-DEV-901234"
  }
]

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Education & Certifications
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                <GraduationCap className="text-cyan-400" size={28} />
                Education
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg shadow-lg border border-cyan-500/20 p-6">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {edu.degree}
                    </h4>
                    <div className="text-cyan-400 font-medium mb-2">
                      {edu.institution}
                    </div>
                    <div className="flex items-center gap-4 text-gray-300 mb-3">
                      <span>{edu.location}</span>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    <div className="text-green-400 font-medium mb-3">
                      Grade: {edu.grade}
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                <Award className="text-cyan-400" size={28} />
                Certifications
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg shadow-lg border border-cyan-500/20 p-6">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {cert.name}
                    </h4>
                    <div className="text-cyan-400 font-medium mb-2">
                      {cert.issuer}
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-300">
                      <span>Issued: {cert.date}</span>
                      <span className="font-mono text-xs bg-gray-700 text-cyan-300 px-2 py-1 rounded">
                        {cert.credentialId}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}