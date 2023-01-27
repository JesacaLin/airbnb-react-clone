import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LinkList from "./components/LinkList";
import Card from "./components/Card";
import cardImage from "./img/cardImage.png";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <LinkList />
      <Card
        img={cardImage}
        rating={"5.0"}
        reviewCount={6}
        country="United States"
        title="Plan The Perfect New York Vacation"
        price={136}
      />
    </div>
  );
}

export default App;
