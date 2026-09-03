'use client'

import { useState } from 'react'
import { GraduationCap, Award, Calendar, X } from 'lucide-react'

const education = [
  {
    degree: 'Bachelor of Technology, Aerospace Engineering',
    institution: 'IGNOU, New Delhi, India',
    period: '2010 – 2014'
  },
  {
    degree: 'Diploma, Electronics and Telecommunication Engineering',
    institution: 'IETE, New Delhi, India',
    period: '2006 – 2009'
  }
]

const certifications = [
  {
    name: 'AI Engineer',
    issuer: 'LLM Engineering, Agentic AI, RAG, QLoRA',
    date: '2026',
    image: 'https://object.aneep.tech/public/AI_Engineer.png',
    details: 'Focus areas: LLM engineering, agentic AI workflows, retrieval-augmented generation, QLoRA fine-tuning, and AI-assisted product delivery.'
  },
  {
    name: 'Terraform Associate',
    issuer: 'HashiCorp / Terraform',
    date: '2026',
    image: 'https://object.aneep.tech/public/Terraform_Associate.png',
    details: 'Infrastructure as Code proficiency covering Terraform workflows, state management, resource provisioning, and cloud automation.'
  }
]

export default function Education() {
  const [selectedCert, setSelectedCert] = useState<(typeof certifications)[number] | null>(null)

  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Education & Certifications
        </h2>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-cyan-400" size={28} />
              Education
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg shadow-lg border border-cyan-500/20 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <GraduationCap className="text-cyan-400" size={24} />
                    <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                  </div>
                  <div className="text-cyan-400 font-medium mb-2">{edu.institution}</div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar size={16} />
                    <span>{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <Award className="text-cyan-400" size={28} />
              Certifications
            </h3>

            <div className="space-y-5">
              {certifications.map((cert, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className="w-full text-left bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg shadow-lg border border-cyan-500/20 p-6 hover:border-cyan-400/40 transition-all"
                >
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h4 className="text-lg font-semibold text-white">{cert.name}</h4>
                    <span className="text-xs font-medium text-cyan-300 bg-cyan-500/10 px-2 py-1 rounded-full border border-cyan-500/20">
                      {cert.date}
                    </span>
                  </div>
                  <div className="text-cyan-400 font-medium mb-2">{cert.issuer}</div>
                  <p className="text-gray-300 leading-relaxed">{cert.details}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative w-full max-w-5xl rounded-2xl border border-cyan-500/30 bg-gray-900 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-cyan-500/20 px-5 py-4">
              <div>
                <h4 className="text-xl font-semibold text-white">{selectedCert.name}</h4>
                <p className="text-sm text-cyan-300">{selectedCert.issuer}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="rounded-full border border-gray-600 p-2 text-gray-300 transition hover:border-cyan-400 hover:text-white"
                aria-label="Close certificate viewer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-4">
              <img
                src={selectedCert.image}
                alt={selectedCert.name}
                className="max-h-[70vh] w-full rounded-xl border border-gray-700 bg-white object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}