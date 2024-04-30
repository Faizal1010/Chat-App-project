import './middlebar.css'
import { useState } from "react";
import useSendMessage from "../../hooks/useSendMessage";
const messageInput = ()=>{
    const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage("");
	};
    return(
        <form className="msg-form" id="form" onSubmit={handleSubmit} >
        <div className="msg-box">
          <input type="text" placeholder="Type a message here..." value={message}
					onChange={(e) => setMessage(e.target.value)}>
          </input>
        </div>
        <button className="attachment-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
          <path d="M5.82338 12L4.27922 10.4558C2.57359 8.75022 2.57359 5.98485 4.27922 4.27922C5.98485 2.57359 8.75022 2.57359 10.4558 4.27922L19.7208 13.5442C21.4264 15.2498 21.4264 18.0152 19.7208 19.7208C18.0152 21.4264 15.2498 21.4264 13.5442 19.7208L10.0698 16.2464C9.00379 15.1804 9.00379 13.4521 10.0698 12.386C11.1358 11.32 12.8642 11.32 13.9302 12.386L15.8604 14.3162" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg></button> 
        <button className="sendbtn" type="submit">Send</button>
      </form>
    )
}
export default messageInput;