const { User } = require('./user');
const { Item } = require('./item');
const { Category } = require('./category');

Item.hasOne(Category);
Category.hasMany(Item);

module.exports = { User, Item, Category }