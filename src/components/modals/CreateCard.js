import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

function CreateCard({ show, onHide }) {
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
				<Form>
					<Form.Control className="mb-3" placeholder="Ваше ФИО..." />
					<Form.Control className="mb-3" placeholder="Номер телефона..." />
					<Form.Control className="mb-3" placeholder="Название ресторана..." />
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="outline-danger" onClick={onHide}>
					Закрыть
				</Button>
				<Button variant="outline-success">Добавить</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default CreateCard;
