import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { getBasket } from "../http/basketApi";
import "../css/BasketPage.css";
import { Context } from "..";
import { Order } from "../components/Order";
import { observer } from "mobx-react-lite";
import { SnackbarDeleteOrder } from "../components/Snackbar";

export const BasketPage = observer(() => {
	const { basketStore } = useContext(Context);
	const [showSnack, setShowSnack] = useState(false);
	const toggleShow = () => setShowSnack(!showSnack);

	useEffect(() => {
		getBasket()
			.then((data) => {
				basketStore.setOrders(data);
			})
			.catch((error) => {
				alert(error.response.data.message);
			});
	}, []);

	return (
		<Container className="flex-grow-1 p-4">
			{basketStore.orders.map((value, index) => (
				<Order
					key={`${value}-${index}`}
					orderInfo={value}
					orderId={index + 1}
					show={showSnack}
					onClose={toggleShow}
				/>
			))}
			<SnackbarDeleteOrder show={showSnack} onClose={toggleShow} />
		</Container>
	);
});
