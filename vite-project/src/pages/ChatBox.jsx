
import { useState } from 'react';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages([...messages, { text: inputText, sender: 'user' }]);
      setInputText('');
    }
  };

  return (

    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="flex flex-col bottom-4 right-4 w-90 h-90 bg-white shadow-lg rounded-t-lg border border-gray-200">
      <div className="p-3 bg-gradient-to-r from-orange-600 to-pink-600 text-white text-2xl text-center font-bold rounded-t-lg">Chat</div>
      <div className="h-60 p-3 overflow-y-auto">
        {messages.map((msg, i) => (
          <div key={i} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : ''}`}>
            <p className="inline-block px-3 py-1 bg-gray-100 text-black text-lg rounded-lg">{msg.text}</p>
          </div>
        ))}
      </div>
      <div className="p-3 border-t flex">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="flex-1 border p-2 rounded-l text-lg"
          placeholder="Type a message..."
        />
        <button 
          onClick={handleSend}
          className="bg-gradient-to-r from-orange-600 to-pink-600 text-white text-lg px-3 rounded-r"
        >
          Send
        </button>
      </div>
    </div>
  </div>
    
  );
};

export default ChatBox;