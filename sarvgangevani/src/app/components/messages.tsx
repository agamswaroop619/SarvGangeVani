import React, { useState } from "react";

interface MessagesProps {
  messages: { text: string; fromUser: boolean }[];
}

const Messages: React.FC<MessagesProps> = ({ messages }) => {
  const [currentQuestion, setCurrentQuestion] = useState<string>("");

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "hi-IN";
    utterance.pitch = 0.5; // Increase pitch
    utterance.rate = 0.8; // Slow down speech
    window.speechSynthesis.speak(utterance);
  };

  const handleButtonClick = (text: string) => {
    setCurrentQuestion(text);
  };

  if (messages.length === 0) {
    return (
      <div className="absolute px-4 scroll-overflow inset-x-0 bottom-[7vh]">
        <h1 className="text-3xl">Frequently Asked Questions</h1>
        <div className="grid grid-cols-2 gap-2">
          <button
            className="border-double border-4 rounded-full border-white text-xl"
            id="sample1"
            onClick={() =>
              handleButtonClick(
                "What is Namami Gange? How can we contribute to it?"
              )
            }
          >
            What is Namami Gange? How can we contribute to it?
          </button>
          <button
            className="border-double border-4 rounded-full border-white text-xl"
            id="sample2"
            onClick={() =>
              handleButtonClick("Chachaji gaana maa ki koi kahani sunaiye naa!")
            }
          >
            Chachaji gaana maa ki koi kahani sunaiye naa!
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="relative scroll-overflow top-[5vh] bottom-[10vh]">
        {messages.map((message, index) => (
          <div
            className={`${
              message.fromUser ? "chat chat-end" : "chat chat-start"
            } animate-fadeInScale`}
            key={message.text}
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
              <button
                id="voice"
                onClick={() => {
                  speak(message.text);
                  if (message.fromUser) {
                    handleButtonClick(message.text);
                  }
                }}
              >
                🔊
              </button>
            </div>
            <div className="chat-bubble text-xl bg-white text-black">
              {message.text}
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default Messages;
