import Hero from "../Components/Hero";
import Feature from "../Components/FeatureHabbits";
import HowItWorks from "../Components/HowItWork";
import CallToAction from "../Components/CallToAction";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Feature/>
      <HowItWorks/>
      <CallToAction/>
    </div>
  )
}
