import React from "react";
import About from "./components/About";
import Companies from "./components/Companies";
import Footer from "./components/Footer";
import Galary from "./components/Galary";
import Header from "./components/Header";
import Map from "./components/Map";
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
      <Companies />
      <Map />
      <Galary />
      <Footer />
    </>
  );
};

export default App;
