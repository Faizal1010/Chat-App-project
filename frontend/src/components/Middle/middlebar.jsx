import React, { useState } from "react";
import "./middlebar.css";
import Sent from './sent'
import Recieved from './recieved'

const middlebar = () => {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const sendMessage = () => {
    setMessage(inputValue);
    setInputValue(''); // Clear the input field after sending
  };

  return (
    <div className="mainmid">
      <div className="heading">
        <img
          src="https://www.shareicon.net/data/512x512/2016/09/15/829459_man_512x512.png"
          alt=""
        />
        <span>Andrea Mendoza</span>
        <div className="calls">
          <div className="call">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="#000000"
                fill="none"
              >
                <path
                  d="M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z"
                  stroke="grey"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="border">
        <span></span>
      </div>


      <div className="msg">
        <Recieved />
        <Sent 
          msg={message}
        />
      </div>
      <form className="msg-form" action="post">
        <div className="msg-box">
          <input type="text" placeholder="Type a message here..." value={inputValue} onChange={handleChange}>
          </input>
        </div>
        <button className="attachment-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
          <path d="M5.82338 12L4.27922 10.4558C2.57359 8.75022 2.57359 5.98485 4.27922 4.27922C5.98485 2.57359 8.75022 2.57359 10.4558 4.27922L19.7208 13.5442C21.4264 15.2498 21.4264 18.0152 19.7208 19.7208C18.0152 21.4264 15.2498 21.4264 13.5442 19.7208L10.0698 16.2464C9.00379 15.1804 9.00379 13.4521 10.0698 12.386C11.1358 11.32 12.8642 11.32 13.9302 12.386L15.8604 14.3162" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg></button>
        <button className="sendbtn" type="button" onClick={sendMessage}>Send</button>
      </form>
      
    </div>
  );
};

export default middlebar;
