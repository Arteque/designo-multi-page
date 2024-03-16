import { useEffect } from "react"

function MediumHeading({children, uppercase}) {

  let classname = ""

  useEffect(() => {
    uppercase && (classname = 'uppercase')
  },[uppercase])

  return (
    <h2 className={`medium-heading ${ classname }`} uppercase>{children}</h2>
  )
}

export default MediumHeading