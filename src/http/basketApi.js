import { $authHost } from ".";

export const takeBasket = async () => {
	const { data } = await $authHost.post("api/user/basket");
	return data;
};
