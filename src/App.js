import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
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
		check()
			.then((data) => {
				user.setUser(data);
				user.setIsAuth(true);
			})
			.finally(() => setLoading(false));
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
