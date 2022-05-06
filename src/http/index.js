import axios from "axios";

const $host = axios.create({
	// -- Указываем url, куда будут отправляться запросы
	baseURL: process.env.REACT_APP_SERVER_URL,
});

const $authHost = axios.create({
	baseURL: process.env.REACT_APP_SERVER_URL,
});

// -- Так как в случае второго экземпляра нужно к каждому запросу автоматически подставлять токен, создадим интерцептор
// Interceptor - это просто функция, которая параметром принимает конфиг
const authInterceptor = (config) => {
	config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
	return config;
};

// -- Добавляем экземпляру перехватчик (interceptors) для запросов (request)
$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
