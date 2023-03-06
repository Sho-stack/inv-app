const {Sequelize, db } = require('../db')

const User = db.define("user", {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      isEmail: true,
      allowNull: false
    },
    role: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
  });

module.exports = { User };
    

  