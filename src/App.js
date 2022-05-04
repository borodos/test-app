import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
<<<<<<< HEAD
import { Container, Spinner } from "react-bootstrap";
=======
import { Spinner } from "react-bootstrap";
>>>>>>> master
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
<<<<<<< HEAD
				user.setUser(data);
				user.setIsAuth(true);
=======
				userStore.setUser(data);
				userStore.setIsAuth(true);
>>>>>>> master
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
