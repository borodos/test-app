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

	const setActiveProfile = ({ isActive }) => {
		return isActive ? "active-profile" : "link";
	};

	const { userStore } = useContext(Context);

	const navigate = useNavigate();

	const [modalVisible, setModalVisible] = useState(false);

	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand>
					<Link to="/" className="title">
						FoodSher
					</Link>
				</Navbar.Brand>

				{userStore._isAuth ? (
					<>
						<Nav className="nav">
							<NavLink to="/search" className={setActive}>
								Найти еду
							</NavLink>
							<NavLink to="/basket" className={setActive}>
								Заказы
							</NavLink>
						</Nav>
						<div>
							<Button
								className="me-2"
								variant={"outline-light"}
								onClick={() => setModalVisible(true)}
							>
								Создать объявление
							</Button>

							<NavLink to="/profile" className={setActiveProfile}>
								{userStore.user.email}
							</NavLink>
						</div>
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
