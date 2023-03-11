import React, { useState } from "react";
import io from "socket.io-client";
import axios from "axios";
import { Peer } from "peerjs";
import { NavigateFunction, useNavigate } from "react-router-dom";

const Homepage = () => {
	const [link, setLink] = useState();
	const navigateTo = useNavigate();
	const socket = io("http://localhost:5000", {
		transports: ["websocket", "polling"],
	});
	const peerNet = new Peer("undefined", {
		host: "/",
		port: 5001,
	});
	socket.on("user-connected", (userID) => {
		console.log("user is connected " + userID);
	});
	const handleFetchLink = async () => {
		try {
			setLink(await (await axios.get("http://localhost:5000/link")).data);
			link && navigateTo(`/afrimeet/room/${link}`);
		} catch (err) {
			console.log("error fetching link:", err);
			return err;
		}
	};

	peerNet.on("open", (roomId) => {
		socket.emit("join-room", `/afrimeet/room/${link}`, link);
	});
	return (
		<>
			<h1>Homepage</h1>
			<br />
			<button onClick={handleFetchLink}>Fetch Link</button>
			<br />
			<br />
			{/* <button onClick={handleJoinRoom}>Join Room</button> */}
		</>
	);
};

export default Homepage;
