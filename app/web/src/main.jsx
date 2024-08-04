import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Activities from './pages/Activities.jsx';
import Layout from './components/Layout.jsx';
import Geo from './components/Geography.jsx';
import './css/index.css';
import OpenStreetMap from './components/OpenStreetMap.jsx';
import LandingPage from './pages/LandingPage.jsx';
import Auth from './components/AuthComponent.jsx';
import About from './pages/About.jsx';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import SignIn from './components/SignIn.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
       path: '/services',
       element: <Services />
      },
      {
        path: '/activities',
        element: <OpenStreetMap />
      }
    ]
  },
  {
    path:'/signin',
    element: <SignIn />
  },
  {
    path: '/login',
    element: <Auth />
  },

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
)
