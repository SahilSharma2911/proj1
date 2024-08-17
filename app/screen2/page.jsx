import React from "react";
import Hero from "./Hero";
import ProblemStatement from "./ProblemStatement";
import Solution from "./Solution";
import StepByStep from "./StepByStep";
import Vedio from "./Vedio";
import Testimonial from "./Testimonial";
import BuyNow from "./BuyNow";
import Faq from "@/components/Home/Faq";

const page = () => {
  return (
    <main>
      <Hero />
      <ProblemStatement />
      <Solution />
      <StepByStep />
      <Vedio />
      <Testimonial />
      <BuyNow/>
      <Faq/>
    </main>
  );
};

export default page;
