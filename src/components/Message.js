import React from "react";
import { Button, Card } from "react-bootstrap";

export const Message = () => {
	return (
		<div className="w-50 mt-4">
			<Card className="d-flex flex-row align-items-center ">
				<Card.Body>
					<Card.Title>Сообщение</Card.Title>
					<div className="card-name-person">
						<span>Заказчик:</span> &nbsp;
						<span>Петров В.А.</span>
					</div>
					<div className="card-phone-person">
						<label>Мобильный телефон заказчика:</label> &nbsp;
						<span>+79809065849</span>
					</div>
				</Card.Body>
				<div>
					<Button
						className="m-2"
						variant="outline-warning"
						// onClick={deleteOrder}
					>
						Подтвердить получение
					</Button>
				</div>
			</Card>
		</div>
	);
};
