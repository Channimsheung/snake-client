let connection;
// Stores the active TCP connection object.

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // stdin.on("data", handleUserInput => {
  //   console.log("Server says: ", data); //this I get the write data from the server;
  // });
  stdin.on("data", function(key) {
    handleUserInput(key);
  });
  return stdin;
};

const handleUserInput = function(input) {
  if (input === "\u0003") {
    process.exit();
  }

  if (input === "w") {
    console.log("Move: up");
  }

  if (input === "a") {
    console.log("Move: left");
  }

  if (input === "s") {
    console.log("Move: down");
  }

  if (input === "d") {
    console.log("Move: right");
  }
};

module.exports = setupInput;
