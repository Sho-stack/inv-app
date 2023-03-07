import React, { useState, useEffect } from 'react';
import { Card, ListGroup, Container, Navbar, Nav, Button, Modal, Form,  } from 'react-bootstrap';
import { ItemList } from './ItemList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

const [allItems, setAllItems] = useState([]);
const [allCategories, setAllCategories] = useState([]);

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
}, []);





	return (<>
		<Navbar bg="dark" variant="dark">
			<Container>
			<Navbar.Brand >Inv-manager</Navbar.Brand>
			<Nav className="me-auto">
				<Nav.Link href="#home">Add new</Nav.Link>
				{/* <Nav.Link href="#features">Features</Nav.Link>
				<Nav.Link href="#pricing">Pricing</Nav.Link> */}
			</Nav>
			</Container>


		</Navbar>
		<main>	
		<Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
			<ItemList  allItems={allItems} allCategories={allCategories} />
		</main>



	{/* ADD ITEM MODAL */}
		<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
	</>)}