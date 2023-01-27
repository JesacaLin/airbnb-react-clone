import star from "../img/star.png";

export default function Card(props) {
  return (
    <div>
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
