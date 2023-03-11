import React from "react";
import { useNavigate } from "react-router-dom";

const MeetRoom = () => {
	const navigate = useNavigate();
	const handleDisconnect = () => {
		navigate("/afrimeet");
	};
	return (
		<>
			<div id="room-container"></div>
			<button id="room-end-btn" onClick={handleDisconnect}>End Meeting</button>
		</>
	);
};

export default MeetRoom;
