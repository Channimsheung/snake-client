const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "172.46.2.204",
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  // client.js
  conn.on("data", data => {
    console.log("Server says: ", data);
  });

  conn.on("data", data => {
    console.log("Successfully connected to game server!");
    conn.write("Name:CNS");
  });
  return conn;
};

module.exports = connect;
