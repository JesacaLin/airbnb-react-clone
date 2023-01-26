import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LinkList from "./components/LinkList";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <LinkList />
    </div>
  );
}

export default App;
