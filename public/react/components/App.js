import React, { useState, useEffect } from 'react';
import { Card, ListGroup, Container, Navbar, Nav, Button } from 'react-bootstrap';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

const [allItems, setAllItems] = useState([]);
const [allCategories, setAllCategories] = useState([]);

useEffect(() => {
	fetch(`${apiURL}/categories`)
		.then((response) => response.json())
		.then((data) => {
			setAllCategories(data);
		});
}, []);

useEffect(() => {
	fetch(`${apiURL}/items`)
		.then((response) => response.json())
		.then((data) => {
			setAllItems(data);
		});
}, []);

console.log(allCategories)




	return (<>
	

		<Navbar bg="dark" variant="dark">
			<Container>
			<Navbar.Brand href="#home">Inv-manager</Navbar.Brand>
			<Nav className="me-auto">
				<Nav.Link href="#home">Home</Nav.Link>
				{/* <Nav.Link href="#features">Features</Nav.Link>
				<Nav.Link href="#pricing">Pricing</Nav.Link> */}
			</Nav>
			</Container>


		</Navbar>
		<main>	

		{allItems.map((item) => { return<>
		<Card style={{ width: '18rem' }}>
		<Card.Img variant="top" src={item.image} />
		<Card.Body>
			<Card.Title>
				{item.name}
			</Card.Title>
			<Card.Text>
				{item.description}
			</Card.Text>
		</Card.Body>
		<ListGroup className="list-group-flush">
			<ListGroup.Item>{item.price}</ListGroup.Item>
			<ListGroup.Item>{allCategories.find(category => category.id.toString() === item.categoryId.toString())?.name}</ListGroup.Item>
		</ListGroup>
		<Card.Body>
			<Card.Link href="#">Card Link</Card.Link>
			<Card.Link href="#">Another Link</Card.Link>
		</Card.Body>
	</Card>
	</>
	}
		)}
		
		</main>
	</>)}