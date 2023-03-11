const Meeting = require("./src/meeting/meetingLink.controller.js");
const { getLink, validateLink } = new Meeting();
const { Server } = require("socket.io");
const express = require("express");
const cors = require('cors')
const app = express();
const server = require("http").Server(app);
const io = new Server(server);

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/link", [getLink]);
app.get("/:room", [validateLink]);

io.on("connection", (socket) => {
	socket.on("join-room", (roomID, userID) => {
		socket.join(roomID);
		socket.to(roomID).emit("user-connected", userID);
	});
});

server.listen(5000, () => console.log(`Local: ${"http://localhost:5000"}`));
