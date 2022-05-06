import { useState } from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";

function RegPage() {
	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		const form = event.target;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	};

	return (
		<Container className="d-flex justify-content-center align-items-center mt-5">
			<Card className="p-5 w-50">
				<h2 className="m-auto mb-2">Регистрация</h2>
				<Form noValidate validated={validated} onSubmit={handleSubmit}>
					<Form.Group controlId="validationCustom01">
						<Form.Label>Имя</Form.Label>
						<Form.Control required type="text" placeholder="Имя" />
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					</Form.Group>
					<Form.Group controlId="validationCustom02">
						<Form.Label>Фамилия</Form.Label>
						<Form.Control required type="text" placeholder="Фамилия" />
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					</Form.Group>
					<Form.Group controlId="validationCustom02">
						<Form.Label></Form.Label>
						<Form.Control
							// value={email}
							// onChange={(e) => setEmail(e.target.value)}
							required
							className="mt-2"
							placeholder="Введите email"
							id="inputEmail3"
						/>
						<Form.Control
							required
							// value={password}
							// onChange={(e) => setPassword(e.target.value)}
							className="mt-2"
							placeholder="Введите пароль"
							type="password"
						/>
					</Form.Group>
					<Row className="mb-3"></Row>
					<Button type="submit">Submit form</Button>
				</Form>
			</Card>
		</Container>
	);
}

export default RegPage;
