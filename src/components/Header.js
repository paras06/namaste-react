import { useState, useContext } from "react";
import FoodFireLogo from "../../images/Food Fire Logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

// Title component for display logo
const Title = () => (
  <a href="/">
    <img
      className="logo"
      src={FoodFireLogo}
      alt="Food Fire Logo"
      title="Food Fire"
    />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  // use useState for user logged in or logged out
  const [isLoggedin, setIsLoggedin] = useState(true);

  const isOnline = useOnlineStatus();

  const data = useContext(UserContext);
  console.log(data);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <span className={isOnline ? "login-btn-green" : "login-btn-red"}>
              {" "}
              ●
            </span>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <li>
            {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => setIsLoggedin(false)}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => setIsLoggedin(true)}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
