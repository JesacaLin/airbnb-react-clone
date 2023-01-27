import star from "../img/star.png";
import heart from "../img/heart.png";

export default function Card(props) {
  return (
    <div className="card">
      {/* SET CONDITIONAL RENDER */}
      {props.saved === true && (
        <img src={heart} alt="heart" className="cardHeart" />
      )}
      <img src={props.img} alt="card pic" className="cardImage" />
      <div className="cardStats">
        <img src={star} alt="star rating" className="cardStar" />
        <span className="cardRating">{props.rating}</span>
        <span className="cardInfo">({props.reviewCount}) </span>
        <span className="cardInfo">{props.location}</span>
      </div>
      <div>
        <p className="cardSubTitle">{props.title}</p>
      </div>
      <div>
        <span className="cardPrice">From ${props.price}</span>
        <span> / person</span>
      </div>
    </div>
  );
}
