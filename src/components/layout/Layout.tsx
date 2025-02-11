import { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
} 