import "./Nav.css";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-left">Logo</div>
      <div className="nav-right">
        <div className="nav-menu">
          <Link to="/"> Home</Link>
        </div>
        <div className="nav-menu">
          <Link to="/product">Products</Link>
        </div>
        <div className="nav-menu">
          <Link to="/cart"> Add to Cart</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
