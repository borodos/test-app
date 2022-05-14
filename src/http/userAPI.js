import jwtDecode from "jwt-decode";
import { $authHost, $host } from ".";

export const registration = async (email, password, firstName, secondName) => {
	const { data } = await $host.post("api/user/registration", {
		// -- Первый параметр - URL запроса, второй параметр - тело запроса
		email,
		password,
		firstName,
		secondName,
		role: "ADMIN",
	});
	localStorage.setItem("token", data.token);
	return jwtDecode(data.token);
};

export const login = async (email, password) => {
	const { data } = await $host.post("api/user/login", {
		email,
		password,
	});
	localStorage.setItem("token", data.token);
	return jwtDecode(data.token);
};

export const check = async () => {
	const { data } = await $authHost.get("api/user/auth");
	localStorage.setItem("token", data.token);
	return jwtDecode(data.token);
};

export const setImage = async (file) => {
	const { data } = await $authHost.post("api/user/setimage", file);
	return data;
};

export const getImage = async () => {
	const { data } = await $authHost.get("api/user/getimage");
	return data;
};

export const getUserInfo = async () => {
	const { data } = await $authHost.get("api/user/getuser");
	return data;
};
