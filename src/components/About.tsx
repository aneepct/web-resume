export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Professional Summary
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Platform and infrastructure engineer with 10+ years building, automating, and operating the systems development teams ship on. I work hands-on across infrastructure as code, Kubernetes orchestration, CI/CD automation, and cloud platform reliability.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                My experience spans AWS, DigitalOcean, Vercel, VMware vCenter, Cloudflare, Nginx, PostgreSQL, and hybrid on-prem/cloud architectures. I’ve progressed from Linux and web server administration into cloud-native platform design, event-driven systems, serverless applications, and Agentic AI integrations.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I also lead distributed engineering teams across time zones, hire and mentor talent, and drive modernization from monolithic systems to microservices, GitOps, and AI-assisted development workflows.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-lg border border-cyan-500/20">
                <h4 className="font-semibold text-white mb-2">Years of Experience</h4>
                <p className="text-3xl font-bold text-cyan-400">10+</p>
              </div>

              <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-lg border border-cyan-500/20">
                <h4 className="font-semibold text-white mb-2">Cloud & Platform Focus</h4>
                <p className="text-3xl font-bold text-cyan-400">AWS + K8s</p>
              </div>

              <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-lg border border-cyan-500/20">
                <h4 className="font-semibold text-white mb-2">AI Engineering</h4>
                <p className="text-3xl font-bold text-cyan-400">Agentic AI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}