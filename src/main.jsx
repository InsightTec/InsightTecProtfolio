import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home.jsx';
import Projects from './pages/projects/Projects.jsx';
import Services from './pages/services/Services.jsx';
import Team from './pages/team/Team.jsx';
import About from './pages/techonlogies/Techonlogies.jsx';
import Techonlogies from './pages/techonlogies/Techonlogies.jsx';
import Articles from './pages/articles/Articles.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* <Route index element={<App />} /> */}
  
      <Route index element={<Home />} />      
      <Route path='home' element={<Home />} />      
    <Route path="projects" element={<Projects />} />
    <Route path="services" element={<Services />} />
  
    <Route path="technologies" element={<Techonlogies />} />
      <Route path="team" element={<Team />} />
        <Route path="articles" element={<Articles />} />
      {/* ... etc. */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//      <App />
//   </React.StrictMode>,
// )
