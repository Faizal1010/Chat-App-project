import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";
import './sent.css'
import './recieved.css'

const sent = ({ message }) => {
  const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser._id;
	const formattedTime = extractTime(message.createdAt);

	const chatClassName = fromMe ? "sent" : "recieved";
	const bubbleBgColor = fromMe ? "sent-msg" : "recieved-msg";
	const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className={`${bubbleBgColor}`}>{message.message}</div>
      <div className="sent-time">
      {formattedTime}
      </div>
    </div>
  )
}

export default sent
