import MainHeader from "./Layout/MainHeader"
import MainFooter from "./Layout/MainFooter"
import Home from "./Pages/Home"
import AboutUs from "./Pages/AboutUs"
import Location from "./Pages/Location"
import Contact from "./Pages/Contact"
import NotFound from './Pages/NotFound'
import {
  HashRouter,
  Route,
  Routes
} from 'react-router-dom'
import Main from "./Layout/Main"



function App() {
  return (
    <HashRouter>
      <MainHeader />
        <Routes>
            <Route path="/" element={<Home />} />  
            <Route path="/ourcompany" element={<AboutUs />} />  
            <Route path="/location" element={<Location />} />  
            <Route path="/contact" element={<Contact />} /> 
            <Route path="*" element={<NotFound />} /> 
        </Routes>  
      <MainFooter />
    </HashRouter>
  )
}

export default App