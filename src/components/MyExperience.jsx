export default function MyExperience(props) {
  return (
    <div className="myExpMainDiv">
      <button className="myExpBadge">Show All: {props.location}</button>
      <section className="expBody">
        <img src={props.img} alt="experience" className="myExperience" />
      </section>
    </div>
  );
}
