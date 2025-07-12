const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Vue.js", level: 85 },
      { name: "Angular", level: 80 },
      { name: "Tailwind CSS", level: 92 }
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "Java", level: 80 },
      { name: "Express.js", level: 88 },
      { name: "FastAPI", level: 82 },
      { name: "GraphQL", level: 75 }
    ]
  },
  {
    title: "Database & Cloud",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 80 },
      { name: "AWS", level: 85 },
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 75 }
    ]
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", level: 95 },
      { name: "Jenkins", level: 80 },
      { name: "Jest", level: 85 },
      { name: "Figma", level: 70 },
      { name: "Jira", level: 85 },
      { name: "Agile/Scrum", level: 90 }
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Skills & Technologies
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
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