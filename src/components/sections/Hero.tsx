export function Hero() {
  return (
    <div className="relative overflow-hidden bg-hero-green min-h-[calc(100vh-4rem)]">
      {/* Mosque background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/mosque-pattern.png')] opacity-10 bg-repeat" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-hero-green/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <h1 className="text-4xl font-bold tracking-tight text-islamic-gold sm:text-6xl font-arvo mb-4">
            Religion & Reason
          </h1>
          <h2 className="text-3xl font-bold text-white mb-6 font-arvo">
            Where Faith Meets Understanding
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300 mb-8 max-w-xl">
            Uncover the harmony between belief and intellect. Explore the depths of Islam with clarity, wisdom, and reasoned insights
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="/library"
              className="rounded-full bg-islamic-gold px-8 py-3 text-base font-semibold text-hero-green shadow-sm hover:bg-islamic-gold/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-islamic-gold flex items-center gap-2 transition-colors"
            >
              Discover Library
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="relative w-[32rem] h-[32rem]">
              {/* Diamond shape container */}
              <div className="absolute inset-0" style={{ 
                clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                background: '#FFF',
                border: '8px solid #D4AF37'
              }}>
                {/* Inner diamond border */}
                <div className="absolute inset-2 border-4 border-islamic-gold" style={{ 
                  clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
                }} />
                {/* Image container */}
                <div className="absolute inset-4">
                  <div className="h-full w-full bg-islamic-green/10 flex items-center justify-center" style={{ 
                    clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
                  }}>
                    <button className="rounded-full bg-islamic-gold/90 p-4 text-hero-green hover:bg-islamic-gold focus:outline-none focus:ring-2 focus:ring-islamic-gold transition-colors">
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl">
        <div
          className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-islamic-gold to-hero-green opacity-25"
          style={{
            clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
        />
      </div>
    </div>
  )
} 