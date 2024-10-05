import LandingHero from "@/components/elements/LandingHero"
import LightRays from "@/components/elements/LightRays"
import LandingOfferings from "@/components/elements/LandingOfferings"
import TrustedCompanies from "@/components/elements/TrustedCompanies"
import LandingBanner from "@/components/elements/LandingBanner"
import BubbleCursor from "@/components/elements/BubbleCursor"

export default function Home() {

  return (
    <>
      <BubbleCursor />
      <LightRays />
      <LandingHero />
      <TrustedCompanies />
      <LandingOfferings />
      <LandingBanner />
    </>
  )
}
