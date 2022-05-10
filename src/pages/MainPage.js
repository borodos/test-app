import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Context } from "..";
import { CardAnnoun } from "../components/CardAnnoun/CardAnnoun";
import "../css/MainPage.css";
import { announGetAll } from "../http/announApi";

export const MainPage = observer(() => {
	const { announStore } = useContext(Context);

	useEffect(() => {
		announGetAll().then((data) => {
			announStore.setAnnouns(data);
		});
	}, [announStore]);

	return (
		<section className="main-page">
			{announStore.announs.map((value, index) => (
				<CardAnnoun key={`${value}-${index}`} announInfo={value} />
			))}
		</section>
	);
});
