import React, { useState } from "react";
import "./index.scss";

export const AppointmentChatWithDoctor: React.FC = () => {
  const [messages, setMessages] = useState<
    { text: string; sender: "user" | "doctor" }[]
  >([
    {
      text: "Hello, Doctor! I have a question about my medication.",
      sender: "user",
    },
    { text: "Hi! Sure, what would you like to know?", sender: "doctor" },
    {
      text: "I’m experiencing some side effects. Is this normal?",
      sender: "user",
    },
    {
      text: "Side effects can happen, but let me check your symptoms.",
      sender: "doctor",
    },
    { text: "Thank you! I appreciate your help.", sender: "user" },
    {
      text: "You're welcome. Let me know if you need anything else.",
      sender: "doctor",
    },
  ]);
  const [input, setInput] = useState<string>("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput(""); // Clear the input after sending
      // Simulating a doctor reply (this would be handled by WebSocket in a real app)
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "Doctor reply", sender: "doctor" },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="appointment__chat">
      <div className="chat__window">
        <div className="chat__messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chat__message ${
                message.sender === "user" ? "user" : "doctor"
              }`}
            >
              <div className={`chat__bubble ${message.sender}`}>
                {message.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="chat__input">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};
