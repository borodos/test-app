import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Message } from "../components/Message";
import { getMessages } from "../http/messageApi";

export const MessagesPage = () => {
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		getMessages()
			.then((data) => {
				setMessages(data);
			})
			.catch((error) => {
				alert(error.response.data.message);
			});
	}, []);

	return (
		<Container className="flex-grow-1 p-4">
			{messages.map((value, index) => (
				<Message
					key={`${value}-${index}`}
					messageInfo={value}
					setMessages={setMessages}
				/>
			))}
		</Container>
	);
};
