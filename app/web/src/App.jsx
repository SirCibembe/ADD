
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import Header from './components/Header';
// import Auth from './pages/Auth';
// import Home from './pages/Home';
// import About from './pages/About';
// import Services from './pages/Services';
// import Activities from './pages/Activities';
// import Leadingpage from './pages/Leadingpage';
// import 'leaflet/dist/leaflet.css';
// import './App.css';

// function App() {
//   const location = useLocation();

//   return (
    
//     <Router>
//       {location.pathname !== '/' && <Header />}
//       <Routes>
//         <Route path="/" element={<Auth />}/>
//         <Route path="/leadingpage" element={<Leadingpage />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/Activities" element={<Activities />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Auth from './pages/Auth';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Activities from './pages/Activities';
// import Leadingpage from './pages/Leadingpage';
//import 'leaflet/dist/leaflet.css';
import './App.css';
import MapComponent from './components/MapComponent';

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && <Header />}
      <Routes>
        <Route path="/" element={<Auth />} />
        {/* <Route path="/leadingpage" element={<Leadingpage />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/activities" element={<MapComponent />} />
        <Route path='test' element={<MapComponent />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

