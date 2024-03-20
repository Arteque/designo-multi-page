import Main from "../Layout/Main"
import Hero from "../Components/Hero"
import MainHeading from "../Components/MainHeading"

function GraphicDesign() {
  return (
    <Main classname="sub-page">
      <Hero>
        <div className="content-container">
            <MainHeading>
                  Graphic Design
              </MainHeading>
              <p>
              We deliver eye-catching branding materials that are 
              tailored to meet your business objectives.
              </p>
        </div>
      </Hero>
    </Main>
  )
}

export default GraphicDesign 