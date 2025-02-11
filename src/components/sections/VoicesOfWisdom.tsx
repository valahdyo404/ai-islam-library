import { Headphones } from 'lucide-react'

const episodes = [
  {
    title: 'Sheikh Ahmad',
    description: 'Exploring the depths of Islamic spirituality and its relevance in modern times.',
    icon: Headphones,
    href: '/podcasts/sheikh-ahmad',
  },
  {
    title: 'Sheikh Hassan',
    description: 'Understanding the practical application of Islamic principles in daily life.',
    icon: Headphones,
    href: '/podcasts/sheikh-hassan',
  },
  {
    title: 'Sheikh Omar',
    description: 'Discussing contemporary challenges and Islamic solutions.',
    icon: Headphones,
    href: '/podcasts/sheikh-omar',
  },
  {
    title: 'Sheikh Muhammad',
    description: 'Insights into the prophetic methodology and its timeless wisdom.',
    icon: Headphones,
    href: '/podcasts/sheikh-muhammad',
  },
  {
    title: 'Sheikh Abdullah',
    description: 'Exploring the beauty of Islamic ethics and character development.',
    icon: Headphones,
    href: '/podcasts/sheikh-abdullah',
  },
]

export function VoicesOfWisdom() {
  return (
    <div className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-islamic-green sm:text-4xl">
            Voices of Wisdom
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Listen to inspiring talks from renowned Islamic scholars
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-5">
            {episodes.map((episode) => (
              <div
                key={episode.title}
                className="flex flex-col items-center text-center bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-islamic-green">
                  <episode.icon className="h-8 w-8 flex-none text-islamic-gold" aria-hidden="true" />
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7">
                  <h3 className="text-lg font-semibold text-islamic-green">{episode.title}</h3>
                  <p className="flex-auto text-sm text-gray-600 mt-2">{episode.description}</p>
                  <p className="mt-6">
                    <a
                      href={episode.href}
                      className="text-sm font-semibold leading-6 text-islamic-green hover:text-islamic-green/80"
                    >
                      Listen now <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-16 text-center">
            <a
              href="/podcasts"
              className="rounded-md bg-islamic-green px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-islamic-green/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-islamic-green"
            >
              View All Episodes
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 