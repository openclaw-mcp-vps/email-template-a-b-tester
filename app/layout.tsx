import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Email Template A/B Tester — Optimize Every Campaign',
  description: 'A/B test email templates across multiple campaigns. Statistical significance analysis for email marketers, e-commerce stores, and newsletter creators.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9ecf4ab1-9db2-42b5-9152-d5f47950e0ff"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
