const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: "172.46.2.204",
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  // client.js
  conn.on("data", data => {
    console.log("Server says: ", data); //this I get the write data from the server;
  });

  conn.on("connect", () => {
    //this I write data to the server
    console.log("Successfully connected to game server!");
    console.log("Name:CNS");
  });
  return conn;
};

module.exports = connect;
