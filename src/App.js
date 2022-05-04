import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import { Context } from ".";
import { NavBar } from "./components/navbar/NavBar";
import { check } from "./http/userAPI";
import { AppRouter } from "./navigation/AppRouter";

// const API_KEY = process.env.REACT_APP_API_KEY;

export const App = observer(() => {
	const { userStore } = useContext(Context);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		check()
			.then((data) => {
				userStore.setUser(data);
				userStore.setIsAuth(true);
			})
			.finally(() => setLoading(false));
	});

	console.log("APP обновился");

	if (loading) {
		return (
			<Spinner
				animation="border"
				role="status"
				style={{ position: "fixed", top: "50%", left: "50%" }}
			>
				<span className="visually-hidden">Loading...</span>
			</Spinner>
		);
	}

	return (
		<BrowserRouter>
			<NavBar />
			<AppRouter />
		</BrowserRouter>
	);
});
