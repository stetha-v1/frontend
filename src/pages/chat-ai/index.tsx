import React, { useState, useRef, useEffect } from "react";
import "./index.scss";

interface IMessage {
  sender: "user" | "ai";
  text: string;
}

export const ChatAI: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleSendMessage = () => {
    const userMessage = inputRef.current?.value.trim();

    if (userMessage) {
      // Add user message
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "user", text: userMessage },
      ]);

      // Clear input field
      if (inputRef.current) {
        inputRef.current.value = "";
      }

      // Simulate AI reply
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "ai", text: `AI reply to "${userMessage}"` },
        ]);
      }, 1000); // AI response delay
    }
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat__container">
      <h1>Chat With Stetha AI</h1>
      <div className="messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === "user" ? "user" : "ai"}`}
          >
            {message.sender === "user" ? (
              <>
                <div className="text-content">
                  <p>{message.text}</p>
                </div>

              </>
            ) : (
              <>
                
                <div className="text-content">
                  <p className="sender-name">AI Bot</p>
                  <p>{message.text}</p>
                </div>
              </>
            )}
          </div>
        ))}
        <div />
      </div>

      <div className="input__container">
        <input
          type="text"
          placeholder="Type your message here"
          ref={inputRef}
          className="input-field"
        />
        <button onClick={handleSendMessage} className="send-button">
          Send
        </button>
      </div>
    </div>
  );
};
