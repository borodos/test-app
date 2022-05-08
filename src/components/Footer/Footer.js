import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../../css/Footer.css";

export const Footer = () => {
	return (
		<section className="footer bg-dark">
			<div className="footer-container p-5">
				<Navbar.Brand href="#home">Navbar</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link href="#home">Home</Nav.Link>
				</Nav>
			</div>
		</section>
	);
};
