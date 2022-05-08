import jwtDecode from "jwt-decode";
import { $authHost, $host } from ".";

export const announCreate = async (announ) => {
	const { data } = await $host.post("api/announ/", announ);
	return data;
};

export const announGetAll = async () => {
	const { data } = await $host.get("api/announ/");
	return data;
};
