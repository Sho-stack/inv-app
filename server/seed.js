const { User } = require('./models/index');
const { Sequelize, db } = require('./db')

const users = [
  { name: 'John Doe', email: 'johndoe@example.com', password: 'password', role: 'user' },
  { name: 'Jane Smith', email: 'janesmith@example.com', password: 'password', role: 'admin' },
  { name: 'Bob Johnson', email: 'bobjohnson@example.com', password: 'password', role: 'user' }
];

async function seed() {
  try {
    await db.sync({ force: true });
    await User.bulkCreate(users);
    console.log('Users seeded successfully!');
  } catch (err) {
    console.error('Error seeding users:', err);
  }
}

seed();
