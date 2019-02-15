//net  server stuff
const net = require("net");
const funk = require("./myPage.js");
const error = require("./error.js");
const helium = require("./helium.js");
const hydrogen = require("./hydrogen.js");
const home = require("./index.js");
const styles = require("./styles.js");
var four0four = funk.four0four;

const server = net.createServer(socket => {
  //   console.log("client connected");

  socket.on("data", data => {
    // console.log(data.toString().split(" ")[0]);
    let method = data.toString().split(" ")[0];
    let address = data.toString().split(" ")[1];
    let request = data.toString().split(`\r\n`);
    let m = request[0].split(" ");
    console.log(data.toString().split(" "));
    console.log("m[2]", m[2]);
    if (method === "GET") {
      if (address === "/") {
        socket.write(
          `HTTP/1.1 \n new Date()` + Date() + `\n\n <html>${home}<html>`
        );
      } else if (address === "/hydrogen.html") {
        socket.write(`HTTP/1.1 200 OK \n\n <html>${hydrogen}<html>`);
      } else if (address === "/helium.html") {
        socket.write(`HTTP/1.1 200 OK \n\n <html>${helium}<html>`);
      } else {
        socket.write(`HTTP/1.1 200 OK \n\n <html>${error}<html>`);
      }
    }

    socket.write(
      `<html><head> <link href=${styles} rel ='stylesheet'></head></html>`
    );

    socket.end();
  });
  //   socket.pipe(socket);
});
server.listen(8080, () => {
  console.log("INCOMING");
});
server.on("error", err => {
  throw err;
});

//http server stuffasdfad

// const http = require("http");

// const hostname = "127.0.0.1";
// const port = 8080;

// const server2 = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("jiggaWhat\n");
// });

// server2.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
