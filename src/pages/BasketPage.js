import React, { useEffect, useState } from "react";
import { takeBasket } from "../http/basketApi";

function BasketPage() {
	let [basketUser, setBasketUser] = useState(0);

	useEffect(() => {
		takeBasket().then((basketId) => {
			setBasketUser(basketId);
		});
	}, [basketUser]);

	return <div>Basket {basketUser}</div>;
}

export default BasketPage;
