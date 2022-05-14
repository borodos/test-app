import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { getBasket } from "../http/basketApi";
import "../css/BasketPage.css";
import { Context } from "..";
import { Order } from "../components/Order";
import { observer } from "mobx-react-lite";
import {
	SnackbarConfirmOrder,
	SnackbarDeleteOrder,
} from "../components/Snackbar";

export const BasketPage = observer(() => {
	const { basketStore } = useContext(Context);
	const [showSnackDelete, setShowSnackDelete] = useState(false);
	const toggleShowDelete = () => setShowSnackDelete(!showSnackDelete);
	const [showSnackConfirm, setShowSnackConfirm] = useState(false);
	const toggleShowConfirm = () => setShowSnackConfirm(!showSnackConfirm);

	useEffect(() => {
		getBasket()
			.then((data) => {
				basketStore.setOrders(data);
			})
			.catch((error) => {
				alert(error.response.data.message);
			});
	}, [basketStore]);

	return (
		<Container className="flex-grow-1 p-4">
			{basketStore.orders.map((value, index) => (
				<Order
					key={`${value}-${index}`}
					orderInfo={value}
					orderId={index + 1}
					showDelete={showSnackDelete}
					onCloseDelete={toggleShowDelete}
					show={showSnackConfirm}
					onCloseConfirm={toggleShowConfirm}
				/>
			))}
			<SnackbarDeleteOrder
				showDelete={showSnackDelete}
				onCloseDelete={toggleShowDelete}
			/>
			<SnackbarConfirmOrder
				show={showSnackConfirm}
				onCloseConfirm={toggleShowConfirm}
			/>
		</Container>
	);
});
