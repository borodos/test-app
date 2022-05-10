import React, { useContext, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Context } from "..";
import {
	deleteOrderBasket,
	getBasket,
	getBasketForMessages,
} from "../http/basketApi";
import { SnackbarAddAnnoun } from "./Snackbar";

export const Order = ({ orderInfo, orderId, onClose }) => {
	const { basketStore } = useContext(Context);
	const { userStore } = useContext(Context);

	const deleteOrder = () => {
		deleteOrderBasket(orderInfo)
			.then(() => {
				getBasket().then((data) => {
					basketStore.setOrders(data);
				});
				getBasketForMessages().then((data) => {
					userStore.setBasketMessages(data);
				});
				onClose();
			})
			.catch((error) => {
				alert(error.response.data.message);
			});
	};

	return (
		<div className="order-container w-50 mt-4">
			<Card className="d-flex flex-row align-items-center ">
				<Card.Body>
					<Card.Title>Заказ номер №{orderId}</Card.Title>
					<div className="card-name-person">
						<span>ФИО владельца:</span> &nbsp;
						<span>Петров В.А.</span>
					</div>
					<div className="card-phone-person">
						<label>Мобильный телефон:</label> &nbsp;
						<span>+79809065849</span>
					</div>
					<div className="card-name-object">
						<span>Название объекта:</span> &nbsp;
						<span>Сладкие пирожки</span>
					</div>
				</Card.Body>
				<div>
					<Button
						className="m-2"
						variant="outline-danger"
						onClick={deleteOrder}
					>
						Отменить
					</Button>
				</div>
			</Card>
		</div>
	);
};
