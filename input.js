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
    connection.write("Move: up");
  }

  if (input === "a") {
    connection.write("Move: left");
  }

  if (input === "s") {
    connection.write("Move: down");
  }

  if (input === "d") {
    connection.write("Move: right");
  }

  if (input === "y") {
    connection.write("Say:hello");
  }
};

module.exports = setupInput;
