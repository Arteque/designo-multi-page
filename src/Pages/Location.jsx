import Grid from "../Components/Grid" 
import MainHeading from "../Components/MainHeading"
import Form from '../Components/Form/Form'

 export default function Location() {


  return (
    <main className="sub-page location no-call-after">
        <section id="hero-section">
            <div className="wrapper --full-width">
                <Grid gridFlex={true}>
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
                </Grid>
            </div>
        </section>
    </main>
  )
}
