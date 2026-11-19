import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

const title = 'Awlad - Senior Ruby on Rails Engineer & Technical Lead'
const description =
  'Senior Ruby on Rails engineer helping businesses build, maintain, and modernize reliable web applications. Available for remote projects and long-term partnerships.'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.awlad.dev'),
  title,
  description,
  alternates: { canonical: '/' },
  openGraph: { title, description, url: 'https://www.awlad.dev', type: 'website', images: ['/awlad.jpeg'] },
  twitter: { card: 'summary', title, description, images: ['/awlad.jpeg'] },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Md Awlad Hossain',
  alternateName: 'Awlad',
  jobTitle: 'Senior Ruby on Rails Engineer & Technical Lead',
  url: 'https://www.awlad.dev',
  sameAs: ['https://www.linkedin.com/in/litonawlad', 'https://github.com/awlad'],
  knowsAbout: ['Ruby on Rails', 'React', 'PostgreSQL', 'Supabase'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  )
}
