import React from "react";
import { Container } from "react-bootstrap";
import { Message } from "../components/Message";

export const MessagesPage = () => {
	return (
		<Container className="flex-grow-1 p-4">
			<Message />
		</Container>
	);
};
