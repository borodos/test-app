import { Alert, Snackbar } from "@mui/material";
import React from "react";

const SnackbarAddToBasket = ({ show, onClose }) => {
	return (
		<Snackbar open={show} autoHideDuration={3000} onClose={onClose}>
			<Alert onClose={onClose} severity="success" sx={{ width: "100%" }}>
				Товар успешно добавлен в корзину!
			</Alert>
		</Snackbar>
	);
};

const SnackbarDeleteOrder = ({ show, onClose }) => {
	return (
		<Snackbar open={show} autoHideDuration={3000} onClose={onClose}>
			<Alert onClose={onClose} severity="success" sx={{ width: "100%" }}>
				Товар успешно удален из корзины!
			</Alert>
		</Snackbar>
	);
};

const SnackbarConfirmOrder = ({ show, onClose }) => {
	return (
		<Snackbar open={show} autoHideDuration={3000} onClose={onClose}>
			<Alert onClose={onClose} severity="success" sx={{ width: "100%" }}>
				Подтвержденно
			</Alert>
		</Snackbar>
	);
};

export { SnackbarDeleteOrder, SnackbarAddToBasket, SnackbarConfirmOrder };
