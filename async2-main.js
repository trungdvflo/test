const fs = require('fs');

const data = fs.readFile("input.txt", function(err, data) {
  if (err) return console.log(err);
  console.log(data.toString()+ "\n");
});
console.log("\n // out put");
console.log("Program End.");