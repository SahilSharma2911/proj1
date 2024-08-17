import React from 'react'
import Hero from './Hero'
import ProblemStatement from '../screen2/ProblemStatement'
import Solution from '../screen2/Solution'
import StepByStep from '../screen2/StepByStep'
import Vedio from '../screen2/Vedio'
import Testimonial from '../screen2/Testimonial'
import BuyNow from '../screen2/BuyNow'
import Faq from '@/components/Home/Faq'

const page = () => {
  return (
    <main>
      <Hero/>
      <ProblemStatement />
      <Solution />
      <StepByStep />
      <Vedio />
      <Testimonial />
      <BuyNow/>
      <Faq/>
    </main>
  )
}

export default page
