import React, { useContext, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Context } from "..";
import {
	deleteOrderBasket,
	getBasket,
	getBasketForMessages,
	getInfoAnnoun,
} from "../http/basketApi";

export const Order = ({
	orderInfo,
	orderId,
	onCloseDelete,
	onCloseConfirm,
}) => {
	const [info, setInfo] = useState({});
	const { basketStore } = useContext(Context);
	const { userStore } = useContext(Context);

	useEffect(() => {
		getInfoAnnoun(orderInfo).then((data) => {
			setInfo(data);
		});
	}, []);

	const deleteOrder = () => {
		deleteOrderBasket(orderInfo).then(() => {
			getBasket().then((data) => {
				basketStore.setOrders(data);
			});
			getBasketForMessages().then((data) => {
				userStore.setBasketMessages(data);
			});
			onCloseDelete();
		});
	};

	//FIXME: Изменить логику
	const confirmOrder = () => {
		deleteOrderBasket(orderInfo)
			.then(() => {
				getBasket().then((data) => {
					basketStore.setOrders(data);
				});
				getBasketForMessages().then((data) => {
					userStore.setBasketMessages(data);
				});
				onCloseConfirm();
			})
			.catch((error) => {
				alert(error.response.data.message);
			});
	};

	return (
		<div className="mt-4">
			<Card className="d-flex flex-row align-items-center ">
				<Card.Body>
					<Card.Title>Заказ номер №{orderId}</Card.Title>
					<div className="card-name-person">
						<span>ФИО владельца: {info.person}</span>
					</div>
					<div className="card-phone-person">
						<span>Мобильный телефон: {info.phone}</span>
					</div>
					<div className="card-name-object">
						<span>Название объекта: {info.nameObject}</span>
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
					<Button
						className="m-2"
						variant="outline-warning"
						onClick={confirmOrder}
					>
						Подтвердить получение
					</Button>
				</div>
			</Card>
		</div>
	);
};
