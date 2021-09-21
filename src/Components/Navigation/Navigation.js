import React, { useEffect } from 'react';
import './Navigation.css';
import { Navbar, Nav } from 'react-bootstrap';


const Navigation = (props) => {

	return (
		<div classname="navigation">
			<Navbar collapseOnSelect bg="dark" expand="lg">
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav" style={{ marginLeft: "70px" }}>
					{/*
					<Nav.Link className="navItem" href="/about" activeStyle={{ color: "yellow" }}>About</Nav.Link>
					<Nav.Link className="navItem" href="/projects" activeStyle={{ color: "yellow" }}>Projects</Nav.Link>
					*/}
					<Nav.Link className={(props.page === "home") ? "navItem activeLink" : "navItem"} onClick={() => props.setPage("home")}>Home</Nav.Link>
					<Nav.Link className={(props.page === "projects") ? "navItem activeLink": "navItem"} onClick={() => props.setPage("projects")}>Projects</Nav.Link>
					<Nav.Link className="navItem" onClick={() => window.open("/Assets/Ryan Kato Resume 2021.pdf")} activeStyle={{ color: "yellow" }}>Resume</Nav.Link>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Navigation;