import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aneep Tandel - Senior Software Engineer',
  description: 'IT Tech Lead with expertise in cloud-native architectures, driving scalable solutions and innovation, delivering Web3 & Blockchain solutions, leading with cross-functional expertise',
  keywords: 'software engineer, full-stack developer, react, node.js, aws, dubai, uae',
  authors: [{ name: 'Aneep Tandel' }],
  openGraph: {
    title: 'Aneep Tandel - Senior Software Engineer',
    description: 'Professional resume and portfolio of Aneep Tandel',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}