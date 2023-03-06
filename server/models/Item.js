const {Sequelize, db} = require('../db')

const Item = db.define("item", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false
    },
    categoryId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: 'categories',
            key: 'id'
          }
    }
});

module.exports = { Item };