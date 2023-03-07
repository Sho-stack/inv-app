const { User } = require('./user');
const { Item } = require('./item');
const { Category } = require('./category');

Category.hasMany(Item, { foreignKey: 'categoryId' });
Item.belongsTo(Category, { foreignKey: 'categoryId' });

module.exports = { User, Item, Category }