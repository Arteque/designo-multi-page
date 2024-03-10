import Header from "./Header"
import MediumHeading from "./MediumHeading"
import Wrapper from "./Wrapper"
function Section({children, id, SectionHeading, SubHeading}) {
  return (
    <section id={id}>
        {id !== "hero-section" ? (
            <>
                <Wrapper>
                    <Header classname="section-header">
                        <MediumHeading>
                            {SectionHeading}
                            {SubHeading  && (<p>{SubHeading}</p>)}
                        </MediumHeading> 
                    </Header>
                    <div className="content">{children}</div>
                </Wrapper>
            </>
        )
            :(
                <Wrapper>
                    {children}
                </Wrapper>
            )
    }
    </section>
  )
}

export default Section