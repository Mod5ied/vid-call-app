import { Peer } from "peerjs";
import { useState } from "react";
import { BrowserRouter, Route, Routes, Router, Navigate } from "react-router-dom";
import Homepage from "./views/home/homepage";
import MeetRoom from "./views/room/meet_room";

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/afrimeet" replace />} />
				<Route element={<Homepage  />} path="/afrimeet" />
				<Route element={<MeetRoom />} path="/afrimeet/room/:id" />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
