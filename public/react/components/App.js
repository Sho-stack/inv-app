import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Button, NavDropdown, Form } from 'react-bootstrap';
import { ItemList } from './ItemList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';
import { ItemModal } from './ItemModal.js';
import { BasketModal } from './BasketModal';

export const App = () => {

const [allItems, setAllItems] = useState([]);
const [allCategories, setAllCategories] = useState([]);
const [allUsers, setAllUsers] = useState([]);
const [user, setUser] = useState(null);
const [item, setItem] = useState(null);

const [basket, setBasket] = useState([]);

console.log(basket)

{/* MODAL CONTROLS */}
const [showItemModal, setShowItemModal] = useState(false);
const handleItemModalClose = () => setShowItemModal(false);
const handleItemModalShow = () => {setShowItemModal(true);}

const [showBasketModal, setShowBasketModal] = useState(false);
const handleBasketModalClose = () => setShowBasketModal(false);
const handleBasketModalShow = () => {setShowBasketModal(true);}

const openItemModal = () => {
	setItem(null);
	handleItemModalShow();
}

const openBasketModal = () => {
	handleBasketModalShow();
}

const handleEdit = (item) => {
	if (item) {
	  setItem(item);
	  setShowItemModal(true);
	}
  }

const handleAddToBasket = (item) => {
	const orderItem = [item, 1];
	if (item && !basket.some((basketItem) => basketItem[0].id === item.id)) {
		setBasket([...basket, orderItem]);
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

useEffect(() => {
	fetch(`${apiURL}/users`)
		.then((response) => response.json())
		.then((data) => {
			setAllUsers(data);
			setUser(data[0])
		});
}, []);

console.log(allUsers)




return (<>

	<Navbar variant="dark" bg="dark text-light" expand="md">
		<Container fluid>
			<Navbar.Brand href="#home">INVENTORY MANAGER</Navbar.Brand>

			<Navbar.Toggle aria-controls="navbar-dark-example" />
			<Navbar.Collapse id="navbar-dark-example">    
			<Button variant="outline-light" onClick={openItemModal}>
						Add new Item
			</Button>      
			<Button variant="outline-light" onClick={openBasketModal}>
						Show Basket
			</Button> 
			<Nav className="ms-auto">

					LOGGED IN AS: &nbsp;&nbsp;
					<Form.Select 
						aria-label="Default select example" 
						className="w-auto bg-dark text-light"
						onChange={(e) => {setUser(allUsers[e.target.value])}}
					>
						{allUsers.map((user, index) => {
							return <option value={index}>{user.name} - {user.role}</option>
						})}
					</Form.Select>
			</Nav>
			</Navbar.Collapse>
		</Container>
    </Navbar>

	<BasketModal 
		basket={basket}
		setBasket={setBasket}
		allItems={allItems} 
		allCategories={allCategories} 
		show={showBasketModal} 
		handleClose={handleBasketModalClose} 
		apiURL={apiURL} 
		setAllItems={setAllItems} 
		item={item} 
		user={user}
		/>

	<main>	
		<ItemList  
			allItems={allItems} 
			allCategories={allCategories} 
			setAllItems={setAllItems} 
			apiURL={apiURL} 
			handleEdit={handleEdit} 
			user={user}
			handleAddToBasket={handleAddToBasket}/>			
	</main>
		<ItemModal   
			allItems={allItems} 
			allCategories={allCategories} 
			show={showItemModal} 
			handleClose={handleItemModalClose} 
			apiURL={apiURL} 
			setAllItems={setAllItems} 
			item={item}/> 

</>)}