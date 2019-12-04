const setupInput = function() {
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
};

module.exports = setupInput;
