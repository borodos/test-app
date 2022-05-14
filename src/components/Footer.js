import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../css/Footer.css";

export const Footer = () => {
	return (
		<section className="footer bg-dark">
			<div className="footer-container p-5">
				<Navbar.Brand href="/">Домашняя страница</Navbar.Brand>
			</div>
		</section>
	);
};
