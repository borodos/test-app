import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { announDelete } from "../http/announApi";

export const UserAnnouns = ({ announInfo, updateUserAnnounsPage }) => {
	const deleteAnnounUser = () => {
		announDelete(announInfo).then(() => {
			updateUserAnnounsPage();
		});
	};

	return (
		<Container className="flex-grow-1 p-2">
			<Card className="d-flex flex-row align-items-center w-50">
				<Card.Body>
					<Card.Title>Объявление №{announInfo.id}</Card.Title>
					<div className="card-name-person">
						<span>Заголовок: {announInfo.title}</span>
					</div>
					<div className="card-phone-person">
						<span>Описание: {announInfo.description}</span> &nbsp;
					</div>
					<div className="card-name-object">
						<span>Дата создания: {announInfo.createdAt}</span> &nbsp;
					</div>
				</Card.Body>
				<div>
					<Button
						className="m-2"
						variant="outline-danger"
						onClick={deleteAnnounUser}
					>
						Удалить
					</Button>
				</div>
			</Card>
		</Container>
	);
};
