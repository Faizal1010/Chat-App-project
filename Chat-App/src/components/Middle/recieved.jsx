import React from "react";
import "./recieved.css";

const recieved = () => {
  return (
    <div className="recieved">
      <div className="prof-img">
        <img
          src="https://www.shareicon.net/data/512x512/2016/09/15/829459_man_512x512.png" alt=""/>
        <div className="recieved-msg">Hello</div>
      </div>

      <div className="sent-time">9:19 pm</div>
    </div>
  );
};

export default recieved;
