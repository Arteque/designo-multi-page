import Grid from "../Components/Grid"
import MainHeading from "../Components/MainHeading"
import MediumHeading from "../Components/MediumHeading"
import SmallHeading from '../Components/SmallHeading'
import Button from '../Components/Button'



function AboutUs() {
  return (
    <main className="sub-page aboutus">
      <section id="hero-section">
         <div className="wrapper">
            <div  className="grid-flex --column-reverse">
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
                  <source media="(min-width: 1111px)" srcSet="./assets/about/desktop/image-about-hero.jpg" />
                  <source media="(min-width: 768px)" srcSet="./assets/about/tablet/image-about-hero.jpg" />
                  <img src="./assets/about/mobile/image-about-hero.jpg" alt="About Us" />
              </picture>
              </div>
              
            </div>
         </div>
      </section>
      <section id="aboutus-section" className="pseudo-block-container pseudo-left">
          <div className="wrapper">
             <div className="content">
                <MediumHeading>
                World-class talent
                </MediumHeading>
                <p>
                  We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.  
                  <br /> <br />
                  Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.
                </p>
             </div>
          </div>
      </section>
      <section id="locations-container">
           <div className="wrapper">
              <div className="grid-flex">
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
           </div>
      </section>
      <section id="deal-section" className="pseudo-block-container pseudo-right">
          <div className="wrapper">
             <div className="content">
                <MediumHeading>
                The real deal
                </MediumHeading>
                <p>
                As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.
                <br />
                <br />  
                We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.
                </p>
             </div>
          </div>
      </section>
    </main>
  )
}

export default AboutUs