import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Search from "../pages/Search";

function AppRouter() {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/search" element={<Search />} />
		</Routes>
	);
}

export default AppRouter;
