import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

const navigation = {
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: Facebook,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: Twitter,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: Instagram,
    },
    {
      name: 'YouTube',
      href: '#',
      icon: Youtube,
    },
  ],
  main: [
    { name: 'Terms & Privacy', href: '/terms' },
    { name: 'Social Media', href: '/social' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-islamic-green">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:py-16 lg:px-8">
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <a key={item.name} href={item.href} className="text-islamic-gold hover:text-islamic-gold/80">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <nav className="mt-8 flex justify-center space-x-10" aria-label="Footer">
          {navigation.main.map((item) => (
            <a key={item.name} href={item.href} className="text-sm leading-6 text-islamic-gold hover:text-islamic-gold/80">
              {item.name}
            </a>
          ))}
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-islamic-gold">
          &copy; {new Date().getFullYear()} AI Islam Project. All rights reserved.
        </p>
      </div>
    </footer>
  )
} 