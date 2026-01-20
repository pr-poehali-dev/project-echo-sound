import { Navbar } from "./Navbar"
import { HeroYacht } from "./HeroYacht"
import { LogoCloud } from "./LogoCloud"
import { FeatureCardsSection } from "./FeatureCardsSection"
import { AISection } from "./AISection"
import { ProductDirectionSection } from "./ProductDirectionSection"
import { WorkflowsSection } from "./WorkflowsSection"
import { CTASection } from "./CTASection"
import { Footer } from "./Footer"
import { YachtCatalog } from "./YachtCatalog"

export function Hero3DStage() {
  return (
    <>
      <div style={{ backgroundColor: "#ffffff" }}>
        <Navbar />
        <HeroYacht />
        <LogoCloud />
        <FeatureCardsSection />
        <YachtCatalog />
        <AISection />
        <ProductDirectionSection />
        <WorkflowsSection />
        <CTASection />
        <Footer />
      </div>
    </>
  )
}