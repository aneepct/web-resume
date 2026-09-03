import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://aneep-tandel.vercel.app'),
  title: 'Aneep Tandel | Senior Platform Engineer | DevOps & Cloud Infrastructure',
  description:
    'Aneep Tandel is a Senior Platform Engineer and DevOps specialist with 10+ years experience in Kubernetes, Terraform, Ansible, ArgoCD, AWS, Cloudflare, and AI-driven infrastructure automation in UAE.',
  keywords: [
    'Aneep Tandel',
    'Senior Platform Engineer',
    'DevOps Engineer',
    'Cloud Infrastructure',
    'Kubernetes Engineer',
    'Terraform',
    'Ansible',
    'ArgoCD',
    'AWS',
    'Platform Engineer Germany',
    'DevOps UAE',
    'Infrastructure Engineer',
    'AI Infrastructure',
  ],
  authors: [{ name: 'Aneep Tandel' }],
  creator: 'Aneep Tandel',
  publisher: 'Aneep Tandel',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Aneep Tandel | Senior Platform Engineer',
    description:
      'Platform and infrastructure engineer specializing in Kubernetes, Terraform, GitOps, CI/CD, cloud-native architecture, and AI-driven automation.',
    url: 'https://aneep-tandel.vercel.app',
    siteName: 'Aneep Tandel',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aneep Tandel | Senior Platform Engineer',
    description:
      'Senior Platform Engineer and DevOps specialist with expertise in Kubernetes, AWS, Terraform, Ansible, and AI infrastructure.',
    creator: '@aneepct',
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