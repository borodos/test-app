import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../..";
import { login, registration } from "../../http/userAPI";

export const AuthPage = observer(() => {
	// -- Получаем маршрут в строке запроса
	const location = useLocation();
	const isLoginPage = location.pathname === "/login";

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { user } = useContext(Context);

	const navigate = useNavigate();

	const click = async () => {
		if (!validateEmail(email)) {
			return alert("Неккоректный email");
		}
		try {
			let data;
			if (isLoginPage) {
				data = await login(email, password);
				console.log(data);
			} else {
				console.log("reg");
				data = await registration(email, password);
				console.log(data);
			}
			user.setUser(user);
			user.setIsAuth(true);
			navigate("/");
		} catch (error) {
			alert(error.response.data.message);
		}
	};

	// console.log("Обновление");
	// console.table("email: " + email, "password: " + password);

	function validateEmail(email) {
		setEmail(email);
		const regex =
			/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
		if (regex.test(email)) {
			return true;
		} else {
			return false;
		}
	}

	return (
		<Container className="d-flex justify-content-center align-items-center mt-5">
			<Card className="p-5 w-50">
				<h2 className="m-auto mb-2">
					{isLoginPage ? "Авторизация" : "Регистрация"}
				</h2>
				<Form className="d-flex flex-column">
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

						<Button variant="outline-dark" onClick={click}>
							{isLoginPage ? "Войти" : "Регистрация"}
						</Button>
					</div>
				</Form>
			</Card>
		</Container>
	);
});
