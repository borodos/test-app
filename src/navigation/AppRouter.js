import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Search from "../pages/Search";
import Basket from "../pages/Basket";
import Profile from "../pages/Profile";

function AppRouter() {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/search" element={<Search />} />
			<Route path="/basket" element={<Basket />} />
			<Route path="/profile" element={<Profile />} />
		</Routes>
	);
}

export default AppRouter;
