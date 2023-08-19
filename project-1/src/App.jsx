import "./App.css";
import Address from "./Components/Address";

import { Navbar } from "./Components/Navbar";
import Sec_Block from "./Components/Sec_Block";
import Section from "./Components/Section";


function App() {
  return (
    <>
      <Navbar />
      <Section />
      <Sec_Block/>
      <Address/>
    </>
  );
}

export default App;
