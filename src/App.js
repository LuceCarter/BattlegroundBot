import { useEffect, useState } from 'react';
import ChatMessages from './components/ChatMessages'

const tmi = require("tmi.js");

const client = new tmi.Client({
  connection: { reconnect: true },
  channels: ["lucecarter"],
});

client.connect();

const App = () => {
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    
    client.on("chat", (channel, tags, message, self) => {
      const newChatEvent = {
        message,
        tags
      }
      //This was the biggest issue the way it was being done before
      // you want to construct the new event before you pass it in, 
      // otherwise it will update itself whilst it's trying to update
      // hence the crashing

      // so construct new event first
      const newChatMessages = [...chatMessages, newChatEvent];

      // then set the state array
      setChatMessages(newChatMessages);    

    })
  }, [setChatMessages, chatMessages]);

  return (
      <ChatMessages messages={chatMessages} />
  );
};

export default App;
