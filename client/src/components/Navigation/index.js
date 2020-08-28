import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Navbar.Brand as={Link} to="/">Habit Tracker</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link as={Link} to="/metrics/new">Track a new Metric</Nav.Link>
					{/* <Nav.Link as={Link} to="/metrics/new">Track a new Metric</Nav.Link> */}
					{/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
					</NavDropdown> */}
				</Nav>
				{/* <Nav>
					<Nav.Link as={Link} to="/metrics/new">Track a new Metric</Nav.Link>
				</Nav> */}
			</Navbar.Collapse>
		</Navbar>
	);
};