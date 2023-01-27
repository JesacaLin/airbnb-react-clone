import cardPic from "../img/cardImage.png";
import star from "../img/star.png";

export default function Card() {
  return (
    <div className="card">
      <p className="cardTitle">
        Plan a trip with help from local Hosts around the world
      </p>
      <img src={cardPic} alt="card pic" className="cardImage" />
      <div cardName="cardStats">
        <img src={star} alt="star rating" className="cardStar" />
        <span className="cardRating">5.0</span>
        <span className="cardInfo">(6) • </span>
        <span className="cardInfo">United States</span>
      </div>
      <div>
        <p className="cardSubTitle">Plan The Perfect New York Vacation</p>
      </div>
      <div>
        <span className="cardPrice">From $136</span>
        <span> / person</span>
      </div>
    </div>
  );
}
