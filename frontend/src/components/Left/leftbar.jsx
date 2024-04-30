import viteLogo from "../../../public/vite.svg";
import reactLogo from "../../assets/react.svg";
import "./leftbar.css";
import NameCard from "./nameCard";
import Typed from 'typed.js';
import { useEffect } from "react";


const leftbar = () => {
  useEffect(() => {
    const typeData1 = new Typed(".big-title", {
      strings: ["Chat-APP"],
      loop: false,
      typeSpeed: 100,
      backSpeed: 0,
      backDelay: 0,
      showCursor: false,
    });
    const typeData2 = new Typed(".small-title", {
      strings: ["Chat-APP"],
      loop: false,
      typeSpeed: 100,
      backSpeed: 0,
      backDelay: 0,
      showCursor: false,
    });
    return () => {
      typeData1.destroy();
      typeData2.destroy();
    };
  }, []);
  

  return (
    <div className="leftbar">
      <div className="left">
        <div className="logo">
        {/* <NavLink to="/">Chat-APP</NavLink> */}
        <h2 className="small-title"></h2>
        </div>

        <div className="search">
          <input placeholder="Search user or chat" id="search"></input>
        </div>

        <div className="alert">
          <span>
            New
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="red"
              stroke="red"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="alert-icon"
            >
              <circle cx="12" cy="12" r="6"></circle>
            </svg>
          </span>
          <span>9</span>
        </div>

        <section className="contacts">
          <NameCard />
        </section>
        
      </div>
      <div className="bg-text">
      <h1 className="big-title"></h1>
    </div>
      </div>
  );
};

export default leftbar;
