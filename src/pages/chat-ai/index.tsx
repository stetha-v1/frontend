import React from "react";
import "./index.scss";
/* 
interface IMessage {
  sender: "user" | "ai";
  text: string;
} */

export const ChatAI: React.FC = () => {
  return (
    <div className="chat-container">
      <div className="messages">Meassage</div>

      <div className="input-container">Input</div>
    </div>
  );
};
