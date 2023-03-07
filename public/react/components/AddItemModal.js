
import React, { useState, useEffect } from 'react';
import { Card, ListGroup, Container, Navbar, Nav, Button, Modal, Form,  } from 'react-bootstrap';


import { Container, Navbar, Nav, Button } from 'react-bootstrap';

export const AddItemModal = ({ allItems, allCategories, show, handleClose, apiURL }) => {
    
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [categoryId, setCategoryId] = useState('1');

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: name,
            description: description,
            price: price,
            image: image,
            categoryId:  parseInt(categoryId)
          })
        };
    
        console.log(requestOptions.body)
    
        fetch(`${apiURL}/items/`, requestOptions)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            handleClose();
            // add new item to state
            setAllItems([...allItems, data]);
          })
          .catch(error => console.log(error));
      };

      return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add new Item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="itemName">
                        <Form.Label>Item Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Name..."
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="itemDescription">
                        <Form.Label>Item description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Description..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="itemPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Price..."
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="itemImage">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="URL link..."
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="itemCategory">
                        <Form.Label>Category</Form.Label>
                        <Form.Select
                            value={categoryId}
                            onChange={(e) => setCategoryId(e.target.value)}
                        >
                            {allCategories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Add Item
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
      )



}