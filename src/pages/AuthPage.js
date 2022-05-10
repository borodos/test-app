import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Context } from "..";
import { getUserInfo, login, registration } from "../http/userAPI";
import "../css/AuthPage.css";

export const AuthPage = observer(() => {
	// -- Хуки
	const location = useLocation(); // -- Получаем маршрут в строке запроса
	const isLoginPage = location.pathname === "/login";
	const [email, setEmail] = useState(""); // -- Ввод почты
	const [firstName, setFirstName] = useState("");
	const [secondName, setSecondName] = useState("");
	const [password, setPassword] = useState(""); // -- Ввод пароля
	const { userStore } = useContext(Context); // -- Берем из контекста пользователя
	const navigate = useNavigate(); // -- Обычная навигация

	// -- "Отправка" формы
	const sendReqLogAndReg = async () => {
		if (!validateEmail) {
			return alert("Неккоректный email");
		}
		try {
			let data;
			if (isLoginPage) {
				data = await login(email, password);
			} else {
				data = await registration(email, password, firstName, secondName);
			}
			let userinfo = await getUserInfo();
			userStore.setUser(data);
			userStore.setUserInfo(userinfo);
			userStore.setIsAuth(true);
			navigate("/");
		} catch (error) {
			alert(error.response.data.message);
		}
	};

	function validateEmail(email) {
		const regex =
			/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
		if (regex.test(email)) {
			return true;
		} else {
			setEmail("");
			return false;
		}
	}

	return (
		<Container className="d-flex justify-content-center align-items-center flex-grow-1 mt-5">
			<Card className="p-5 w-50">
				<h2 className="m-auto mb-2">
					{isLoginPage ? "Авторизация" : "Регистрация"}
				</h2>
				<Form className="d-flex flex-column">
					{isLoginPage ? (
						<>
							<Form.Control
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="mt-2"
								placeholder="Введите email"
								id="inputEmail3"
							/>
							<Form.Control
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="mt-2"
								placeholder="Введите пароль"
								type="password"
							/>
						</>
					) : (
						<>
							<Form.Control
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="mt-2"
								placeholder="Введите email"
								id="inputEmail3"
							/>
							<Form.Control
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
								className="mt-2"
								placeholder="Введите имя"
								id="inputEmail3"
							/>
							<Form.Control
								value={secondName}
								onChange={(e) => setSecondName(e.target.value)}
								className="mt-2"
								placeholder="Введите фамилию"
								id="inputEmail3"
							/>
							<Form.Control
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="mt-2"
								placeholder="Введите пароль"
								type="password"
							/>
						</>
					)}
					<div className="d-flex justify-content-between mt-3 pl-3 pr-3 text-nowrap">
						{isLoginPage ? (
							<div className="d-flex">
								Нет аккаунта? &nbsp;
								<NavLink to={"/registration"}>Зарегистрируйся</NavLink>
							</div>
						) : (
							<div className="d-flex">
								Есть аккаунт? &nbsp;
								<NavLink to={"/login"}>Войти</NavLink>
							</div>
						)}

						<Button variant="outline-dark" onClick={sendReqLogAndReg}>
							{isLoginPage ? "Войти" : "Регистрация"}
						</Button>
					</div>
				</Form>
			</Card>
		</Container>
	);
});
