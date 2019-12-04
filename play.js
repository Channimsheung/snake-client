//before starts
// const net = require("net");

// /**
//  * Establishes connection with the game server
//  */
// // const connect = function() {
// //   const conn = net.createConnection({
// //     host: "172.46.2.204",
// //     port: 50541
// //   });
// //   // interpret incoming data as text
// //   conn.setEncoding("utf8");

// //   // client.js
// //   conn.on("data", data => {
// //     console.log("Server says: ", data);
// //   });
// //   return conn;
// // };
// const connect = require("./client");

// console.log("Connecting ...");
// connect();

// /**
//  * Setup User Interface
//  * Specifically, so that we can handle user input via stdin
//  */
// const setupInput = function() {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();

//   // stdin.on("data", handleUserInput => {
//   //   console.log("Server says: ", data); //this I get the write data from the server;
//   // });

//   stdin.on("data", function(key) {
//     handleUserInput(key);
//   });
//   return stdin;
// };

// const handleUserInput = function(input) {
//   if (input === "\u0003") {
//     process.exit();
//   }
// };

//represents the client side
//before ends

const connect = require("./client");
const setupInput = require("./input");
const connection = connect();
setupInput(connection);
console.log("Connecting ...");
connect();

setupInput();
