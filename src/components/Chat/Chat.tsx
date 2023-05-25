import React from 'react';

interface ChatProps {
  messages: {
    sender: string;
    time: string;
    text: string;
    status: string;
    avatarSrc: string;
    isStart: boolean;
  }[];
}

const Chat: React.FC<ChatProps> = ({ messages }) => {
  return (
    <>
      {messages.map((message, index) => (
        <div key={index} className={`chat ${message.isStart ? 'chat-start' : 'chat-end justify-end'}`}>
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src={message.avatarSrc} alt="Avatar" />
            </div>
          </div>
          <div className="chat-header">
            {message.sender}
            <time className="text-xs opacity-50">{message.time}</time>
          </div>
          <div className="chat-bubble">{message.text}</div>
          <div className="chat-footer opacity-50">
            {message.status}
          </div>
        </div>
      ))}
    </>
  );
};

export default Chat;
