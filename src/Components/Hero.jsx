import Section from "./Section"

function Hero({children}) {
  return (
    <>
        <Section id="hero-section">
            {children}
        </Section>
    </>
  )
}

export default Hero