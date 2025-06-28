import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Router/Router'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer } from 'react-toastify'
// ..
AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer/>
  </StrictMode>,
)
