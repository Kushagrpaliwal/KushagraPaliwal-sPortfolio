import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Kushagra Paliwals Portfolio',
  description: 'Explore the portfolio of kushagra paliwal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        </body>
    </html>
  )
}