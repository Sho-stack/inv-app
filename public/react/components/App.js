import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Button, NavDropdown, Form } from 'react-bootstrap';
import { ItemList } from './ItemList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';
import { AddItemModal } from './AddItemModal';

export const App = () => {

const [allItems, setAllItems] = useState([]);
const [allCategories, setAllCategories] = useState([]);
const [allUsers, setAllUsers] = useState([]);
const [user, setUser] = useState(null);
const [item, setItem] = useState(null);

console.log(user)

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
			setUser(allUsers[0])
		});
}, []);

console.log(allUsers)




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
				onChange={(e) => {setUser(e.target.value)}}
			>

				{allUsers.map((user) => {
					return <>
						<option value={user.id}>{user.role}</option>
					</>
				})}
			</Form.Select>
			</Nav>
			</Navbar.Collapse>
		</Container>
    </Navbar>


	<main>	
		<ItemList  allItems={allItems} allCategories={allCategories} setAllItems={setAllItems} apiURL={apiURL} setItem={setItem} handleEdit={handleEdit}/>			
	</main>
		<AddItemModal   allItems={allItems} allCategories={allCategories} show={show} handleClose={handleClose} apiURL={apiURL} setAllItems={setAllItems} item={item}/> 

</>)}