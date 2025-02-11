import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: 'What is the purpose of this project?',
    answer: 'Our project aims to leverage AI and technology to serve the Muslim Ummah by providing accessible, authentic Islamic knowledge and resources in a modern digital format.',
  },
  {
    question: 'How often is content updated?',
    answer: 'We regularly update our content with new articles, videos, and podcasts. Our team of scholars and content creators work diligently to provide fresh, relevant material.',
  },
  {
    question: 'What is the Islamic ruling on using AI?',
    answer: 'AI, like any technology, is a tool whose permissibility depends on its use. When used to benefit humanity and spread beneficial knowledge while adhering to Islamic principles, it is permissible.',
  },
  {
    question: 'Are the scholars featured on the platform qualified?',
    answer: 'Yes, all scholars featured on our platform are thoroughly vetted and have received traditional Islamic education from recognized institutions.',
  },
  {
    question: 'Can I submit questions to Islamic scholars?',
    answer: 'Yes, you can submit your questions through our platform. Our qualified scholars will review and answer them according to Islamic teachings.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-islamic-green text-center mb-10">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="pt-6">
                <dt>
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="flex w-full items-start justify-between text-left text-gray-900"
                  >
                    <span className="text-base font-semibold leading-7">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <ChevronDown
                        className={`h-6 w-6 transform text-islamic-green ${
                          openIndex === index ? 'rotate-180' : ''
                        } transition-transform duration-200`}
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </dt>
                {openIndex === index && (
                  <dd className="mt-2 pr-12">
                    <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 