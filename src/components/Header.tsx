import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Aneep Tandel
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors">
              Experience
            </Link>
            <Link href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">
              Skills
            </Link>
            <Link href="#education" className="text-gray-600 hover:text-blue-600 transition-colors">
              Education
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}