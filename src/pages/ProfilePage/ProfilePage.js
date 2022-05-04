import React, { useContext, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Context } from "../..";
import Image from "../../img/anonim.jpg";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { IconButton } from "@mui/material";
import "./ProfilePage.css";
import { Input } from "@mui/icons-material";

function ProfilePage() {
	const { userStore } = useContext(Context);
	const navigate = useNavigate();
	const [overlay, setOverlay] = useState(false);

	console.log(overlay);
	const logOut = () => {
		userStore.setUser({});
		userStore.setIsAuth(false);
		navigate("/");
	};

	return (
		<Container className="main-container">
			<Card style={{ width: "50%" }} className="p-3">
				<Card.Title>Мой профиль</Card.Title>
				<Card.Body className="border p-2 d-flex flex-row justify-content-between">
					<div className="border">
						<div className="profile-img">
							{overlay ? (
								<input
									className="profile-img-overlay"
									type="file"
									onMouseLeave={() => setOverlay(false)}
								/>
							) : null}
							<Card.Img
								variant="top"
								src={Image}
								style={{ width: "200px" }}
								onMouseEnter={() => setOverlay(true)}
							/>
						</div>
						<div className="border p-2">
							<div>
								Логин: <span>{userStore.user.email}</span>
							</div>
							<div>
								ID: <span>{userStore.user.id}</span>
							</div>
						</div>
						<IconButton title="Добавить фото">
							<AddAPhotoIcon />
						</IconButton>
						<input
							id="input-file"
							type="file"
							onMouseLeave={() => setOverlay(false)}
						/>
						<label for="input-file">Выбери файл!</label>
					</div>
					<div className="information me-5">
						<div>
							<span className="fw-bold fst-italic">Имя:</span>
							&nbsp;
							<span>{userStore.user.email}</span>
						</div>
						<div>
							<span className="fw-bold fst-italic">Отчество:</span>
							&nbsp;
							<span>{userStore.user.email}</span>
						</div>
						<div>
							<span className="fw-bold fst-italic">Фамилия:</span>
							&nbsp;
							<span>{userStore.user.email}</span>
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
		</Container>
	);
}

export default ProfilePage;
