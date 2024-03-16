import Main from '../Layout/Main'
import Section from '../Components/Section'
import MainHeading from '../Components/MainHeading'
import Button from '../Components/Button'
import Grid from '../Components/Grid'
import Card from '../Components/Card'
import '../Home.css'
import Hero from '../Components/Hero'


function Home() {
  return (
    <Main classname="start-main-content">
      <Hero>
        <div className="content-container">
          <MainHeading>
              Award-winning custom designs and digital branding solutions
          </MainHeading>
          <p>
          With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
          </p>
          <Button classname="btn-call --on-dark radius">
              Learn more
          </Button>
        </div>
      </Hero>
      <Section id="about-section">
        <Grid>
          <Card Heading="Web design" linkText="view projects" link="webdesign" bgImg="./assets/home/mobile/image-web-design.jpg" />
          <Card Heading="App design" linkText="view projects" link="appdesign"/>
          <Card Heading="Graphic design" linkText="view projects" link="graphicdesign"/>
        </Grid>
      </Section>

      <Section id="quality-section">
        <Grid gridFlex={true}>
          <Card 
          cardtype="details-card" 
          detailsCardHeader="./assets/home/desktop/illustration-passionate.svg"
          detailsCardBodyHeading="Passionate"
          detailsCardText="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
          />
          <Card 
          cardtype="details-card" 
          detailsCardHeader="../assets/home/desktop/illustration-resourceful.svg"
          detailsCardBodyHeading="Resourcefull"
          detailsCardText="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
          />
          <Card 
          cardtype="details-card" 
          detailsCardHeader="./assets/home/desktop/illustration-friendly.svg"
          detailsCardBodyHeading="Friendly"
          detailsCardText=" We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
          />
        </Grid>
      </Section>
     </Main>
  )
}

export default Home