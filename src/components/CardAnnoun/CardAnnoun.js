import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Context } from "../..";
import "../../css/CardAnnoun.css";
import { addToBasket, getBasketForMessages } from "../../http/basketApi";
import { SnackbarAddToBasket } from "../Snackbar";
export const CardAnnoun = ({ announInfo }) => {
	const { userStore } = useContext(Context);

	const [show, setShow] = useState(false);
	const toggleShow = () => setShow(!show);

	const addOrderToBasket = () => {
		addToBasket(announInfo)
			.then(() => {
				toggleShow();
				getBasketForMessages().then((data) => {
					userStore.setBasketMessages(data);
				});
			})
			.catch((error) => {
				alert(error.response.data.message);
			});
	};

	const bgStyle = {
		background: `url(${
			process.env.REACT_APP_SERVER_URL + announInfo.img
		}) no-repeat`,
		backgroundSize: "100%",
	};

	return (
		<div className="card-container">
			<div className="card-content-container" style={bgStyle}>
				<div className="card-content">
					{/* <Button className="w-25 btn-secondary">Нет акций</Button> */}
					<div className="card-main">
						<div className="card-title d-flex">
							<div className="card-title-bg">
								<h1 className="display-4 title-content">
									"{announInfo.title}"
								</h1>
							</div>
						</div>
						<div className="card-description d-flex">
							<div className="card-description-bg">
								<h2 className="lead title-pg">{announInfo.description}</h2>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="card-info-container">
				<div className="card-info-content">
					<div className="card-common-info">
						<div className="card-name-person">
							<span>ФИО владельца:</span> &nbsp;
							<span>Петров В.А.</span>
						</div>
						<div className="card-phone-person">
							<label>Мобильный телефон:</label> &nbsp;
							<span>+79809065849</span>
						</div>
						<div className="card-name-object">
							<span>Название объекта:</span> &nbsp;
							<span>Сладкие пирожки</span>
						</div>
					</div>
					<div className="card-search">
						<Button type="button" id="btn-announ-search" className="me-2">
							Найти на карте
						</Button>
						<Button
							type="button"
							id="btn-announ-search"
							variant="outline-success"
							onClick={addOrderToBasket}
						>
							Забрать
						</Button>
					</div>
				</div>
			</div>
			<SnackbarAddToBasket show={show} onClose={toggleShow} />
		</div>
	);
};
