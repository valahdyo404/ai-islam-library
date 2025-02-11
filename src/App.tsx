import { Layout } from './components/layout/Layout'
import { Hero } from './components/sections/Hero'
import { Library } from './components/sections/Library'
import { VideoSection } from './components/sections/VideoSection'
import { VoicesOfWisdom } from './components/sections/VoicesOfWisdom'
import { FAQ } from './components/sections/FAQ'

export default function App() {
  return (
    <Layout>
      <Hero />
      <Library />
      <VideoSection />
      <VoicesOfWisdom />
      <FAQ />
    </Layout>
  )
}
