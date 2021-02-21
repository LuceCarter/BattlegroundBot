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
  // chatMessage is the variable
  // setChatMessage is the function that sets it
  // it is initialised as an empty string
  // and it will currently get overwritten by any new message that comes in

  // HELP RECEIVED FROM WhiteP4nth3r - 21st February 2020 🥳
  const [chatMessage, setChatMessage] = useState('')

  client.on("message", (channel, tags, message, self) => {
    // we set it here regardless of any badges or anything
    setChatMessage(`${tags["display-name"]}: ${message}`);

    if (tags["badges"] != null) {
      if (
        tags["mod"] === true ||
        tags["subscriber"] === 1 ||
        tags["badges"]["founder"] === 1 ||
        tags["badges"]["vip"] === "1"
      ) {
        // and then here, we can do stuff if we find the badges
        setChatMessage(`🧡${tags["display-name"]}: ${message}`);
      }
    }
  });

  return (
    <div>
      <h1>Battleground Bot!</h1>
      <Message chatMessage={chatMessage} />
    </div>
  );
};

export default App;
