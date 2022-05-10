import { $authHost } from ".";

export const takeBasket = async () => {
	const { data } = await $authHost.post("api/basket/");
	return data;
};
