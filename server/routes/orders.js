const express = require("express");
const router = express.Router();
const { Order } = require("../models/index");
const { OrderItem } = require("../models/index");

router.get('/', async (req, res) => {
    const orders = await Order.findAll();
    res.send(orders);
    });

//get all order of a user
router.get('/:id', async (req, res) => {
    const orders = await Order.findAll({
        where: {
            userId: req.params.id
        }
    });
    res.send(orders);
});


router.post('/', async (req, res) => {
    try {
      const { userId, items } = req.body;

      if (!items || items.length === 0) {
        throw new Error('No items provided');
      }
  
      // Create the order and its associated order items
      const order = await Order.create({ userId });
      const orderItems = await Promise.all(
        items.map(async (item) => {
          const orderItem = {
            orderId: order.id,
            itemId: item[0].id,
            quantity: item[1],
            price: item[0].price,
          };
          return await OrderItem.create(orderItem);
        })
      );
  
      // Return the created order and order items as JSON
      res.json({ order, orderItems });
    } catch (error) {
      console.error('Error creating order:', error);
      res.status(500).json({ error: 'Failed to create order' });
    }
});


module.exports = router;
