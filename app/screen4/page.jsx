import React from 'react'
import Hero from './Hero'
import Testimonial from '../screen2/Testimonial'
import Testimonials from '@/components/Home/Testimonials'
import StepByStepPinRecovery from './StepByStepPinRecovery'
import BuyNow from '../screen2/BuyNow'
import Faq from '@/components/Home/Faq'

const page = () => {
  return (
    <main>
      <Hero/>
      <Testimonials/>
      <StepByStepPinRecovery/>
      <BuyNow/>
      <Faq/>
    </main>
  )
}

export default page
