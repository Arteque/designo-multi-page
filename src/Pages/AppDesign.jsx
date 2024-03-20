import Main from "../Layout/Main"
import Hero from "../Components/Hero"
import MainHeading from "../Components/MainHeading"

function AppDesign() {
  return (
    <Main classname="sub-page">
      <Hero>
        <div className="content-container">
            <MainHeading>
                  App Design
              </MainHeading>
              <p>
              Our mobile designs bring intuitive digital solutions
 to your customers right at their fingertips.
              </p>
        </div>
      </Hero>
    </Main>
  )
}

export default AppDesign