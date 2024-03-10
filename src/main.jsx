import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home.jsx'
import Contact from './Pages/Contact.jsx'
import WebDesign from './Pages/WebDesign.jsx'
import GraphicDesign from './Pages/GraphicDesign.jsx'
import AppDesign from './Pages/AppDesign.jsx'
import AboutUs from './Pages/AboutUs.jsx'
import Location from './Pages/Location.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    errorElement: <ErrorPage />,
  },
  {
    path:"aboutus",
    element: <AboutUs />
  },
  {
    path:"contact",
    element: <Contact />
  },
  {
    path:"webdesign",
    element: <WebDesign />
  },
  {
    path:"appdesign",
    element: <AppDesign />
  },
  {
    path:"graphicdesign",
    element: <GraphicDesign />
  },
  {
    path:"location",
    element: <Location />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
