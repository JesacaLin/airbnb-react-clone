//Imported states
import { useState } from "react";
//Imported components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LinkList from "./components/LinkList";
import Card from "./components/Card";
import MyExperience from "./components/MyExperience";
import MyExperienceBar from "./components/MyExperienceBar";
//Data sheets
import dataMyExp from "./DataMyExperiences";
import data from "./data";
//Style sheet
import "./App.css";

function App() {
  // RENDER CARD DATA
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        img={item.img}
        id={item.id}
        title={item.title}
        price={item.price}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        saved={item.saved}
      />
    );
  });

  //RENDER MY EXPERIENCES DATA
  const myExperiences = dataMyExp.map((item) => {
    return (
      <MyExperience key={item.id} img={item.img} location={item.location} />
    );
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <LinkList />
      <section className="cardFlex">{cards}</section>
      <MyExperienceBar />
      <section className="expFlex">{myExperiences}</section>
    </div>
  );
}

export default App;
