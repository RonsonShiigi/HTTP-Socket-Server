const net = require("net");
const port = 8080;
const host = "0.0.0.0";
console.log(process.argv);
// const client = net.createConnection(port, "localhost", () => {
//   if (!process.argv[2]) {
//     process.stdout.write("what the fuck am i doing");
//     process.exit();
//   }

//   process.argv.forEach((value, index) => {
//     let wantedFile = process.argv[2];
//     let indexOfHTML = wantedFile.indexOf("/");
//     let requestedHTML = wantedFile.substring(indexOfHTML, wantedFile.length);
//     client.write(`GET ${requestedHTML} HTTP/ 1.1`);
//   });
// });

// client.connect(8080, "72.130.44.209"),
//   function() {
//     console.log("Connected");
//     client.write("bingoBango");
//     process.stdin.pipe(client);
//   };

// client.on("data", function(data) {
//   console.log("Recieved: " + data.toString());
// });

// client.on("end", function() {
//   console.log("Connection closed");
// });

// client.on("error", function(err) {
//   console.log(err);
//   process.exit();
// });
