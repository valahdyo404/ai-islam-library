import { Play } from 'lucide-react'

const videos = [
  {
    title: 'Marriage Encouragement',
    description: 'Understanding the importance of marriage in Islam.',
    thumbnail: 'https://placehold.co/600x400/0B4619/D4AF37/png?text=Marriage+in+Islam',
    href: '/videos/marriage',
  },
  {
    title: 'Charity And Donation',
    description: 'The virtues and benefits of giving in Islam.',
    thumbnail: 'https://placehold.co/600x400/0B4619/D4AF37/png?text=Charity+in+Islam',
    href: '/videos/charity',
  },
  {
    title: 'Pre-Marriage Marriage',
    description: 'Guidelines for preparing for marriage in Islam.',
    thumbnail: 'https://placehold.co/600x400/0B4619/D4AF37/png?text=Pre+Marriage+Guidance',
    href: '/videos/pre-marriage',
  },
]

export function VideoSection() {
  return (
    <div className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-islamic-green sm:text-4xl">
            Engage with insightful videos that bring Islamic teachings, history, and stories to life.
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {videos.map((video) => (
            <article key={video.title} className="flex flex-col items-start">
              <div className="relative w-full">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    type="button"
                    className="rounded-full bg-islamic-green/90 p-3 text-white shadow-sm hover:bg-islamic-green/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-islamic-green"
                  >
                    <Play className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime="2023-03-16" className="text-gray-500">
                    Mar 16, 2023
                  </time>
                  <a
                    href={video.href}
                    className="relative rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    Islamic Guidance
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-islamic-green">
                    <a href={video.href}>
                      <span className="absolute inset-0" />
                      {video.title}
                    </a>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">{video.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
} 