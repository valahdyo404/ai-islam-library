import { Book, Heart, History, Lightbulb, MessageCircle, Star, ScrollText, Users } from 'lucide-react'

const categories = [
  {
    title: 'Answering Criticism',
    description: 'Address common misconceptions and criticisms with knowledge and wisdom.',
    icon: MessageCircle,
    href: '/library/criticism',
  },
  {
    title: 'Tafsir',
    description: 'Deep insights into the meanings of the Quran.',
    icon: Book,
    href: '/library/tafsir',
  },
  {
    title: 'The Beauty of Islam',
    description: 'Discover the aesthetic and spiritual beauty of Islamic teachings.',
    icon: Heart,
    href: '/library/beauty',
  },
  {
    title: "Prophet's Beauty (PBUH)",
    description: "Learn about the character and teachings of Prophet Muhammad (PBUH).",
    icon: Star,
    href: '/library/prophet',
  },
  {
    title: 'Islamic History',
    description: 'Explore the rich history of Islamic civilization.',
    icon: History,
    href: '/library/history',
  },
  {
    title: 'Challenges for Muslims',
    description: 'Navigate contemporary challenges with Islamic guidance.',
    icon: Lightbulb,
    href: '/library/challenges',
  },
  {
    title: 'Why Islam is The Truth',
    description: 'Logical and rational proofs for Islamic beliefs.',
    icon: ScrollText,
    href: '/library/truth',
  },
  {
    title: 'Pillars of Faith',
    description: 'Understanding the fundamental beliefs of Islam.',
    icon: Users,
    href: '/library/pillars',
  },
]

export function Library() {
  return (
    <div className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-islamic-green sm:text-4xl">Library</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Comprehensive resources for understanding Islam
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {categories.map((category) => (
              <div key={category.title} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-islamic-green">
                  <category.icon className="h-5 w-5 flex-none text-islamic-gold" aria-hidden="true" />
                  {category.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{category.description}</p>
                  <p className="mt-6">
                    <a href={category.href} className="text-sm font-semibold leading-6 text-islamic-green">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 