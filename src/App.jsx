import MainHeader from "./Layout/MainHeader"
import MainFooter from "./Layout/MainFooter"
import Main from "./Layout/Main"
import Section from "./Components/Section"
import MainHeading from './Components/MainHeading'
import SmallHeading from './Components/SmallHeading'
import Card from './Components/Card'
import Grid from './Components/Grid'

import Button from './Components/Button'

import "./App.css"

function App() {
  return (
    <>
     <MainHeader />
     <Main classname="start-main-content">
        <Section id="hero-section">
            <MainHeading>
              Award-winning custom designs and digital branding solutions
            </MainHeading>
            <p>
            With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
            </p>
            <Button classname="btn-call --on-dark radius">
              Learn more
            </Button>
        </Section>
        <Section id="about-section">
          <Grid>
            <Card Heading="Web design" linkText="view projects" link="webdesign" bgImg="./assets/home/mobile/image-web-design.jpg"/>
            <Card Heading="App design" linkText="view projects" link="appdesign"/>
            <Card Heading="Graphic design" linkText="view projects" link="graphicdesign"/>
          </Grid>
        </Section>

        <Section id="quality-section">
          <Grid>
            <Card cardtype="details-card" />
          </Grid>
        </Section>
     </Main>
     <MainFooter />
    </>
  )
}

export default App