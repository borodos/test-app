import React, { useContext, useRef, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import ImageLoader from "react-imageloader";
import { Context } from "../..";
import { setImage } from "../../http/userAPI";
import Image from "../../img/398721.jpg";
import Image1 from "../../img/anonim.jpg";

function ImageProfile({ show, onHide }) {
	const { userStore } = useContext(Context);
	const [file, setFile] = useState();
	const [profileImg, setProfileImg] = useState({});
	const imgRef = useRef(null);

	const imgErrorLoad = () => {
		const a = imgRef.current.style;
		a.display = "none";
	};

	const selectFile = (event) => {
		setFile(event.target.files[0]);
		const reader = new FileReader();
		reader.onload = () => {
			if (reader.readyState === 2) {
				setProfileImg(reader.result);
			}
		};
		reader.readAsDataURL(event.target.files[0]);
	};

	const handleChange = async () => {
		const formData = new FormData();
		formData.append("img", file);
		let data = await setImage(formData);
		userStore.userInfo.img = data;
	};

	return (
		<Modal
			show={show}
			onHide={onHide}
			size="sl"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Фотография пользователя
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className="d-flex flex-column align-items-center">
				<div
					className="border border-2 rounded-3 ms-auto me-auto "
					style={{ width: "240px", height: "200px" }}
				>
					<img
						ref={imgRef}
						style={{ width: "inherit", height: "inherit" }}
						src={profileImg}
						alt=""
						onError={imgErrorLoad}
					/>
				</div>
				<div className="w-50 mt-3">
					<Form id="formImage">
						<Form.Control
							onChange={selectFile}
							accept=".png, .jpg, .gif"
							type="file"
						/>
					</Form>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="outline-danger" onClick={onHide}>
					Закрыть
				</Button>
				<Button
					form="formImage"
					variant="outline-success"
					onClick={handleChange}
				>
					Добавить
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default ImageProfile;
