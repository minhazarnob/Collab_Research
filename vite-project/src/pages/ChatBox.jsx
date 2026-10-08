
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
    <div className="fixed bottom-4 right-4 w-80 bg-white shadow-lg rounded-t-lg border border-gray-200">
      <div className="p-3 bg-blue-600 text-white rounded-t-lg">Chat</div>
      <div className="h-60 p-3 overflow-y-auto">
        {messages.map((msg, i) => (
          <div key={i} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : ''}`}>
            <p className="inline-block px-3 py-1 bg-gray-100 rounded-lg">{msg.text}</p>
          </div>
        ))}
      </div>
      <div className="p-3 border-t flex">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="flex-1 border p-2 rounded-l"
          placeholder="Type a message..."
        />
        <button 
          onClick={handleSend}
          className="bg-blue-600 text-white px-3 rounded-r"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;