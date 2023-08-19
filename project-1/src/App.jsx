import "./App.css";
import Address from "./Components/Address";
import Client from "./Components/Client";
import Footer from "./Components/Footer";

import  Navbar  from "./Components/Navbar";
import Plan from "./Components/Plan";
import Sec_Block from "./Components/Sec_Block";
import Section from "./Components/Section";


function App() {
  return (
    <>
      <Navbar/>
      <Section />
      <Sec_Block/>
      <Address/>
      <Client/>
      <Plan/>
      <Footer/>
    </>
  );
}

export default App;
