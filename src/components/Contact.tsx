'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react'

const initialFormState = {
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
}

export default function Contact() {
  const [formData, setFormData] = useState(initialFormState)

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = event.target
    setFormData((previous) => ({
      ...previous,
      [id]: value,
    }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const fullName = [formData.firstName, formData.lastName].filter(Boolean).join(' ') || 'Hello'
    const subject = formData.subject || 'Project Enquiry'
    const body = [
      `Hi Aneep,`,
      '',
      `My name is ${fullName}.`,
      formData.email ? `Email: ${formData.email}` : '',
      '',
      'Message:',
      formData.message || 'I would like to connect regarding an opportunity.',
    ]
      .filter(Boolean)
      .join('\n')

    window.location.href = `mailto:aneepct@live.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Get In Touch
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Let&apos;s Connect
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I&apos;m open to platform engineering, DevOps, cloud infrastructure, and AI/automation opportunities in Germany. If you&apos;re building resilient systems or exploring cloud-native transformations, I&apos;d be glad to connect.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center">
                    <Mail className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-gray-300">aneepct@live.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center">
                    <Phone className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Phone</h4>
                    <p className="text-gray-300">+49 163 6587002</p>
                    <p className="text-gray-400 text-sm mt-1">UAE: +971-58-995-7670</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center">
                    <MapPin className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Location</h4>
                    <p className="text-gray-300">Germany</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-cyan-300">
                Work Authorization: Germany Opportunity Card (Chancenkarte)
              </div>
              <div className="mt-2 text-cyan-300">
                UAE Golden Visa
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/aneep-tandel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg flex items-center justify-center hover:from-cyan-600 hover:to-blue-700 transition-all ai-glow"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="https://github.com/aneepct"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-lg flex items-center justify-center hover:from-gray-600 hover:to-gray-500 transition-all"
                  >
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Send a Message
              </h3>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Aneep"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Tandel"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="aneep.tandel@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Project Collaboration"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all ai-glow flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-cyan-500/20">
        <div className="text-center text-gray-400">
          <p>&copy; 2026 Aneep Tandel. All rights reserved.</p>
        </div>
      </footer>
    </section>
  )
}