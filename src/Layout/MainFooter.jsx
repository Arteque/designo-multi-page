import Footer from "../Components/Footer"
import Wrapper from "../Components/Wrapper"
import MediumHeading from "../Components/MediumHeading"
import Button from "../Components/Button"
import MainLogo from "../Components/MainLogo"
import Nav from "../Components/Nav/Nav"
import Grid from '../Components/Grid'
import Social from "../Components/Nav/Social"

function MainFooter() {
  return (
    <>  
        <div className="call-container">
            <Wrapper>
                <MediumHeading>
                    Let’s talk about your project
                </MediumHeading>
                <p>
                Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
                </p>
                <Button classname="btn-call --on-dark radius">Get in touch</Button>
            </Wrapper>
        </div>
        <Footer>
            <Wrapper>
                <Grid gridFlex={true}>
                    <div className="logo-container">
                        <MainLogo logoLocation="footer" />
                    </div>
                    <div className="nav">
                        <Nav />
                    </div>
                    <div className="address">
                        <h3>Designo Central Office</h3>
                        <p>
                            3886 Wellington Street <br />
                            Toronto, Ontario M9C 3J5
                        </p>
                    </div>
                    <div className="contact">
                        <h3>Contact Us (Central Office)</h3>
                        <p>
                            P: +1 253-863-38967 <br />
                            M: contact@designo.co
                        </p>
                    </div>
                    <div className="social">
                        <Social />
                    </div>
                </Grid>
            </Wrapper>
        </Footer>
    </>
  )
}

export default MainFooter