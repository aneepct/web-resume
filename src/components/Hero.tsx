'use client'

import { ArrowDown, Download, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'

export default function Hero() {
  const handleContactClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="pt-20 pb-16 ai-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
        <div className="absolute top-10 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-10 w-2 h-2 bg-purple-300 rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Aneep Tandel
            </h1>
            <h2 className="text-2xl lg:text-3xl text-cyan-400 mb-6 font-medium">
              Senior Platform Engineer | DevOps & Cloud Infrastructure
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Platform and infrastructure engineer with 10+ years building, automating, and operating the systems development teams ship on. Specializing in Kubernetes, Terraform, Ansible, ArgoCD, CI/CD, cloud-native platforms, and AI-driven infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="https://object.aneep.tech/public/Aneep_Tandel_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all ai-glow flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download size={20} />
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={handleContactClick}
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail size={20} />
                Get In Touch
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Germany | United Arab Emirates</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>+49 163 6587002</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>+971-58-995-7670</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>aneepct@live.com</span>
              </div>
            </div>

            <div className="mt-4 text-sm text-cyan-300">
              Work Authorization: Germany Opportunity Card (Chancenkarte)
            </div>
            <div className="mt-2 text-sm text-cyan-300">
              UAE Golden Visa
            </div>

            <div className="flex gap-4 mt-6">
              <a
                href="https://www.linkedin.com/in/aneep-tandel/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all text-cyan-400 hover:text-cyan-300 hover:bg-white/20"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/aneepct"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all text-gray-300 hover:text-white hover:bg-white/20"
              >
                <Github size={24} />
              </a>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="w-80 h-80 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-8xl font-bold shadow-2xl ai-glow">
              AT
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <ArrowDown className="mx-auto text-cyan-400 animate-bounce" size={32} />
        </div>
      </div>
    </section>
  )
}