import { useState, useEffect } from "react"
import SmallHeading from "./SmallHeading"
import MediumHeading from './MediumHeading'
import Button from "./Button"
function Card({ bgImg, Heading, linkText, link, cardtype,detailsCardHeader,detailsCardBodyHeading,detailsCardText}) {


const [hasLink, setHasLink] = useState(false)


useEffect(() => {
    linkText ? setHasLink(true) : setHasLink(false)
}, [linkText])

  return (
    (cardtype === "details-card")?(
        <>
            <div className={`card-container ${cardtype}`}>
                <div className="card-header">
                    <img src={detailsCardHeader} alt={detailsCardBodyHeading} />
                </div>
                <div className="card-body">
                    <SmallHeading>
                        {detailsCardBodyHeading}
                    </SmallHeading>
                    <p>
                        {detailsCardText}
                    </p>
                </div>
            </div>
        </>
    ):(
        <div className={`card-container radius ${bgImg?"bgImg":""}`} style={bgImg?{backgroundImage:`url(${bgImg})`}:null}>
            <MediumHeading >
            {Heading}
            </MediumHeading>
            <Button title={linkText} classname="btn-icon" href={link}>
                {linkText}
                {
                    hasLink && (
                        <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.13477L5 5.13477L1 9.13477" stroke="#E7816B" strokeWidth="2"/>
                        </svg>
                    )
                }
            </Button>    
        </div>
    )
  )
}

export default Card