import { ArrowDown, Download, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-20 pb-16 ai-gradient relative overflow-hidden">
      {/* Neural network background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-10 w-2 h-2 bg-purple-300 rounded-full animate-ping"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Aneep Tandel
            </h1>
            <h2 className="text-2xl lg:text-3xl text-cyan-400 mb-6 font-medium">
              Senior Software Engineer
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Passionate software engineer with expertise in full-stack development, 
              cloud technologies, and building scalable applications that drive business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all ai-glow flex items-center justify-center gap-2">
                <Download size={20} />
                Download Resume
              </button>
              <a 
                href="#contact" 
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-colors flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Get In Touch
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Dubai, UAE</span>
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

            <div className="flex gap-4 mt-6">
              <a 
                href="https://ae.linkedin.com/in/aneep-tandel-393b3660" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all text-cyan-400 hover:text-cyan-300 hover:bg-white/20"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="#" 
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