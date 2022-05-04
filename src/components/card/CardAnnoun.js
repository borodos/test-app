import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./cardannoun.css";

function CardAnnoun() {
	const [card, setCard] = useState([
		{
			title: "Аппетитный хот-дог",
			description: "Хороший итальянский кофе и вкусные булочки<",
		},
	]);

	return (
		<div className="card-container">
			<div className="card-content-container">
				<div className="card-content">
					<Button className="w-25 btn-secondary">Нет акций</Button>
					<div className="card-main">
						<div className="card-title">
							<div className="card-title-bg">
								<h1 className="display-4 title-content">
									"Аппетитный хот-дог"
								</h1>
							</div>
						</div>
						<div className="card-description">
							<div className="card-description-bg">
								<h2 className="lead title-pg">
									Хороший итальянский кофе и вкусные булочки.
								</h2>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="card-info-container">
				<div className="card-info-content">
					<div className="card-common-info">
						<div className="card-name-person">
							<label>ФИО владельца:</label> &nbsp;
							<input
								type="text"
								readOnly
								id="person-info"
								value="Петров В.А."
								
							></input>
						</div>
						<div className="card-phone-person">
							<label>Мобильный телефон:</label> &nbsp;
							<input
								type="text"
								readOnly
								id="person-number"
								value="+79809065849"
								
							></input>
						</div>
						<div className="card-name-object">
							<label>Название объекта:</label> &nbsp;
							<input
								type="text"
								readOnly
								id="name-object"
								value="Сладкие пирожки"
								
							></input>
						</div>
					</div>
					<div className="card-search">
						<Button type="button" id="btn-announ-search">
							Найти на карте
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CardAnnoun;
