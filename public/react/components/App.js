import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Button,} from 'react-bootstrap';
import { ItemList } from './ItemList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';
import { AddItemModal } from './AddItemModal';

export const App = () => {

const [allItems, setAllItems] = useState([]);
const [allCategories, setAllCategories] = useState([]);
const [item, setItem] = useState(null);

console.log('item: ' + item)

{/* MODAL CONTROLS */}
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const handleEdit = (item) => {
	if (item) {
	  setItem(item);
	  setShow(true);
	}
  }

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
			<ItemList  allItems={allItems} allCategories={allCategories} setAllItems={setAllItems} apiURL={apiURL} setItem={setItem} handleEdit={handleEdit}/>			
		</main>
			<AddItemModal   allItems={allItems} allCategories={allCategories} show={show} handleClose={handleClose} apiURL={apiURL} setAllItems={setAllItems} item={item}/> 

</>)}