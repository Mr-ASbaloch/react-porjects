import React from "react";

import "./App.css";
import Hero from "./Components/Hero";
import Frame from "./Components/Frame";
import Store from "./Components/Store";
import Offer from "./Components/Offer";
import Footer from "./Components/Footer";
import Client from "./Components/Client";

function App() {
  return (
    <>
      <Hero />
      <Frame />
      <Store />
      <Offer />
      <Client/>
      <Footer/>
    </>
  );
}

export default App;
