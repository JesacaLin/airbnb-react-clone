import arrows from "../img/arrows.png";

export default function MyExperienceBar() {
  return (
    <section className="expHeader">
      <p className="myExpTitle">
        View unique experiences in your favorite destinations
        {/* Relive your favorite destinations and experiences */}
      </p>
      <img src={arrows} alt="arrows" className="arrows" />
    </section>
  );
}
