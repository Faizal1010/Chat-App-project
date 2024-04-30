import React, { useState, useEffect, useRef } from "react";
import "./middlebar.css";
import Sent from './sent'
import Recieved from './recieved'
import useConversation from "../../zustand/useConversation";
import MessageInput from "./messageInput";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../../skeletons/messageSkeletons";

const middlebar = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  // console.log(selectedConversation?.fullName)
  useEffect(() => {
		// cleanup function (unmounts)
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);


  const {messages,loading}=useGetMessages();
  const lastMessageRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);
  // console.log(messages)
  return (
    <div className="mainmid">
      <div className="heading">
        <img
          src={selectedConversation?.profilePic}
          alt=""
        />
        <span>{selectedConversation?.fullName}</span>
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
                  strokeWidth="1.5"
                  strokeLinejoin="round"
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
      {!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<div key={message._id} ref={lastMessageRef}>
						<Sent message={message} />
					</div>
				))}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
			{!loading && messages.length === 0 && (
				<p className='text-center'>Send a message to start the conversation</p>
			)}
      </div>
      <MessageInput/>
      
    </div>
  );
};

export default middlebar;
