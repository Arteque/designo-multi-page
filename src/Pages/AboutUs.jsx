import Grid from "../Components/Grid"
import Hero from "../Components/Hero"
import MainHeading from "../Components/MainHeading"
import Main from "../Layout/Main"
import Section from "../Components/Section"
import MediumHeading from "../Components/MediumHeading"
import SmallHeading from '../Components/SmallHeading'
import Button from '../Components/Button'
function AboutUs() {
  return (
    <Main classname="sub-page aboutus">
      <Hero>
         <Grid gridFlex={true}>
          <div className="content-container">
              <MainHeading>
                    About us
              </MainHeading>
                <p>
                  Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.
                </p>
          </div>
          
          <div className="media-container">
           <picture>
              <source media="(min-width: 1111px)" srcset="./assets/about/desktop/image-about-hero.jpg" />
              <source media="(min-width: 768px)" srcset="./assets/about/tablet/image-about-hero.jpg" />
              <img src="./assets/about/mobile/image-about-hero.jpg" alt="About Us" />
           </picture>
          </div>
          
         </Grid>
      </Hero>
      <Section id="aboutus-section">
          <div className="flex-container">
             <div className="block">

             </div>
             <div className="content">
                <MediumHeading>
                World-class talent
                </MediumHeading>
                <p>
                  We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.   
                  Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.
                </p>
             </div>
          </div>
      </Section>
      <section id="locations-container">
           <div className="wrapper">
            <div className="card">
                  <div className="card-header">
                      <img src="/assets/shared/desktop/illustration-canada.svg" alt="Canada SVG" />
                  </div>
                  <div className="card-body">
                      <SmallHeading>
                          Canada
                      </SmallHeading>
                  </div>
                  <div className="card-footer">
                      <Button classname="btn-call --on-light radius" href="location">
                        See Location
                      </Button>
                  </div>
            </div>
            <div className="card">
                  <div className="card-header">
                      <img src="/assets/shared/desktop/illustration-australia.svg" alt="Canada SVG" />
                  </div>
                  <div className="card-body">
                      <SmallHeading>
                          Australia
                      </SmallHeading>
                  </div>
                  <div className="card-footer">
                      <Button classname="btn-call --on-light radius" href="location">
                        See Location
                      </Button>
                  </div>
            </div>
            <div className="card">
                  <div className="card-header">
                      <img src="/assets/shared/desktop/illustration-united-kingdom.svg" alt="Canada SVG" />
                  </div>
                  <div className="card-body">
                      <SmallHeading>
                          United Kingdom  
                      </SmallHeading>
                  </div>
                  <div className="card-footer">
                      <Button classname="btn-call --on-light radius" href="location">
                        See Location
                      </Button>
                  </div>
            </div>
           </div>
      </section>
    </Main>
  )
}

export default AboutUs