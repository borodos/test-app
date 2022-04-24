import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./css/link.css";

function setActive({ isActive, className }) {
	return isActive ? "active" : "link";
}

function NavBar() {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="/">FoodSher</Navbar.Brand>
				<Nav className="ml-auto nav">
					<NavLink to="/search" className={setActive}>
						Найти еду
					</NavLink>
					<NavLink to="/basket" className={setActive}>
						Заказы
					</NavLink>
					<NavLink to="/profile" className={setActive}>
						Профиль
					</NavLink>
				</Nav>
				<Nav className="ml-auto">
					<Button variant={"outline-light"}>Авторизация</Button>
				</Nav>
			</Container>
		</Navbar>
	);
}

export default NavBar;
