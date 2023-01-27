import logo from "../img/airbnb-logo.png";
import menu from "../img/nav2.png";

export default function Navbar() {
  return (
    <div className="parentDiv">
      <nav>
        <img src={logo} alt="airbnb logo" className="logo" />
        <img src={menu} alt="airbnb menu" className="menu" />
      </nav>
    </div>
  );
}
