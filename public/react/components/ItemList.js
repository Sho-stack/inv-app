import React, { useState, useEffect } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

import { Container, Navbar, Nav, Button } from 'react-bootstrap';

export const ItemList = ({ allItems, allCategories }) => {
    console.log(allItems)

    return <>
        {allItems.map((item) => { 
        return <>
            <Card style={{ width: '18rem' }}>
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
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </>
    })}
    </>
}