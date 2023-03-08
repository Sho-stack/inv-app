import React, { useState, useEffect } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

import { Container, Navbar, Nav, Button, InputGroup, Form } from 'react-bootstrap';

export const ItemList = ({ allItems, allCategories, setAllItems, apiURL, handleEdit, user, handleAddToBasket }) => {

    const [searchQuery, setSearchQuery] = useState('');

    const handleDelete = (id) => {
        fetch(`${apiURL}/items/${id}`, {
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const updatedItems = allItems.filter((item) => item.id !== id);
            setAllItems(updatedItems);
        })
        .catch(error => console.error(error));
    }

    return <>
        <div id="item-search-input">
            <InputGroup className="mb-3">
                <InputGroup.Text>Search:</InputGroup.Text>
                <Form.Control
                placeholder="I am looking for..."
                aria-label="Search field"
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)}
                />
            </InputGroup>
        </div>

        <div id="all-items-list">
        {allItems
         .filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.description.toLowerCase().includes(searchQuery.toLowerCase()))
         .map((item) => { 
            return <>
                <Card style={{ width: '18rem' }} key={item.id}>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                        <Card.Title>
                            {item.name}
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">£{item.price/100}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">Category: {allCategories.find(category => category.id.toString() === item.categoryId.toString())?.name}</Card.Subtitle>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        {user?.role === 'admin' && (
                        <>
                            <Button variant="warning" onClick={() => handleEdit(item)}>EDIT</Button>
                            <Button variant="danger" onClick={() => handleDelete(item.id)}>DELETE</Button>
                        </>
                        )}
                        {user?.role === 'user' && (
                        <>
                            <Button variant="primary" onClick={() => handleAddToBasket(item)}>Add to Cart</Button>
                        </>
                        )}
                    </Card.Footer>
                </Card>
            </>
        })}
        </div>
    </>
}