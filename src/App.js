import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Container, Spinner } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import { Context } from ".";
import { NavBar } from "./components/navbar/NavBar";
import { check } from "./http/userAPI";
import { AppRouter } from "./navigation/AppRouter";

export const App = observer(() => {
	const { user } = useContext(Context);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			check()
				.then((data) => {
					user.setUser(true);
					user.setIsAuth(true);
				})
				.finally(() => setLoading(false));
		}, 1000);
	});

	if (loading) {
		return (
			<Container className="d-flex justify-content-center align-items-center">
				<Spinner animation="border" role="status">
					<span className="visually-hidden">Loading...</span>
				</Spinner>
			</Container>
		);
	}

	return (
		<BrowserRouter>
			<NavBar />
			<AppRouter />
		</BrowserRouter>
	);
});
