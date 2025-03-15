import React from "react";
import Hero from "./component/Hero";
import AgentProfile from "./component/AgentProfile ";
import RealEstateListings from "./component/RealEstateListings ";
import ServicesSection from "./component/ServicesSection";
import ContactForm from "./component/ContactForm ";
import RealEstateNews from "./component/RealEstateNews";
import Footer from "./component/Footer ";

function App() {
  return (
    <>
      <Hero />
      <AgentProfile />
      <RealEstateListings />
      <ServicesSection />
      <ContactForm />
      <RealEstateNews />
      <Footer />
    </>
  );
}

export default App;
