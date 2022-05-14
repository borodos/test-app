import React, { useContext, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Context } from "..";
import ImageAnonim from "../img/anonim.jpg";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { IconButton } from "@mui/material";
import "../css/ProfilePage.css";
import ImageProfile from "../components/Modals/ImageProfile";
import { observer } from "mobx-react-lite";

//FIXME: Исправить инфу о пользователе

export const ProfilePage = observer(() => {
	const { userStore } = useContext(Context);
	const navigate = useNavigate();
	const [modalVisible, setModalVisible] = useState(false);

	const logOut = () => {
		userStore.setUser({});
		userStore.setUserInfo({});
		userStore.setIsAuth(false);
		localStorage.removeItem("token");
		navigate("/");
	};

	return (
		<Container className="main-container">
			<Card style={{ width: "50%" }} className="p-3">
				<Card.Title>Мой профиль</Card.Title>
				<Card.Body className="border p-2 d-flex flex-row justify-content-between">
					<div className="profile border">
						<div className="profile-img d-flex flex-column">
							{userStore.userInfo.img ? (
								<Card.Img
									variant="top"
									src={
										process.env.REACT_APP_SERVER_URL + userStore.userInfo.img
									}
									style={{ width: "200px" }}
								/>
							) : (
								<Card.Img
									variant="top"
									src={ImageAnonim}
									style={{ width: "200px" }}
								/>
							)}
							<IconButton
								title="Добавить фото"
								onClick={() => {
									setModalVisible(true);
								}}
							>
								<AddAPhotoIcon />
							</IconButton>
						</div>
						<div className="border p-2">
							<div>
								Логин: <span>{userStore.user.email}</span>
							</div>
							<div>
								ID: <span>{userStore.user.id}</span>
							</div>
						</div>
					</div>
					<div className="information me-5">
						<div>
							<span className="fw-bold fst-italic">Имя:</span>
							&nbsp;
							<span>{userStore.userInfo.firstName}</span>
						</div>
						{/* <div>
							<span className="fw-bold fst-italic">Отчество:</span>
							&nbsp;
							<span>{userStore.user.email}</span>
						</div> */}
						<div>
							<span className="fw-bold fst-italic">Фамилия:</span>
							&nbsp;
							<span>{userStore.userInfo.secondName}</span>
						</div>
					</div>
				</Card.Body>
				<div className="d-flex flex-row">
					<Button
						className="mt-2 w-25 ms-auto btn-danger"
						variant="primary"
						onClick={logOut}
					>
						Выйти
					</Button>
				</div>
			</Card>
			<ImageProfile show={modalVisible} onHide={() => setModalVisible(false)} />
		</Container>
	);
});
