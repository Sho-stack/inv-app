import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

export const ItemModal = ({ allItems, allCategories, show, handleClose, apiURL, setAllItems, item }) => {
    
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [categoryId, setCategoryId] = useState('');


    useEffect(() => {
        setName(item ? item.name : '');
        setDescription(item ? item.description : '');
        setPrice(item ? item.price : '');
        setImage(item ? item.image : '');
        setCategoryId(item ? item.categoryId : '1');
      }, [item, allCategories]);

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const requestOptions = {
            method: item ? 'PUT' : 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                description,
                price,
                image,
                categoryId: parseInt(categoryId),
            }),
        };
    
        const url = item ? `${apiURL}/items/${item.id}` : `${apiURL}/items`;
    
        fetch(url, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                handleClose();
                // update or add item to state
                if (item) {
                    const updatedItems = allItems.map((i) => (i.id === data.id ? data : i));
                    setAllItems(updatedItems);
                } else {
                    setAllItems([...allItems, data]);
                }
            })
            .catch((error) => console.log(error));
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{item ? 'Edit Item' : 'Add new Item'}</Modal.Title>
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
                            {item ? 'Update Item' : 'Add Item'}
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
      )



}