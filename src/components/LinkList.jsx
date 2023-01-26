import oneArrow from "../img/one-arrow.png";

export default function LinkList() {
  return (
    <div>
      <section className="linkList">
        <ul className="leftLinks">
          <li>
            <button className="leftButtons" type="button">
              <span>Dates</span>
            </button>
          </li>
          <li>
            <button className="leftButtons" type="button">
              <span>Group size</span>
            </button>
          </li>
          <li>
            <button className="leftButtons" type="button">
              <span>More filters</span>
            </button>
          </li>
        </ul>
        <ul className="rightLinks">
          <li>
            <button className="rightButtons" type="button">
              <span>Great for groups</span>
            </button>
          </li>
          <li>
            <button className="rightButtons" type="button">
              <span>Family friendly</span>
            </button>
          </li>
          <li>
            <button className="rightButtons" type="button">
              <span>Animals</span>
            </button>
          </li>
          <li>
            <button className="rightButtons" type="button">
              <span>Arts & Writing</span>
            </button>
          </li>
          <li>
            <button className="rightButtons" type="button">
              <span>Baking</span>
            </button>
          </li>
          <li>
            <button className="rightButtons" type="button">
              <span>Cooking</span>
            </button>
          </li>
          <li>
            <button className="rightButtons" type="button">
              <span>Dance</span>
            </button>
          </li>
          <li>
            <button className="rightButtons" type="button">
              <span>Drinks</span>
            </button>
          </li>
          <li>
            <button className="rightButtons" type="button">
              <span>Entertainment</span>
            </button>
          </li>
          <li>
            <button className="rightButtons" type="button">
              <span>Fitness</span>
            </button>
          </li>
          <li>
            <button className="rightButtons" type="button">
              <span>History & Culture</span>
            </button>
          </li>
        </ul>
        <div>
          <img src={oneArrow} alt="one arrow" className="oneArrow" />
        </div>
      </section>
    </div>
  );
}
