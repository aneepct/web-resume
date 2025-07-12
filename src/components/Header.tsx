import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-sm shadow-lg border-b border-cyan-500/20 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            Aneep Tandel
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link href="#experience" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Experience
            </Link>
            <Link href="#skills" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Skills
            </Link>
            <Link href="#education" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Education
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}