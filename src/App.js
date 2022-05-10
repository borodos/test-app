import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import { Context } from ".";
import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/navbar/NavBar";
import { check, getUserInfo } from "./http/userAPI";
import { AppRouter } from "./navigation/AppRouter";
import "./css/Main.css";
// const API_KEY = process.env.REACT_APP_API_KEY;

export const App = observer(() => {
	const { userStore } = useContext(Context);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		try {
			check()
				.then((data) => {
					userStore.setUser(data);
					userStore.setIsAuth(true);
				})
				.finally(() => setLoading(false));
			getUserInfo().then((data) => {
				userStore.setUserInfo(data);
			});
		} catch (error) {
			console.log("Ошибка");
		}
	}, []);

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
		<div className="wrapper">
			<BrowserRouter>
				<NavBar />
				<AppRouter />
				<Footer />
			</BrowserRouter>
		</div>
	);
});
