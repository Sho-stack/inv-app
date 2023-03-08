const {Sequelize, db} = require('../db')

const Item = db.define("item", {
    name: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },
    price: {
        type: Sequelize.INTEGER,
    },
    image: {
        type: Sequelize.STRING,
    }
});

module.exports = { Item };