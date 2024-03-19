import Grid from "../Components/Grid"
import Hero from "../Components/Hero"
import MainHeading from "../Components/MainHeading"
import Main from "../Layout/Main"
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
    </Main>
  )
}

export default AboutUs