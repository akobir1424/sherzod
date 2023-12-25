//images
import logo from "../images/logo.svg";
import icon from "../images/nav-icon.svg";
import img from "../images/img.svg";
import img2 from "../images/img2.svg";

//css
import "./Header.css";

function Header() {
  return (
    <div>
      <header>
        <nav className="header-nav">
          <ul className="header-nav_list">
            <div className="logo">
              <img src={logo} alt="" />
              <h2>Product</h2>
            </div>
            <li className="header-nav_item">
              <a href="">
                <h2>Product</h2>
              </a>
            </li>
            <li className="header-nav_item">
              <a href="">Customers</a>
            </li>
            <li className="header-nav_item">
              <a href="">Pricing</a>
            </li>
            <li className="header-nav_item">
              <a href="">Resources</a>
            </li>
            <div className="header-btn">
              <button className="first">Sign In</button>
              <button className="two">Sign Up</button>
              <img src={icon} alt="" />
            </div>
          </ul>
        </nav>
        <div className="header-hero">
          <div className="header-hero_text">
            <h1>
              Work at the speed <br />
              of thought
            </h1>
            <p>
              Tools, tutorials, design and innovation experts, all in <br /> one
              place! The most intuitive way to imagine your <br /> next user
              experience.
            </p>
            <div className="header-hero_btn">
              <button className="bir">Get started</button>
              <button className="ikki">
                <img src={img} />
                <a href=""> Watch the Video</a>
              </button>
            </div>
          </div>

          <div className="header-hero_img">
            <img src={img2} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
