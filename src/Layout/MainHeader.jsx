import { Link } from "react-router-dom"
import { useState } from "react"
import Header from "../Components/Header"
import Wrapper from "../Components/Wrapper"
import Nav from "../Components/Nav/Nav"
import MainLogo from "../Components/MainLogo"


export default function MainHeader() {

  const [open, setOpen] = useState(false)

  const handleNav = () => {
    setOpen(prev => !prev)
  }

  

  return (
    <>
      <Header>
        <Wrapper>
            <div className="logo-container">
            <Link to="/">
                <MainLogo logoLocation="header" />
            </Link>
            </div>
            <div onClick={handleNav} className={`burger ${open ? 'open' : ''}`}>
                <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg">
                  <g fill="#1D1C1E" fillRule="evenodd">
                    <path d="M0 0h24v4H0z"/>
                    <path d="M0 8h24v4H0z"/>
                    <path d="M0 16h24v4H0z"/>
                  </g>
                </svg>
            </div>
            <Nav classname={open ? 'open' : ''}/>
        </Wrapper>
      </Header>  
    </>
  )
}
