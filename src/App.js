import Message from "./Message";
import { useState } from 'react';
const tmi = require("tmi.js");

const client = new tmi.Client({
  connection: { reconnect: true },
  channels: ["lucecarter"],
});

client.connect();

const App = () => {
  // This is setting a state variable on 'App'
  // this is the functional way to to do it
  // chatMessages is the variable
  // setChatMessages is the function that sets it
  // it is initialised as an empty array

  // HELP RECEIVED FROM WhiteP4nth3r - 21st February 2021 🥳
  const [chatMessages, setChatMessages] = useState([]);

  client.on("message", (channel, tags, message, self) => {
    // we set it here regardless of any badges or anything
    setChatMessages([...chatMessages, `${tags["display-name"]}: ${message}`]);

    if (tags["badges"] != null) {
      if (
        tags["mod"] === true ||
        tags["subscriber"] === 1 ||
        tags["badges"]["founder"] === 1 ||
        tags["badges"]["vip"] === "1"
      ) {
        // and then here, we can do stuff if we find the badges     
        setChatMessages([...chatMessages, `🧡${tags["display-name"]}: ${message}`]);
      }
    }
  });

  return (
    <div>
      <h1>Battleground Bot!</h1>
      <Message chatMessages={chatMessages} />
    </div>
  );
};

export default App;
