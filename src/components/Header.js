import React from "react";
import "./css/header.css";

export const Header = () => {
	return (
		<div className="header-container">
			<div className="header-top">
				<div className="header-top-container">
					<nav>
						<a href="#">Зарегистрировать ресторан</a>
						<a href="#">Войти в аккаунт</a>
					</nav>
				</div>
			</div>

			<div className="header-bottom">
				<div className="header-bottom-container">
					<nav>
						<a href="#">Найти еду</a>
						<a href="#">Заказы</a>
						<a href="#">Профиль</a>
					</nav>
				</div>
			</div>
		</div>
	);
};
