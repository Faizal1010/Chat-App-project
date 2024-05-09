import './nameCard.css'
import React from 'react';
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from '../../context/SocketContext';

const nameCard = ({conversation,lastIdx}) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
	const isSelected = selectedConversation?._id === conversation._id;

  const handleClick = () => {
    document.querySelector('.bg-text').style.display = 'none'
    document.querySelector('.leftbar').style.display = 'contents'
    document.querySelector('.mainmid').style.display = 'flow'
    document.querySelector('.right').style.display = 'flow'
  }
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  
  return (<div>
      <div className={`NameCard  ${isSelected ? "selected" : ""}`} onClick={() => {setSelectedConversation(conversation);handleClick()}}>
        <div className="pic">
        <div className={`${isOnline ? "online" : ""}`}></div>
          <img src={conversation.profilePic} alt="" />
          
        </div>
        <div className="content">
          <div className="info">
            <h4>{conversation.fullName}</h4>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime accusamus sit repellendus doloremque aperiam rem?</span>
          </div>
          <div className="time">14m</div>
        </div>
        
      </div>
      {!lastIdx && <div className='divider'></div>}
      
      </div>
  )
}

export default nameCard