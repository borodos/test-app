import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { takeBasket } from "../http/basketApi";
import "../css/BasketPage.css";

function BasketPage() {
	let [basketUser, setBasketUser] = useState(0);

	useEffect(() => {
		takeBasket().then((basketId) => {
			setBasketUser(basketId);
		});
	}, [basketUser]);

	return (
		<Container className="flex-grow-1">
			<div>Basket {basketUser}</div>
		</Container>
	);
}

export default BasketPage;
