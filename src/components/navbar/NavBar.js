import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Context } from "../../index";
import "../navbar/navbar.css";
import CreateCard from "../modals/CreateCard";

export const NavBar = observer(() => {
	function setActive({ isActive }) {
		return isActive ? "active" : "link";
	}

	const { user } = useContext(Context);

	const navigate = useNavigate();

	const [modalVisible, setModalVisible] = useState(false);

	const logOut = () => {
		user.setUser({});
		user.setIsAuth(false);
		navigate("/");
	};

	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand>
					<Link to="/" className="title">
						FoodSher
					</Link>
				</Navbar.Brand>

				{user._isAuth ? (
					<>
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
							<Button
								className="me-2"
								variant={"outline-light"}
								onClick={() => setModalVisible(true)}
							>
								Создать объявление
							</Button>

							<Button variant={"outline-light"} onClick={logOut}>
								Выйти
							</Button>
						</Nav>
					</>
				) : (
					<Nav className="ml-auto">
						<Button
							variant={"outline-light"}
							onClick={() => navigate("/login")}
						>
							Авторизация
						</Button>
					</Nav>
				)}

				<CreateCard show={modalVisible} onHide={() => setModalVisible(false)} />
			</Container>
		</Navbar>
	);
});
