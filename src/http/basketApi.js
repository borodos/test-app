import { $authHost, $host } from ".";

export const addToBasket = async (announInfo) => {
	const { data } = await $authHost.post("api/basket/", announInfo);
	return data;
};

export const getBasket = async () => {
	const { data } = await $authHost.get("api/basket/");
	return data;
};

export const deleteOrderBasket = async (orderInfo) => {
	const { data } = await $authHost.post("api/basket/delete", orderInfo);
	return data;
};

export const getBasketForMessages = async () => {
	const { data } = await $authHost.get("api/basket/orders");
	return data;
};

export const getInfoAnnoun = async (orderInfo) => {
	const { data } = await $host.post("api/basket/info", orderInfo);
	return data;
};
