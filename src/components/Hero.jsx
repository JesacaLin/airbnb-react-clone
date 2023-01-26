import experience1 from "../img/experience1.png";
import experience2 from "../img/experience2.png";
import experience3 from "../img/experience3.png";
import arrows from "../img/arrows.png";

export default function Hero() {
  return (
    <div className="expMainDiv">
      <section className="expHeader">
        <h1>New this Week</h1>
        <img src={arrows} alt="arrows" className="arrows" />
      </section>
      <section className="expBody">
        <img src={experience1} alt="experience 1" className="experience" />
        <img src={experience2} alt="experience 2" className="experience" />
        <img src={experience3} alt="experience 3" className="experience" />
      </section>
    </div>
  );
}
