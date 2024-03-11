import { Link } from "react-router-dom"
import Header from "../Components/Header"
import Wrapper from "../Components/Wrapper"
import Nav from "../Components/Nav/Nav"


export default function MainHeader() {
  return (
    <>
      <Header>
        <Wrapper>
            <div className="logo-container">
            <Link to="/">
                <img src="./assets/shared/desktop/logo-dark.png" alt="Logo" />
            </Link>
            </div>
            <div className="burger">
                <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="#1D1C1E" fillRule="evenodd"><path d="M0 0h24v4H0zM0 8h24v4H0zM0 16h24v4H0z"/></g></svg>
            </div>
            <Nav />
        </Wrapper>
      </Header>  
    </>
  )
}
