import MainHeader from "./Layout/MainHeader"
import MainFooter from "./Layout/MainFooter"
import Home from "./Pages/Home"
import AboutUs from "./Pages/AboutUs"
import Location from "./Pages/Location"
import Contact from "./Pages/Contact"
import NotFound from './Pages/NotFound'
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
      <MainHeader />
        <Routes>
            <Route path="/home" element={<Home />} />  
            <Route path="/ourcompany" element={<AboutUs />} />  
            <Route path="/location" element={<Location />} />  
            <Route path="/contact" element={<Contact />} /> 
            <Route path="*" element={<NotFound />} /> 
        </Routes>  
      <MainFooter />
    </BrowserRouter>
  )
}

export default App