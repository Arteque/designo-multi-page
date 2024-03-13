import { useState, useEffect } from "react"

useState

function MainLogo({logoLocation}) {

    const [logoType, setLogoType] = useState("./assets/shared/desktop/logo-dark.png")

    useEffect(() => {
        if(logoLocation == "header"){
            setLogoType("./assets/shared/desktop/logo-dark.png")
        }
        else if(logoLocation == "footer"){
            setLogoType("./assets/shared/desktop/logo-light.png")
        }
        else{
            setLogoType("./assets/shared/desktop/logo-dark.png")
        }
    },[logoLocation])



  return (
    <>
        <img  src={logoType} alt="Logo"/>
    </>
  )
}



export default MainLogo