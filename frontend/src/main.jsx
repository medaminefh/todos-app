import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Contact from './components/Contact.jsx'
import "./assets/index.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/", // Home page
    element: <div>Hello world!</div>,
  },
  {
    path: '/todo',
    element: <App />
  },
  {
    path: '/contact',
    element: <Contact />
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
