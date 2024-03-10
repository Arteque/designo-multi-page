import { Link } from "react-router-dom"
import Header from "../Components/Header"
import Wrapper from "../Components/Wrapper"


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
            <nav className="mainNav">
            <div className="burger">
                <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="#1D1C1E" fillRule="evenodd"><path d="M0 0h24v4H0zM0 8h24v4H0zM0 16h24v4H0z"/></g></svg>
            </div>
                <ul className="nav-items">
                    <li className="items">
                    <Link to="aboutus">Our Company</Link>
                    </li>
                    <li className="items">
                    <Link to="location">Locations</Link>
                    </li>
                    <li className="items">
                    <Link to="contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </Wrapper>
    </Header>  
    </>
  )
}
