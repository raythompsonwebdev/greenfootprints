import React from 'react';
//import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Navigation from './components/Navigation.js';
import Home from './pages/Home.js';
import Recycling from './pages/Recycling.js';
import Whatcando from './pages/Whatcando.js';
import Collections from './pages/Collections.js';
import Recyclingfacts from './pages/Recyclingfacts.js';
import Tenways from './pages/Tenways.js';
import Contact from './pages/Contact.js';
import ToggleButton from './components/ToggleButton.js';
import './static/fonts/fontawesome/css/font-awesome.css';
import './static/sass/style.scss';

const routing = (
  <Router>
    <div id="main-wrapper">
      <Header />
      <Navigation />
      <ToggleButton />
      <React.StrictMode>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/recycling" element={<Recycling />} />
          <Route exact path="/whatcando" element={<Whatcando />} />
          <Route exact path="/collections" element={<Collections />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/Recyclingfacts" element={<Recyclingfacts />} />
          <Route exact path="/tenways" element={<Tenways />} />
          {/* <Route element={<NotFound />} /> */}
          {/* <Route path="/product/:name" render={({ match }) => <ProductPage match={match} />}
              /> */}
        </Routes>
      </React.StrictMode>
      <Footer />
    </div>
  </Router>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(routing);
//ReactDOM.render(routing);
