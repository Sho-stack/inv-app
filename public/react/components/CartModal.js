import React from 'react';
import { Modal, Button } from 'react-bootstrap';
//import { CartItem } from './CartModal';

export const CartModal = ({ cartItems, removeFromCart, showModal, handleCartClose }) => {
    /* 
    CartModal component that displays a modal containing items in the cart
        Props:
            - cartItems: array of items in the cart
            - removeFromCart: function to remove an item from the cart
            - showModal: boolean value to show or hide the modal
            - handleClose: function to close the modal 
            */
    const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);
        // Calculate the total price of items in the cart using reduce()
    return (
        // Modal component from react-bootstrap that shows the cart
        <Modal show={showModal} onHide={handleCartClose}>
            <Modal.Header closeButton>
                <Modal.Title>Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
                ))}
                {cartItems.length === 0 && <div>Your cart is empty.</div>}
            </Modal.Body>
            <Modal.Footer>
                <div>Total: ${cartTotal.toFixed(2)}</div>
                <Button variant="secondary" onClick={handleCartClose}>Close</Button>
                <Button variant="primary" onClick={handleCartClose}>Checkout</Button>
            </Modal.Footer>
        </Modal>
    );
};
