import React, { useState, useEffect } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

import { Container, Navbar, Nav, Button } from 'react-bootstrap';

export const ItemList = ({ allItems, allCategories, setAllItems, apiURL }) => {

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
        {allItems.map((item) => { 
        return <>
            <Card style={{ width: '18rem' }} key={item.id}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                    <Card.Title>
                        {item.name}
                    </Card.Title>
                    <Card.Text>
                        {item.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>{item.price}</ListGroup.Item>
                    <ListGroup.Item>{allCategories.find(category => category.id.toString() === item.categoryId.toString())?.name}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Button variant="danger" onClick={() => handleDelete(item.id)}>DELETE</Button>
                </Card.Body>
            </Card>
        </>
    })}
    </>
}