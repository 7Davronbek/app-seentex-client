import React from "react";
import About from "./components/About";
import Header from "./components/Header";
import SocialFixed from "./components/SocialFixed";
import Tovar from "./components/Tovar";

const App = () => {
  return (
    <>
      <SocialFixed />
      <Header />
      <About />
      <Tovar />
    </>
  );
};

export default App;
