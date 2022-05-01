import React, { useContext } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Context } from "../..";
import Image from "../../img/398721.jpg";

function ProfilePage() {
	const { user } = useContext(Context);

	return (
		<Container className="main-container">
			<Card style={{ width: "50%" }} className="p-3">
				<Card.Title>Мой профиль</Card.Title>
				<Card.Body className="border p-2 d-flex flex-row justify-content-between">
					<div>
						<Card.Img variant="top" src={Image} style={{ maxWidth: "200px" }} />
						<div className="border p-1">
							<div>
								Логин: <span>{user.user.email}</span>
							</div>
							<div>
								ID: <span>{user.user.id}</span>
							</div>
						</div>
					</div>
					<div className="information me-5">
						<div>
							<span className="fw-bold fst-italic">Имя:</span>
							&nbsp;
							<span>{user.user.email}</span>
						</div>
						<div>
							<span className="fw-bold fst-italic">Отчество:</span>
							&nbsp;
							<span>{user.user.email}</span>
						</div>
						<div>
							<span className="fw-bold fst-italic">Фамилия:</span>
							&nbsp;
							<span>{user.user.email}</span>
						</div>
					</div>
				</Card.Body>
				<div className="d-flex flex-row">
					<Button className="mt-2 w-25 ms-auto" variant="primary">
						Выйти
					</Button>
				</div>
			</Card>
		</Container>
	);
}

export default ProfilePage;
