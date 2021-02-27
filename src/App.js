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

    if (tags["badges"] != null) {
      if (
        tags["mod"] === true ||
        tags["subscriber"] === 1 ||
        tags["badges"]["founder"] === 1 ||
        tags["badges"]["vip"] === "1"
      ) {
        console.log('I am a VIP message');
        // and then here, we can do stuff if we find the badges     
        setChatMessages([...chatMessages, {chatMessage: `${tags["display-name"]}: ${message}`, isVIP: true}]);
      }
      else {
        console.log('I am a badge holder but not a VIP');
        setChatMessages([...chatMessages, {chatMessage: `${tags["display-name"]}: ${message}`, isVIP: false}]);
      }
    } 
    else {
      console.log('I have no badges');
      // we set it here regardless of any badges or anything
    setChatMessages([...chatMessages, {chatMessage: `${tags["display-name"]}: ${message}`, isVIP: false}]);
    }
  });

  return (
    <div>
      <Message chatMessages={chatMessages} />
    </div>
  );
};

export default App;
