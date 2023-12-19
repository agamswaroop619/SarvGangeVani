import React from "react";

interface MessagesProps {
  messages: { text: string; fromUser: boolean }[];
}

const Messages: React.FC<MessagesProps> = ({ messages }) => {
  return (
    <div className="relative scroll-overflow top-[10vh] bottom-[10vh]">
      {messages.map((message, index) => (
        <div
          className={`${
            message.fromUser ? "chat chat-end" : "chat chat-start"
          } animate-fadeInScale`}
          key={index}
        >
          <div className="chat-image avatar">
            <div className="w-16 h-16 rounded-full">
              <img
                alt={message.fromUser ? "User Avatar" : "Chatbot Avatar"}
                src={
                  message.fromUser
                    ? "https://cdn-icons-png.flaticon.com/512/1154/1154439.png"
                    : "https://media.licdn.com/dms/image/C4D0BAQEkWJOoS8iGLA/company-logo_200_200/0/1630516424447?e=2147483647&v=beta&t=KrmED5uJgzXgITjPsFnID5PE7oPNMy5k1BMUwqIlasc"
                }
                className={message.fromUser ? "scale-100" : "scale-150"}
              />
            </div>
          </div>
          <div className="chat-footer">
            {message.fromUser ? "You" : "Chachaji"}
          </div>
          <div className="chat-bubble text-xl">{message.text}</div>
        </div>
      ))}
    </div>
  );
};

export default Messages;
