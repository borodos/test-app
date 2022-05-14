import React, { useContext, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Context } from "..";
import {
	confirm,
	getInfoSender,
	getMessages,
	getMessagesCount,
} from "../http/messageApi";
import { SnackbarConfirmOrder } from "./Snackbar";

export const Message = ({ messageInfo, setMessages }) => {
	const [infoUser, setInfoUser] = useState({});
	const { userStore } = useContext(Context);

	const [show, setShow] = useState(false);
	const toggleShow = () => setShow(!show);

	useEffect(() => {
		getInfoSender(messageInfo)
			.then((data) => {
				setInfoUser(data);
			})
			.catch((error) => {
				alert(error.response.data.message);
			});
	}, []);

	const confirmOrder = () => {
		confirm(messageInfo).then(() => {
			getMessages()
				.then((data) => {
					setMessages(data);
				})
				.catch((error) => {
					alert(error.response.data.message);
				});
			getMessagesCount()
				.then((data) => {
					userStore.setUserMessages(data);
				})
				.catch((error) => {
					alert(error.response.data.message);
				});
		});
		toggleShow();
	};

	return (
		<div className="w-50 mt-4">
			<Card className="d-flex flex-row align-items-center ">
				<Card.Body>
					<Card.Title>Сообщение</Card.Title>
					<div className="card-name-person">
						<span>
							Заказчик: {infoUser.firstName} {infoUser.secondName}
						</span>
					</div>
					{/* <div className="card-phone-person">
						<span>Мобильный телефон заказчика: {infoAnnoun.phone}</span>
					</div> */}
				</Card.Body>
				<div>
					<Button
						className="m-2"
						variant="outline-warning"
						onClick={confirmOrder}
					>
						Подтвердить получение
					</Button>
				</div>
			</Card>
			<SnackbarConfirmOrder show={show} onClose={toggleShow} />
		</div>
	);
};
