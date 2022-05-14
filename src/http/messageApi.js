import jwtDecode from "jwt-decode";
import { $authHost, $host } from ".";

export const getMessages = async () => {
	const { data } = await $authHost.get("api/message/");
	return data;
};

export const getInfoSender = async (messageInfo) => {
	const { data } = await $host.post("api/message/info", messageInfo);
	return data;
};

export const confirm = async (messageInfo) => {
	const { data } = await $host.post("api/message/confrim", messageInfo);
	return data;
};

export const getMessagesCount = async () => {
	const { data } = await $authHost.get("api/message/count");
	return data;
};
