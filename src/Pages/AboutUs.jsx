import Hero from "../Components/Hero"
import MainHeading from "../Components/MainHeading"
import Main from "../Layout/Main"
function AboutUs() {
  return (
    <Main classname="sub-page">
      <Hero>
        <div className="content-container">
            <MainHeading>
                  Web Design
              </MainHeading>
              <p>
              We build websites that serve as powerful marketing tools 
    and bring memorable brand experiences.
              </p>
        </div>
      </Hero>
    </Main>
  )
}

export default AboutUs