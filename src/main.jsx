import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Navigation from "./components/Navigation.jsx";
import Home from "./pages/Home.jsx";
import Recycling from "./pages/Recycling.jsx";
import Whatcando from "./pages/Whatcando.jsx";
import Collections from "./pages/Collections.jsx";
import Recyclingfacts from "./pages/Recyclingfacts.jsx";
import Tenways from "./pages/Tenways.jsx";
import Contact from "./pages/Contact.jsx";
import ToggleButton from "./components/ToggleButton.jsx";
import "./static/sass/style.scss";

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
          <Route exact path="/recyclingfacts" element={<Recyclingfacts />} />
          <Route exact path="/tenways" element={<Tenways />} />
          {/* <Route element={<NotFound />} /> */}
        </Routes>
      </React.StrictMode>
      <Footer />
    </div>
  </Router>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(routing);
