import { ArrowDown, Download, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Aneep Tandel
            </h1>
            <h2 className="text-2xl lg:text-3xl text-blue-600 mb-6 font-medium">
              Senior Software Engineer
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Passionate software engineer with expertise in full-stack development, 
              cloud technologies, and building scalable applications that drive business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                <Download size={20} />
                Download Resume
              </button>
              <a 
                href="#contact" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Get In Touch
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>+971-XX-XXX-XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>aneep.tandel@email.com</span>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <a 
                href="https://ae.linkedin.com/in/aneep-tandel-393b3660" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-blue-600 hover:text-blue-700"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="#" 
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-gray-900"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center text-white text-8xl font-bold shadow-2xl">
              AT
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <ArrowDown className="mx-auto text-gray-400 animate-bounce" size={32} />
        </div>
      </div>
    </section>
  )
}