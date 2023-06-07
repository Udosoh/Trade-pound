import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

import Home from './pages/home/Home';
import About from './pages/about/About';
/* import Contact from './pages/contact/Contact';
import Faq from './pages/FAQ/Faq';
*/
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import './index.css'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
         <Route index={true} path='/' element={<Home />} />
         <Route path='/about' element={<About />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
