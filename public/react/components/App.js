import React, { useState, useEffect } from 'react';
import { Card, ListGroup, Container, Navbar, Nav, Button, Modal, Form,  } from 'react-bootstrap';
import { ItemList } from './ItemList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';
import { AddItemModal } from './AddItemModal';

export const App = () => {

const [allItems, setAllItems] = useState([]);
const [allCategories, setAllCategories] = useState([]);





// ADD ITEM MODAL CONTROLS





{/* MODAL CONTROLS */}
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

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
}, [allItems]);




	return (<>
		<Navbar bg="dark" variant="dark">
			<Container>
			<Navbar.Brand >INVENTORY MANAGER</Navbar.Brand>
			<Nav className="me-auto">
				{/* <Nav.Link href="#home">Add new</Nav.Link> */}
				<Button variant="outline-light" onClick={handleShow}>
					Add new Item
				</Button>
				{/* <Nav.Link href="#features">Features</Nav.Link>
				<Nav.Link href="#pricing">Pricing</Nav.Link> */}
			</Nav>
			</Container>
		</Navbar>
		<main>	
			<ItemList  allItems={allItems} allCategories={allCategories}/>			
		</main>
		<AddItemModal   allItems={allItems} allCategories={allCategories} show={show} handleClose={handleClose} apiURL={apiURL} setAllItems={setAllItems}/> 

</>)}