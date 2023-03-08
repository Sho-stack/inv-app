import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Button,} from 'react-bootstrap';
import { ItemList } from './ItemList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';
import { AddItemModal } from './AddItemModal';

//import CartModal
import { CartModal } from './CartModal';


export const App = () => {

const [allItems, setAllItems] = useState([]);
const [allCategories, setAllCategories] = useState([]);
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


// Function to add an item to the cart
const addToCart = (item) => {
    setCartItems([...cartItems, item]);
}

// Function to remove an item from the cart
const removeFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
}


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