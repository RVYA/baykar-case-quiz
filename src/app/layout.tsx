import "./globals.css"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Baykar Case - Quiz App",
  description: "Quiz app programmed for Baykar FE application",
}

interface RootProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
