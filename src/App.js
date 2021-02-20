

const tmi = require("tmi.js");

const client = new tmi.Client({
  connection: { reconnect: true },
  channels: ["lucecarter"]     
});

client.connect();

const App = () => {
  client.on("message", (channel, tags, message, self) => {
    // "Alca: Hello, World!"
    console.log(tags);
    if(tags["mod"] === true 
    || tags["subscriber"] === 1
    || tags["badges"]["founder"] === 1
    || tags["badges"]["vip"] === "1") {
        console.log(`🧡${tags["display-name"]}: ${message}`);
    }

    console.log(`${tags["display-name"]}: ${message}`);
  });

  return (
    <div>
      <h1>Battleground Bot!</h1>
      <img src="emote_sword.png" alt="Sword Logo" />
    </div>
  );
};

export default App;

