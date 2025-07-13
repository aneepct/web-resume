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
                I am a dedicated software engineer with extensive experience in developing 
                robust, scalable applications. My passion lies in solving complex problems 
                and creating innovative solutions that make a real impact.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Throughout my career, I have worked with diverse technologies and frameworks, 
                always staying current with industry trends and best practices. I believe in 
                writing clean, maintainable code and fostering collaborative team environments.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, I enjoy exploring new technologies, contributing to 
                open-source projects, and mentoring junior developers.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-lg border border-cyan-500/20">
                <h4 className="font-semibold text-white mb-2">Years of Experience</h4>
                <p className="text-3xl font-bold text-cyan-400">10+</p>
              </div>
              
              <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-lg border border-cyan-500/20">
                <h4 className="font-semibold text-white mb-2">Projects Completed</h4>
                <p className="text-3xl font-bold text-cyan-400">50+</p>
              </div>
              
              <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-lg border border-cyan-500/20">
                <h4 className="font-semibold text-white mb-2">Technologies Mastered</h4>
                <p className="text-3xl font-bold text-cyan-400">20+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}