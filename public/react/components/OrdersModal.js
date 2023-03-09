import React, { useState, useEffect } from 'react';
import { Modal, Table } from 'react-bootstrap';

export const OrdersModal = ({ show, handleClose, orders }) => {
  return (
    <Modal show={show} onHide={handleClose} className='modal-xl'>
      <Modal.Header closeButton>
        <Modal.Title>All Orders</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Table striped bordered hover style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date Made</th>
              <th>Status</th>
              <th>Item Name</th>
              <th>Price at Sale</th>
              <th>Quantity</th>
              <th>Orderline Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <>
                <tr>
                  <td>{order.id}</td>
                  <td>{order.createdAt}</td>
                  <td>{order.status}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                {order.orderItems.map((item) => (
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{item.item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price * item.quantity}</td>
                  </tr>
                ))}
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Total:</td>
                  <td>
                    {order.orderItems.reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    )}
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </Table>
      </Modal.Body>
    </Modal>
  );
};