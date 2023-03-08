const { User } = require('./user');
const { Item } = require('./item');
const { Category } = require('./category');
const { Order } = require('./order');
const { OrderItem } = require('./orderItem');

Category.hasMany(Item, { foreignKey: 'categoryId' });
Item.belongsTo(Category, { foreignKey: 'categoryId' });

User.hasMany(Order);
Order.belongsTo(User);

Order.belongsToMany(Item, { through: OrderItem });
Item.belongsToMany(Order, { through: OrderItem });

OrderItem.belongsTo(Order);
OrderItem.belongsTo(Item);

module.exports = { User, Item, Category, Order, OrderItem }