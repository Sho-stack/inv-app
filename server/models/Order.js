const { Sequelize, db } = require('../db');


const Order = db.define('order', {
  status: {
    type: Sequelize.ENUM('pending', 'processing', 'shipped', 'delivered'),
    allowNull: false,
    defaultValue: 'pending',
  },
});


module.exports = { Order };