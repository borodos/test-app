import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

function NavBar() {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="/">FoodSher</Navbar.Brand>
				<Nav className="ml-auto">
					<Nav.Link href="/search">Найти еду</Nav.Link>
					<Nav.Link href="/basket">Мои заказы</Nav.Link>
					<Nav.Link href="/profile">Профиль</Nav.Link>
				</Nav>
				<Nav className="ml-auto">
					<Button variant={"outline-light"}>Авторизация</Button>
				</Nav>
			</Container>
		</Navbar>
	);
}

export default NavBar;
