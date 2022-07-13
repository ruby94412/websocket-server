const WebSocketServer = require('ws');
const express = require('express');
// Creating a new websocket server
const wss = new WebSocketServer.Server({port: 8080, host: "192.168.0.51"})
const app = express();
app.listen(8000, () => {
  // const host = app.address().address;
  // const port = app.address().port;
  console.log("node back end is running")
});
// Creating connection using websocket
wss.on("connection", ws => {
    console.log("new client connected");
    // sending message
    ws.on("message", data => {
        console.log(`Client has sent us: ${data}`)
    });
    // handling what to do when clients disconnects from server
    ws.on("close", () => {
        console.log("the client has connected");
    });
    // handling client connection error
    ws.onerror = function () {
        console.log("Some Error occurred")
    }
});
console.log("The WebSocket server is running on port 8080");