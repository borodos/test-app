import jwtDecode from "jwt-decode";
import { $authHost, $host } from ".";

export const announCreate = async (announ) => {
	const { data } = await $authHost.post("api/announ", announ);
	return data;
};

export const announGetAll = async () => {
	const { data } = await $authHost.get("api/announ");
	return data;
};

export const announDelete = async (announ) => {
	const { data } = await $authHost.post("api/announ/delete", announ);
	return data;
};

export const announGetAllForUser = async () => {
	const { data } = await $authHost.get("api/announ/user_announs");
	return data;
};
