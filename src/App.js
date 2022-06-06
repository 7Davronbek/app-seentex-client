import React from "react";
import About from "./components/About";
import Header from "./components/Header";
import Section from "./components/Section";
import Sertificate from "./components/Sertificate";
import SocialFixed from "./components/SocialFixed";
import Tovar from "./components/Tovar";

const App = () => {
  return (
    <>
      <SocialFixed />
      <Header />
      <About />
      <Tovar />
      <Section />
      <Sertificate />
    </>
  );
};

export default App;
