import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Button, NavDropdown, Form } from 'react-bootstrap';
import { ItemList } from './ItemList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';
import { AddItemModal } from './AddItemModal';

//import CartModal
import { CartModal } from './CartModal';


export const App = () => {

const [allItems, setAllItems] = useState([]);
const [allCategories, setAllCategories] = useState([]);
const [allUsers, setAllUsers] = useState([]);
const [user, setUser] = useState(null);
const [item, setItem] = useState(null);

console.log('item: ' + item)

{/* CART CONTROLS */}
const [showCartModal, setShowCartModal] = useState(false);
const [cartItems, setCartItems] = useState([]);
const handleCartClose = () => setShowCartModal(false);
const handleCartShow = () => setShowCartModal(true);


{/* MODAL CONTROLS */}
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => {setShow(true);}

const handleAddNewItem = () => {
	setItem(null);
	handleShow();
}

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

useEffect(() => {
	fetch(`${apiURL}/users`)
		.then((response) => response.json())
		.then((data) => {
			setAllUsers(data);
			setUser(data[0])
		});
}, []);

console.log(allUsers)

useEffect(() => {
	fetch(`${apiURL}/users`)
		.then((response) => response.json())
		.then((data) => {
			setAllUsers(data);
			setUser(data[0])
		});
}, []);

console.log(allUsers)

// Function to add an item to the cart
const addToCart = (item) => {
    setCartItems([...cartItems, item]);
}

// Function to add an item to the cart
const addToCart = (item) => {
    setCartItems([...cartItems, item]);
}

// Function to remove an item from the cart
const removeFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
}


return (<>

	<Navbar variant="dark" bg="dark text-light" expand="md">
		<Container fluid>
			<Navbar.Brand href="#home">INVENTORY MANAGER</Navbar.Brand>

			<Navbar.Toggle aria-controls="navbar-dark-example" />
			<Navbar.Collapse id="navbar-dark-example">    
			<Button variant="outline-light" onClick={handleAddNewItem}>
						Add new Item
			</Button>      
			<Nav  className="ms-auto">
			LOGGED IN AS: &nbsp;
			<Form.Select 
				aria-label="Default select example" 
				className="w-auto bg-dark text-light"
				onChange={(e) => {setUser(allUsers[e.target.value])}}
			>

				{allUsers.map((user, index) => {
					return <>
				<option value={index}>{user.name}</option>
					</>
				})}
			</Form.Select>
				<Button variant="outline-light" onClick={handleCartShow}>
					View your Cart
				</Button>
			</Nav>
			</Container>
		</Navbar>
		<main>	
			<ItemList  allItems={allItems} allCategories={allCategories} setAllItems={setAllItems} apiURL={apiURL} setItem={setItem} handleEdit={handleEdit}/>			
		</main>
			<AddItemModal   allItems={allItems} allCategories={allCategories} show={show} handleClose={handleClose} apiURL={apiURL} setAllItems={setAllItems} item={item}/>
            

			<CartModal
				showModal={showCartModal}
				handleCartClose = {handleCartClose}
				cartItems={cartItems}
				removeFromCart={removeFromCart}
			
			/>


</>)}