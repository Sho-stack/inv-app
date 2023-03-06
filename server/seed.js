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
      image: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-12-Pro-and-iPhone-12-Pro-Max_Product_Image.jpeg.large.jpg',
      categoryId: 1
    },
    {
      name: 'Nike Air Max 270',
      description: 'The Nike Air Max 270 is a popular shoe model that features a large air bubble in the heel for comfort and style.',
      price: 150,
      image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/p/air-max-270-react-shoe-mgRbRk/air-max-270-react-shoe-mgRbRk.jpg',
      categoryId: 2
    },
    {
      name: 'Ryobi Cordless Lawn Mower',
      description: 'The Ryobi Cordless Lawn Mower is a powerful and convenient tool for maintaining your lawn.',
      price: 299,
      image: 'https://images.homedepot-static.com/productImages/4d4a5574-50e8-4f80-8cc8-7c904d5b8361/svn/ryobi-push-lawn-mowers-ry40180-64_1000.jpg',
      categoryId: 3
    },
    {
        name: 'Samsung 55" 4K Smart TV',
        description: 'The Samsung 55" 4K Smart TV is a high-quality television with stunning picture quality and a variety of smart features.',
        price: 799,
        image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6425/6425561_sd.jpg',
        categoryId: 1
      },
      {
        name: 'Adidas Ultraboost 21',
        description: 'The Adidas Ultraboost 21 is a top-of-the-line running shoe with responsive cushioning and a comfortable fit.',
        price: 180,
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/9dc4bb0264b04e75a3eead9100eb2b91_9366/Ultraboost_21_Shoes_Black_GY2389_01_standard.jpg',
        categoryId: 2
      },
      {
        name: 'Weber Genesis II E-315 Gas Grill',
        description: 'The Weber Genesis II E-315 Gas Grill is a high-performance grill with three powerful burners and a built-in thermometer.',
        price: 799,
        image: 'https://www.weber.com/~/media/weber/worldwide/stories/grill-skills/gas-grilling/genesis-ii/genesisii-e-315-black-01.png?h=1080&w=1080&la=en',
        categoryId: 3
      },
      {
        name: 'Bose QuietComfort 35 II Headphones',
        description: 'The Bose QuietComfort 35 II Headphones are wireless noise-canceling headphones with excellent sound quality and comfortable ear cups.',
        price: 299,
        image: 'https://www.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/quietcomfort_35_ii/product_silo_images/qc35_ii_black_EC_hero_010717.psd/_jcr_content/renditions/cq5dam.web.320.320.jpeg',
        categoryId: 1
      },
      {
        name: 'Patagonia Better Sweater Fleece Jacket',
        description: 'The Patagonia Better Sweater Fleece Jacket is a warm and comfortable jacket made from recycled materials.',
        price: 139,
        image: 'https://www.patagonia.com/dw/image/v2/BDCH_PRD/on/demandware.static/-/Sites-patagonia-master/default/dw7bc4d729/images/hi-res/25542_FEA.jpg?sw=750&sh=750&sm=fit&sfrm=png',
        categoryId: 2
      },
      {
        name: 'DeWalt 20V MAX Cordless Drill Combo Kit',
        description: 'The DeWalt 20V MAX Cordless Drill Combo Kit includes a powerful drill and impact driver, as well as two batteries and a charger.',
        price: 229,
        image: 'https://images.homedepot-static.com/productImages/0767f163-5018-4d2e-94f4-7b4e98db4dc4/svn/dewalt-power-tool-combo-kits-dck240c2-64_1000.jpg',
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
