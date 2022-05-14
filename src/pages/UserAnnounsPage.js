import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { UserAnnouns } from "../components/UserAnnouns";
import { announGetAllForUser } from "../http/announApi";

export const UserAnnounsPage = observer(() => {
	const [announsUser, setAnnounsUser] = useState([]);
	const [refresh, setRefresh] = useState(false);
	const updateUserAnnounsPage = () => {
		setRefresh(!refresh);
	};
	useEffect(() => {
		announGetAllForUser()
			.then((data) => {
				setAnnounsUser(data);
			})
			.catch((error) => {
				alert(error.response.data.message);
			});
	}, [refresh]);

	return (
		<Container className="flex-grow-1 p-4">
			{announsUser.map((value, index) => (
				<UserAnnouns
					key={`${value}-${index}`}
					announInfo={value}
					updateUserAnnounsPage={updateUserAnnounsPage}
				/>
			))}
		</Container>
	);
});
