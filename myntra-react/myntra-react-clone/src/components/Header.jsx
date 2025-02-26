import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router";

const Header = () => {
  return (
    <header>
      <div class="logo_container">
        <Link to="/">
          <img
            class="myntra_home"
            src="images/myntra_logo.webp"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav class="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">
          Studio <sup>New</sup>
        </a>
      </nav>
      <div class="search_bar">
        <span class="material-symbols-outlined search_icon">search</span>
        <input
          class="search_input"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div class="action_bar">
        <div class="action_container">
          <CgProfile />
          <span class="action_name">Profile</span>
        </div>

        <div class="action_container">
          <CiHeart />
          <span class="action_name">Wishlist</span>
        </div>

        <Link to="/bag" class="action_container">
          <FaShoppingBag />
          <span class="action_name">Bag</span>
          <span class="bag-item-count">0</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
