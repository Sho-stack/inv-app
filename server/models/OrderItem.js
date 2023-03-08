const { Sequelize, db } = require('../db');


const OrderItem = db.define('orderItem', {
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
});


module.exports = { OrderItem };