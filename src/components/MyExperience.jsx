import myExperience1 from "../img/my-experience1.png";
import myExperience2 from "../img/my-experience2.png";
import myExperience3 from "../img/my-experience3.png";

import arrows from "../img/arrows.png";

export default function MyExperience() {
  return (
    <div className="expMainDiv">
      <section className="expHeader">
        <p className="myExpTitle">
          Relive your favorite destinations and experiences
        </p>
        <img src={arrows} alt="arrows" className="arrows" />
      </section>
      <section className="expBody">
        <img src={myExperience3} alt="experience 3" className="myExperience" />
        <img src={myExperience2} alt="experience 2" className="myExperience" />
        <img src={myExperience1} alt="experience 1" className="myExperience" />
      </section>
    </div>
  );
}
