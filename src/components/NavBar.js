import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Context } from "../index";
import "../css/NavBar.css";
import CreateCard from "../components/Modals/CreateCard";
import { Badge } from "@mui/material";
import { Email, ShoppingCart } from "@mui/icons-material";
import { getBasketForMessages } from "../http/basketApi";
import { getMessagesCount } from "../http/messageApi";

export const NavBar = observer(() => {
	const { userStore } = useContext(Context);
	const navigate = useNavigate();
	const [modalVisible, setModalVisible] = useState(false);
	const [messageBasket, setVessageBasket] = useState(0);
	const [message, setMessage] = useState(0);

	useEffect(() => {
		getBasketForMessages()
			.then((data) => {
				userStore.setBasketMessages(data);
			})
			.catch((error) => {
				alert(error.response.data.message);
			});
		getMessagesCount()
			.then((data) => {
				userStore.setUserMessages(data);
			})
			.catch((error) => {
				alert(error.response.data.message);
			});
	}, [userStore]);

	const setActive = ({ isActive }) => {
		return isActive ? "active" : "link";
	};

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
						{userStore.user.role === "ADMIN" ? (
							<Nav className="nav" style={{ maxWidth: "300px" }}>
								<NavLink to="/search" className={setActive}>
									Найти еду
								</NavLink>
								<NavLink to="/basket" className={setActive}>
									Заказы
								</NavLink>
								<NavLink to="/my_announs" className={setActive}>
									Мои объявления
								</NavLink>
							</Nav>
						) : (
							<Nav className="nav" style={{ maxWidth: "150px" }}>
								<NavLink to="/search" className={setActive}>
									Найти еду
								</NavLink>
								<NavLink to="/basket" className={setActive}>
									Заказы
								</NavLink>
							</Nav>
						)}
						<Nav>
							<div className="d-flex flex-row justify-content-center align-items-center">
								{userStore.user.role === "ADMIN" ? (
									<Button
										className="me-2"
										variant={"outline-light"}
										onClick={() => setModalVisible(true)}
									>
										Создать объявление
									</Button>
								) : null}

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
									<Badge
										badgeContent={userStore.basketMessages}
										color="secondary"
									>
										<ShoppingCart />
									</Badge>
								</Button>
								<Button
									className="ms-2 rounded-circle"
									variant="secondary"
									aria-label="message"
									onClick={() => navigate("/my_messages")}
								>
									<Badge
										badgeContent={userStore.userMessages}
										color="secondary"
									>
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
