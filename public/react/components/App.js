import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	return (<>
		<Navbar bg="dark" variant="dark">
			<Container>
			<Navbar.Brand href="#home">Navbar</Navbar.Brand>
			<Nav className="me-auto">
				<Nav.Link href="#home">Home</Nav.Link>
				<Nav.Link href="#features">Features</Nav.Link>
				<Nav.Link href="#pricing">Pricing</Nav.Link>
			</Nav>
			</Container>
		</Navbar>
		<main>	

		</main>
	</>)}