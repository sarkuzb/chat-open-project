import { useState } from "react";

function ChatOpen() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [sendMessage, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const toggleOpenChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!sendMessage.trim()) return;
    setMessages([...messages, sendMessage]);
    setMessage("");
  };

  return (
    <>
      <div className="bg-gray-200 flex p-4 w-full h-full fixed">
        <div className="absolute text-xs font-light bottom-10 right-10 bg-slate-400 rounded-full px-1 py-6 cursor-pointer hover:bg-slate-500 active:bg-slate-400 transition duration-150  active:scale-90">
          <button
            onClick={toggleOpenChat}
            className="text-xs text-white font-light"
          >
            Contact Us
          </button>
        </div>
        {isChatOpen && (
          <div className="chat-box-main shadow-xl shadow-black/20 absolute bottom-20 right-20 bg-white w-72 h-96 rounded-xl border-1 border-slate-600 overflow-hidden flex flex-col justify-between">
            <div>
              <div className="bg-slate-300 h-12 flex items-center pl-4">
                <p className="text-slate-600 font-bold">Contact Us</p>
              </div>
              <div className="chat-box overflow-hidden overflow-y-scroll flex flex-col p-2 m-1">
                {/* Predefined left-aligned message */}
                <div className="self-start p-1">
                  <p className="text-xs text-slate-600 font-light bg-slate-300 p-1 rounded-tl-md rounded-br-md rounded-tr-md">
                    Assalom Aleykum. Bizga qanaqa savolingiz bo'lsa yozib
                    qoldiring. Tez orada sizga bog'lanishadi!
                  </p>
                </div>

                {/* Render each message from the messages array */}
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex p-1 self-end ${index % 2 === 0}`}
                  >
                    <p className="text-xs text-slate-600 font-light bg-slate-300 p-1 rounded-tl-md rounded-bl-md rounded-tr-md">
                      {msg}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-300 flex items-center p-2">
              <textarea
                value={sendMessage}
                onChange={(e) => setMessage(e.target.value)}
                className="
                  outline-none 
                  h-6 rounded 
                  resize-none 
                  text-sm 
                  flex-grow
                  pl-2 
                  placeholder:text-xs 
                  placeholder:font-light 
                  placeholder:pt-1"
                placeholder="Send message..."
              ></textarea>
              <button
                onClick={handleSend}
                className="bg-sky-600 rounded text-xs p-1 ml-1 font-light text-white hover:bg-sky-700 hover:text-gray-300 active:bg-sky-800 active:text-gray-400 transition duration-100"
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ChatOpen;
