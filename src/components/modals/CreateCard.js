import React, { useContext, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Context } from "../..";
import { announCreate } from "../../http/announApi";

function CreateCard({ show, onHide }) {
	const { announStore } = useContext(Context);

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [phone, setPhone] = useState("");
	const [nameObject, setNameObject] = useState("");
	const [file, setFile] = useState("");

	const createCardAnnoun = async (e) => {
		const formData = new FormData();
		formData.append("title", title);
		formData.append("description", description);
		formData.append("phone", phone);
		formData.append("nameObject", nameObject);
		formData.append("img", file);
		let data = await announCreate(formData);
		console.log(data);
		announStore.setAnnouns(data);
		console.log(announStore.announs);
	};

	return (
		<Modal
			show={show}
			onHide={onHide}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Modal heading
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form id="announForm">
					<Form.Control
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						className="mb-3"
						placeholder="Заголовок..."
					/>
					<Form.Control
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						className="mb-3"
						placeholder="Описание..."
					/>
					<Form.Control
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						className="mb-3"
						placeholder="Номер телефона..."
					/>
					<Form.Control
						value={nameObject}
						onChange={(e) => setNameObject(e.target.value)}
						className="mb-3"
						placeholder="Название ресторана..."
					/>
					<Form.Control
						onChange={(e) => setFile(e.target.files[0])}
						className="mb-3"
						type="file"
					/>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="outline-danger" onClick={onHide}>
					Закрыть
				</Button>
				<Button
					form="announForm"
					variant="outline-success"
					onClick={createCardAnnoun}
				>
					Добавить
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default CreateCard;
