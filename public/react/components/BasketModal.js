import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Image, Image, Row, Col} from 'react-bootstrap';

export const BasketModal = ({ basket, setBasket, allItems, allCategories, show, handleClose, apiURL, setAllItems, item, user}) => {

    const [basketTotal, setBasketTotal] = useState(0);

    useEffect(() => {
        let total = 0;
        basket.forEach((item) => {
          total += item[0].price * item[1];
        });
        setBasketTotal(total);
      }, [basket]);

    const handleIncrement = (index) => {
        const basketCopy = [...basket];
        basketCopy[index][1] = basket[index][1] + 1;
        setBasket(basketCopy);
    }

    const handleDecrement = (index) => {
        const basketCopy = [...basket];
        basketCopy[index][1] = basket[index][1] - 1;

        if (basketCopy[index][1] === 0) {
            basketCopy.splice(index, 1);
        }

        setBasket(basketCopy);
    }


    const handleCheckout = async () => {
        try {
          const response = await fetch(`${apiURL}/orders`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: user.id,
                items: basket,
              }),
          });
          if (response.ok) {
            const data = await response.json();
            console.log('Order created:', data);
            // Clear the basket after checkout
            setBasket([]);
            handleClose();
          } else {
            console.error('Failed to create order:', response);
          }
        } catch (error) {
          console.error('Error creating order:', error);
        }
      };




    return ( <>
            <Modal show={show} onHide={handleClose}  className='modal-xl'>
            <Modal.Header closeButton>
                <Modal.Title>Your Basket</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {basket.length > 0 ? (
                <Form >
                {Array.isArray(basket) &&
                 basket.map((item, index) => {
                    return (
                        <Row key={index}>
                            <Col class='nowrap'>
                                <Image src={item[0].image} width={25} height={25} />
                                {item[0].name} 
                            </Col>
                            <Col>
                                <Button variant="outline-secondary" size="sm" onClick={() => handleIncrement(index)}>+</Button>
                                &nbsp;{item[1]}&nbsp;
                                <Button variant="outline-secondary" size="sm" onClick={() => handleDecrement(index)}>-</Button>
                            </Col>
                            <Col>
                            Total: £{item[0].price/100 * item[1]}
                            </Col>
                        </Row>
                    );
                })} 
                
                    <Modal.Footer>
                        Total: £{basketTotal/100}
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleCheckout}>
                            Checkout
                        </Button>
                    </Modal.Footer>
                </Form>
                ) : (
                    <p>Your basket is empty</p>
                )}
            </Modal.Body>
        </Modal>
        {console.log(basket)}
        {console.log('testtt')}
           
        </> 
    );
};