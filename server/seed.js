const { User } = require('./models/index');
const { Item } = require('./models/index');
const { Category } = require('./models/index');

const { db } = require('./db')

const users = [
  { name: 'John Doe', email: 'johndoe@example.com', password: 'password', role: 'user' },
  { name: 'Jane Smith', email: 'janesmith@example.com', password: 'password', role: 'admin' },
  { name: 'Bob Johnson', email: 'bobjohnson@example.com', password: 'password', role: 'user' }
];

const categories = [
    { name: 'Electronics', description: 'Electronic devices and accessories' },
    { name: 'Clothing', description: 'Clothing and apparel for all ages' },
    { name: 'Home & Garden', description: 'Home appliances and gardening tools' }
  ];
  
  const items = [
    {
      name: 'Apple iPhone 12 Pro',
      description: 'The iPhone 12 Pro is Apple\'s top-of-the-line smartphone for 2020.',
      price: 999,
      image: 'https://picsum.photos/200/150',
      categoryId: 1
    },
    {
      name: 'Nike Air Max 270',
      description: 'The Nike Air Max 270 is a popular shoe model that features a large air bubble in the heel for comfort and style.',
      price: 150,
      image: 'https://picsum.photos/200/150',      
      categoryId: 2
    },
    {
      name: 'Ryobi Cordless Lawn Mower',
      description: 'The Ryobi Cordless Lawn Mower is a powerful and convenient tool for maintaining your lawn.',
      price: 299,
      image: 'https://picsum.photos/200/150',      
      categoryId: 3
    },
    {
        name: 'Samsung 55" 4K Smart TV',
        description: 'The Samsung 55" 4K Smart TV is a high-quality television with stunning picture quality and a variety of smart features.',
        price: 799,
        image: 'https://picsum.photos/200/150',        
        categoryId: 1
      },
      {
        name: 'Adidas Ultraboost 21',
        description: 'The Adidas Ultraboost 21 is a top-of-the-line running shoe with responsive cushioning and a comfortable fit.',
        price: 180,
        image: 'https://picsum.photos/200/150',
        categoryId: 2
      },
      {
        name: 'Weber Genesis II E-315 Gas Grill',
        description: 'The Weber Genesis II E-315 Gas Grill is a high-performance grill with three powerful burners and a built-in thermometer.',
        price: 799,
        image: 'https://picsum.photos/200/150',
        categoryId: 3
      },
      {
        name: 'Bose QuietComfort 35 II Headphones',
        description: 'The Bose QuietComfort 35 II Headphones are wireless noise-canceling headphones with excellent sound quality and comfortable ear cups.',
        price: 299,
        image: 'https://picsum.photos/200/150',
        categoryId: 1
      },
      {
        name: 'Patagonia Better Sweater Fleece Jacket',
        description: 'The Patagonia Better Sweater Fleece Jacket is a warm and comfortable jacket made from recycled materials.',
        price: 139,
        image: 'https://picsum.photos/200/150',
        categoryId: 2
      },
      {
        name: 'DeWalt 20V MAX Cordless Drill Combo Kit',
        description: 'The DeWalt 20V MAX Cordless Drill Combo Kit includes a powerful drill and impact driver, as well as two batteries and a charger.',
        price: 229,
        image: 'https://picsum.photos/200/150',
        categoryId: 3
      }
  ];

async function seed() {
  try {
    await db.sync({ force: true });
    await User.bulkCreate(users);
    await Category.bulkCreate(categories);
    await Item.bulkCreate(items);
    console.log('DB seeded successfully!');
  } catch (err) {
    console.error('Error seeding users:', err);
  }
}

seed();
