import { Inter } from 'next/font/google'
import './globals.css'
import AuthContext from '@/provider/AuthContext'
import NextAuthProvider from '@/provider/NextAuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'hr-vortex',
  description: 'hr management system',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <div className='min-h-screen'>
          <AuthContext>
            <NextAuthProvider >
              {children}
            </NextAuthProvider>
          </AuthContext>
        </div>
      </body>
    </html>
  )
}
