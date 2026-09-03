const skillCategories = [
  {
    title: 'Infrastructure & Cloud',
    skills: [
      { name: 'Terraform', level: 96 },
      { name: 'Ansible', level: 94 },
      { name: 'Kubernetes', level: 95 },
      { name: 'ArgoCD', level: 92 },
      { name: 'AWS', level: 90 },
      { name: 'Cloudflare', level: 89 }
    ]
  },
  {
    title: 'CI/CD & Automation',
    skills: [
      { name: 'Bitbucket Pipelines', level: 94 },
      { name: 'GitHub Actions', level: 90 },
      { name: 'Jenkins', level: 88 },
      { name: 'Git', level: 96 },
      { name: 'Bash', level: 88 },
      { name: 'GitOps', level: 92 }
    ]
  },
  {
    title: 'AI / LLM Engineering',
    skills: [
      { name: 'LLM Engineering', level: 88 },
      { name: 'Agentic AI', level: 89 },
      { name: 'RAG', level: 87 },
      { name: 'Agentic RAG', level: 85 },
      { name: 'QLoRA', level: 84 },
      { name: 'AI Automation', level: 86 },
      { name: 'GitHub Copilot', level: 90 }
    ]
  },
  {
    title: 'Languages & Frameworks',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'Go', level: 82 },
      { name: 'TypeScript', level: 88 },
      { name: 'JavaScript', level: 88 },
      { name: 'Django', level: 90 },
      { name: 'NestJS / Next.js', level: 86 }
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Skills & Technologies
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg p-8 border border-cyan-500/20">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  {category.title}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-white">{skill.name}</span>
                        <span className="text-sm text-cyan-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-600 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
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