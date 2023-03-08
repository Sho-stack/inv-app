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
      price: 99999,
      image: 'https://picsum.photos/200/150',
      categoryId: 1
    },
    {
      name: 'Nike Air Max 270',
      description: 'The Nike Air Max 270 is a popular shoe model that features a large air bubble in the heel for comfort and style.',
      price: 15099,
      image: 'https://picsum.photos/200/150',      
      categoryId: 2
    },
    {
      name: 'Ryobi Cordless Lawn Mower',
      description: 'The Ryobi Cordless Lawn Mower is a powerful and convenient tool for maintaining your lawn.',
      price: 29999,
      image: 'https://picsum.photos/200/150',      
      categoryId: 3
    },
    {
        name: 'Samsung 55" 4K Smart TV',
        description: 'The Samsung 55" 4K Smart TV is a high-quality television with stunning picture quality and a variety of smart features.',
        price: 79999,
        image: 'https://picsum.photos/200/150',        
        categoryId: 1
      },
      {
        name: 'Adidas Ultraboost 21',
        description: 'The Adidas Ultraboost 21 is a top-of-the-line running shoe with responsive cushioning and a comfortable fit.',
        price: 18099,
        image: 'https://picsum.photos/200/150',
        categoryId: 2
      },
      {
        name: 'Weber Genesis II E-315 Gas Grill',
        description: 'The Weber Genesis II E-315 Gas Grill is a high-performance grill with three powerful burners and a built-in thermometer.',
        price: 79999,
        image: 'https://picsum.photos/200/150',
        categoryId: 3
      },
      {
        name: 'Bose QuietComfort 35 II Headphones',
        description: 'The Bose QuietComfort 35 II Headphones are wireless noise-canceling headphones with excellent sound quality and comfortable ear cups.',
        price: 29999,
        image: 'https://picsum.photos/200/150',
        categoryId: 1
      },
      {
        name: 'Patagonia Better Sweater Fleece Jacket',
        description: 'The Patagonia Better Sweater Fleece Jacket is a warm and comfortable jacket made from recycled materials.',
        price: 13999,
        image: 'https://picsum.photos/200/150',
        categoryId: 2
      },
      {
        name: 'DeWalt 20V MAX Cordless Drill Combo Kit',
        description: 'The DeWalt 20V MAX Cordless Drill Combo Kit includes a powerful drill and impact driver, as well as two batteries and a charger.',
        price: 22999,
        image: 'https://picsum.photos/200/150',
        categoryId: 3
      },
      {
        name: 'Sony Alpha a7 III Mirrorless Camera',
        description: 'The Sony Alpha a7 III Mirrorless Camera is a high-quality camera with excellent image quality and a wide range of features.',
        price: 219899,
        image: 'https://picsum.photos/200/150',
        categoryId: 1
      },
      {
        name: 'Levi\'s 501 Original Fit Jeans',
        description: 'The Levi\'s 501 Original Fit Jeans are a classic and versatile pair of jeans made from high-quality denim.',
        price: 6999,
        image: 'https://picsum.photos/200/150',
        categoryId: 2
      },
      {
        name: 'Weber Smokey Mountain Cooker Smoker',
        description: 'The Weber Smokey Mountain Cooker Smoker is a high-quality smoker that can cook a variety of meats to perfection.',
        price: 32999,
        image: 'https://picsum.photos/200/150',
        categoryId: 3
      },
      {
        name: 'Apple iPad Air (4th Generation)',
        description: 'The Apple iPad Air (4th Generation) is a powerful and versatile tablet that can handle a wide range of tasks.',
        price: 59999,
        image: 'https://picsum.photos/200/150',
        categoryId: 1
      },
      {
        name: 'New Balance Fresh Foam 1080v11',
        description: 'The New Balance Fresh Foam 1080v11 is a top-of-the-line running shoe with excellent cushioning and a comfortable fit.',
        price: 14999,
        image: 'https://picsum.photos/200/150',
        categoryId: 2
      },
      {
        name: 'Worx Landroid M500 Robot Lawn Mower',
        description: 'The Worx Landroid M500 Robot Lawn Mower is a high-tech lawn mower that can mow your lawn automatically.',
        price: 99999,
        image: 'https://picsum.photos/200/150',
        categoryId: 3
      },
      {
        name: 'Sony WH-1000XM4 Wireless Headphones',
        description: 'The Sony WH-1000XM4 Wireless Headphones are high-quality noise-canceling headphones with excellent sound quality and a comfortable fit.',
        price: 34999,
        image: 'https://picsum.photos/200/150',
        categoryId: 1
      },
      {
        name: 'The North Face Resolve Jacket',
        description: 'The North Face Resolve Jacket is a waterproof and breathable jacket that can keep you dry in even the wettest conditions.',
        price: 9999,
        image: 'https://picsum.photos/200/150',
        categoryId: 2
      },
      {
        name: 'Makita 18V LXT Lithium-Ion Cordless Combo Kit',
        description: 'The Makita 18V LXT Lithium-Ion Cordless Combo Kit includes a powerful drill and impact driver, as well as two batteries and a charger.',
        price: 37999,
        image: 'https://picsum.photos/200/150',
        categoryId: 3
      },
      {
        name: 'Samsung Galaxy Tab S7+',
        description: 'The Samsung Galaxy Tab S7+ is a high-quality tablet with excellent performance and a large, beautiful display.',
        price: 84999,
        image: 'https://picsum.photos/200/150',
        categoryId: 1
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
