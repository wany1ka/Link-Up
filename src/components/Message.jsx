import React from "react";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import './styles/ChatApp.css'

const Message = ({ message }) => {
  const [user, loading, error] = useAuthState(auth);

  // Handle loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!message) {
    return <div>No message to display.</div>;
  }

  const isCurrentUser = user && message.uid === user.uid;

  return (
    <div className={`chat-bubble ${isCurrentUser ? "right" : ""} px-10`}>
      <img
              className="chat-bubble__left size-6"
              src={message.avatar}
              alt="user avatar"
            />
            <div className="chat-bubble__right">
            <p className="user-name" style={{ color: isCurrentUser ? "#6c757d" : "#6c757d" }}>{message.name}</p>
        <p className="user-message" style={{ color: "#212529" }}>{message.text}</p>
      </div>
    </div>
  );
};
export default Message;