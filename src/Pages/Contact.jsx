import Grid from "../Components/Grid" 
import MainHeading from "../Components/MainHeading"
import Form from '../Components/Form/Form'
import SmallHeading from "../Components/SmallHeading"
import Button from "../Components/Button"


export default function Contact() {
  return (
    <main className="sub-page location no-call-after">
        <section id="hero-section">
            <div className="wrapper --full-width">
                <div className="grid-flex">
                      <div className="content-container">
                          <MainHeading>
                             Contact Us
                          </MainHeading>
                          <p>
                            Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.
                          </p>
                      </div>
                      <div className="media-container">
                         <Form />
                      </div>
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
    </main>
  )
}
