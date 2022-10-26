import React from "react"
import './App.css';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import Card from "./components/Card"
import Mydata from "./data";

export default function App() {
  const cardData = Mydata.map(cards => {
    return <Card 
      key={cards.id} //the key prop removes the error:Assign array to a variable before exporting as module default 
      item={cards}
    />
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cardData}
      </section>

    </div>
  );
}


