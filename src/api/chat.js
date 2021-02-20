const tmi = require("tmi.js");
const dotenv = require("dotenv");

export default class ChatClient {
  static async createClient() {
    dotenv.config();

    const client = new tmi.Client({
      connection: { reconnect: true },
      channels: ["lucecarter"]     
    });

   await client.connect().then(
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
      })
   ).catch(error => {
       debugger;
       console.log(error)
   });

    
  }
}
