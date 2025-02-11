import { useState } from 'react'
import { Menu, X, Search } from 'lucide-react'
import logoImage from '../../assets/Logoipsum.png'

const libraryMenu = {
  categories: [
    {
      name: 'Answering Criticism',
      href: '/library/criticism',
      subcategories: [
        {
          name: 'The Authenticity',
          items: ['Quran', 'Hadist']
        },
        {
          name: 'The Science',
          items: ['Quran', 'Hadist']
        },
        {
          name: 'The Logic & Rationality',
          href: '/library/criticism/logic'
        },
        {
          name: 'The Controversial Verses',
          href: '/library/criticism/verses'
        },
        {
          name: 'The Historical Events',
          href: '/library/criticism/history'
        },
        {
          name: 'The Morality of Islam',
          href: '/library/criticism/morality'
        }
      ]
    }
  ]
}

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Library', href: '/library', hasDropdown: true },
    { name: 'Ask a Scholar', href: '/ask-scholar' },
    { name: 'About', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ]
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLibraryOpen, setIsLibraryOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      <div className="absolute inset-0 bg-hero-green/95 backdrop-blur-2xl" />
      <nav className="relative mx-auto flex items-center justify-between py-5 px-8" aria-label="Global">
        <div className="flex items-center gap-16">
          <a href="/" className="flex items-center">
            <img src={logoImage} alt="Logo" className="h-8 w-auto" />
          </a>
          
          <div className="hidden lg:flex items-center gap-8">
            {navigation.main.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="text-white hover:text-islamic-gold/90 text-[15px] font-medium font-poppins flex items-center gap-1.5"
                  onMouseEnter={() => item.hasDropdown && setIsLibraryOpen(true)}
                  onMouseLeave={() => item.hasDropdown && setIsLibraryOpen(false)}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <svg className="w-4 h-4 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </a>
                {item.hasDropdown && isLibraryOpen && (
                  <div 
                    className="absolute left-0 mt-2 w-screen max-w-md bg-white/95 backdrop-blur-md rounded-lg shadow-lg py-4"
                    onMouseEnter={() => setIsLibraryOpen(true)}
                    onMouseLeave={() => setIsLibraryOpen(false)}
                  >
                    {libraryMenu.categories.map((category) => (
                      <div key={category.name} className="px-4">
                        <div className="bg-gray-100/80 rounded-lg p-3 mb-2">
                          <a href={category.href} className="text-hero-green font-medium">
                            {category.name}
                          </a>
                        </div>
                        <div className="space-y-4 pl-8">
                          {category.subcategories.map((subcategory) => (
                            <div key={subcategory.name}>
                              <div className="flex items-center gap-2">
                                <span className="text-hero-green font-medium">{subcategory.name}</span>
                                {subcategory.items && (
                                  <ul className="flex gap-4 ml-4">
                                    {subcategory.items.map((item) => (
                                      <li key={item}>
                                        <a href="#" className="text-gray-600 hover:text-hero-green">
                                          • {item}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center">
                <Search className="h-4 w-4 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="search"
                placeholder="Search..."
                className="w-[280px] rounded-full bg-white py-2.5 pl-11 pr-4 text-sm font-poppins text-hero-green placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-islamic-gold border-0"
              />
            </div>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5 text-islamic-gold"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-hero-green/95 backdrop-blur-lg px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="flex items-center">
                <img src={logoImage} alt="Logo" className="h-8 w-auto" />
              </a>
              <button
                type="button"
                className="rounded-md p-2.5 text-islamic-gold"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.main.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-base font-poppins font-medium text-white hover:bg-islamic-gold/10"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
} 