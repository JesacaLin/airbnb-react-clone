import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LinkList from "./components/LinkList";
import Card from "./components/Card";
import MyExperience from "./components/MyExperience";
import data from "./data";
import "./App.css";

function App() {
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
      />
    );
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <LinkList />
      <section className="cardFlex">{cards}</section>
      <MyExperience />
    </div>
  );
}

export default App;
