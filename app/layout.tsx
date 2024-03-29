import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import ScrollToTopButton from '@/components/scrollbtn'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Regeneration Italia',
  description: 'Regeneration Italia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <link rel="icon" href="/favicon.png" sizes="48x48" />
      <body className={poppins.className + ' overflow-x-hidden'}>{children}
        <ScrollToTopButton></ScrollToTopButton>
      </body>
    </html>
  )
}
