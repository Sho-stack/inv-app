const { User } = require('./user');
const { Item } = require('./item');
const { Category } = require('./category');
const { Order } = require('./order');
const { OrderItem } = require('./orderItem');

Category.hasMany(Item, { foreignKey: 'categoryId' });
Item.belongsTo(Category, { foreignKey: 'categoryId' });

User.hasMany(Order);
Order.belongsTo(User);

Order.hasMany(OrderItem, { foreignKey: 'orderId' });
OrderItem.belongsTo(Order, { foreignKey: 'orderId' });

Item.hasMany(OrderItem, { foreignKey: 'itemId' });
OrderItem.belongsTo(Item, { foreignKey: 'itemId' });



module.exports = { User, Item, Category, Order, OrderItem }