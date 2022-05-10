import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Context } from "../../index";
import "../../css/NavBar.css";
import CreateCard from "../modals/CreateCard";
import { Badge } from "@mui/material";
import { Email, ShoppingCart } from "@mui/icons-material";

export const NavBar = observer(() => {
	const { userStore } = useContext(Context);
	const navigate = useNavigate();
	const [modalVisible, setModalVisible] = useState(false);

	function setActive({ isActive }) {
		return isActive ? "active" : "link";
	}

	const setActiveProfile = ({ isActive }) => {
		return isActive ? "active-profile" : "link";
	};

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
						<Nav>
							<div className="d-flex flex-row justify-content-center align-items-center">
								<Button
									className="me-2"
									variant={"outline-light"}
									onClick={() => setModalVisible(true)}
								>
									Создать объявление
								</Button>

								<div>
									<NavLink to="/profile" className={setActiveProfile}>
										{userStore.user.email}
									</NavLink>
								</div>
								<Button
									className="ms-2 rounded-circle"
									variant="secondary"
									aria-label="cart"
									onClick={() => navigate("/basket")}
								>
									<Badge badgeContent={4} color="secondary">
										<ShoppingCart />
									</Badge>
								</Button>
								<Button
									className="ms-2 rounded-circle"
									variant="secondary"
									aria-label="message"
								>
									<Badge badgeContent={4} color="secondary">
										<Email />
									</Badge>
								</Button>
							</div>
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
