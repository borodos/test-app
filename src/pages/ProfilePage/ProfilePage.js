import React, { useContext, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Context } from "../..";

function ProfilePage() {
	const { userStore } = useContext(Context);

	const navigate = useNavigate();

	const logOut = () => {
		userStore.setUser({});
		userStore.setIsAuth(false);
		localStorage.removeItem("token");
		navigate("/");
	};

	return (
		<Card style={{ width: "50%" }} className="m-auto mt-5">
			<Card.Body>
				<Card.Title>Мой профиль</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">
					{userStore.user.email}
				</Card.Subtitle>
				<Card.Text className="border p-1">
					<div>
						<span className="fw-bold">Ваше ФИО:</span> &nbsp;
						<label>Петров В.А.</label>
					</div>
					<div>
						<span className="fw-bold">Почта:</span> &nbsp;
						<label>{userStore.user.email}</label>
					</div>
					<div>
						<span className="fw-bold">Организация:</span> &nbsp;
						<label>Организация</label>
					</div>
				</Card.Text>
				<Button className="btn btn-danger" onClick={logOut}>
					Выйти
				</Button>
			</Card.Body>
		</Card>
	);
}

export default ProfilePage;
