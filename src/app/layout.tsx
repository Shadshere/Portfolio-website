import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Amirul Arshad - Portfolio',
  description: 'A passionate and motivated third-year Bachelor of Information Technology student at Universiti Selangor (UNISEL), currently undergoing internship in the final semester.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
