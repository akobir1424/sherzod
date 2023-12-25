import React from "react";
import "./Hero.css";
import img3 from "../images/img3.svg";
import img4 from "../images/img4.svg";
import img5 from "../images/img5.svg";
import img6 from "../images/img6.svg";
import img7 from "../images/img7.svg";
import img8 from "../images/img8.svg";
import img9 from "../images/img9.svg";
import img10 from "../images/img10.svg";
import img11 from "../images/img11.svg";
import img12 from "../images/img12.svg";
import img13 from "../images/img13.svg";
import img14 from "../images/img14.svg";
import img15 from "../images/img15.svg";
import img16 from "../images/img16.svg";

function Hero() {
  return (
    <div className="main">
      <div className="first-container">
        <div className="title">
          <h1>
            Product was Built Specifically <br />
            for You
          </h1>
        </div>
        <div className="for-You">
          <div className="list it">
            <img src={img3} alt="" />
            <h2>First click tests</h2>
            <p>
              While most people enjoy <br /> casino gambling,
            </p>
          </div>
          <div className="list">
            <img src={img4} alt="" />
            <h2>Design surveys</h2>
            <p>
              Sports betting, lottery and <br /> bingo playing for the fun
            </p>
          </div>
          <div className="list">
            <img src={img5} alt="" />
            <h2>Preference tests</h2>
            <p>
              The Myspace page defines <br /> the individual.
            </p>
          </div>
          <div className="list">
            <img src={img6} alt="" />
            <h2>Five second tests</h2>
            <p>
              Personal choices and the <br /> overall personality of the <br />{" "}
              person.
            </p>
          </div>
        </div>
        <div className="btn">
          {" "}
          <button>SIGN UP NOW</button>
        </div>
      </div>
      <div className="content">
        <h1>Contents Strategies</h1>
        <p>
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.{" "}
        </p>
      </div>
      <div className="positeve">
        <div className="step st">
          <img src={img7} alt="" />
          <p>By Wahid Ari | 03 March 2019</p>
          <h2>
            Increasing Prosperity <br /> With Positive Thinking
          </h2>
        </div>
        <div className="step">
          <img src={img8} alt="" />
          <p>By Wahid Ari | 03 March 2019</p>
          <h2 className="color">
            Motivation Is The First <br /> Step To Success
          </h2>
        </div>
        <div className="step">
          <img src={img9} alt="" />
          <p>By Wahid Ari | 03 March 2019</p>
          <h2>
            Increasing Prosperity <br /> With Positive Thinking
          </h2>
        </div>
      </div>

      <div className="price">
        <div className="title-prc">
          <h2>Price Table</h2>
          <p>We offer competitive price</p>
        </div>

        <div className="flex">
          <div className="free fr">
            <br />
            <h3>Free</h3>
            <p>Brief price description</p>
            <img src={img10} alt="" />
            <p>Only 2 Operators</p>
            <p>Notifications</p>
            <p>Landing Pages</p>
            <br />
            <button>Order Now</button>
          </div>
          <div className="free bg">
            <br />
            <h3>Standard</h3>
            <p>Brief price description</p>
            <img src={img11} alt="" />
            <p>5+ Operators</p>
            <p>Notifications</p>
            <p>Landing Pages</p>
            <br />
            <button>Order Now</button>
          </div>
          <div className="free">
            <br />
            <h3>Premium</h3>
            <p>Brief price description</p>
            <img src={img12} alt="" />
            <p>10+ Operators</p>
            <p>Notifications</p>
            <p>Landing Pages</p>
            <br />
            <button>Order Now</button>
          </div>
        </div>
      </div>

      <div className="clients">
        <div className="slients-title">
          <h2>What Clients Say</h2>
          <p>
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
       <div className="fl">
       <div className="stars chap">
          <img className="star" src={img13} alt="" />
          <p>
            Product helps you see how many <br />
            more days you need to work to <br />
            reach your financial goal.
          </p>
          <div className="person ">
            <img className="mr" src={img14} alt="" />
            <h3>Wahid Ari</h3>
            <span>Designer</span>
          </div>
        </div>
        <div className="stars">
          <img className="star" src={img13} alt="" />
          <p>
            Product helps you see how many <br />
            more days you need to work to <br />
            reach your financial goal.
          </p>
          <div className="person ">
            <img className="mr" src={img15} alt="" />
            <h3>Wahid Ari</h3>
            <span>Designer</span>
          </div>
        </div>
        <div className="stars">
          <img className="star" src={img13} alt="" />
          <p>
            Product helps you see how many <br />
            more days you need to work to <br />
            reach your financial goal.
          </p>
          <div className="person ">
            <img className="mr" src={img16} alt="" />
            <h3>Wahid Ari</h3>
            <span>Designer</span>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
}

export default Hero;
