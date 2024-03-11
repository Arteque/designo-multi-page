import Footer from "../Components/Footer"
import Wrapper from "../Components/Wrapper"
import MediumHeading from "../Components/MediumHeading"
import Button from "../Components/Button"
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
                
            </Wrapper>
        </Footer>
    </>
  )
}

export default MainFooter