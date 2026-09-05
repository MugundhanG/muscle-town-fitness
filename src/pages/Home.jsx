import { useSeo } from '../hooks/useSeo'
import Hero from '../components/sections/Hero'
import TrustBar from '../components/sections/TrustBar'
import ServicesOverview from '../components/sections/ServicesOverview'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import ProcessSteps from '../components/sections/ProcessSteps'
import MembershipPreview from '../components/sections/MembershipPreview'
import GalleryPreview from '../components/sections/GalleryPreview'
import TestimonialsPreview from '../components/sections/TestimonialsPreview'
import FaqPreview from '../components/sections/FaqPreview'
import LocationCta from '../components/sections/LocationCta'

export default function Home() {
  useSeo({
    title: 'Gym & Fitness Studio in Mandaveli, Chennai',
    description: 'Muscle Town Fitness Studio offers strength training, personal coaching, group classes and nutrition guidance in Mandaveli, Chennai. Book your free trial session today.',
  })

  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <WhyChooseUs />
      <ProcessSteps />
      <MembershipPreview />
      <GalleryPreview />
      <TestimonialsPreview />
      <FaqPreview />
      <LocationCta />
    </>
  )
}
