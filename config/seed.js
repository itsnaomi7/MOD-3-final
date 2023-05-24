require('dotenv').config();
require('./database');

const Category = require('../models/Category');
const Item = require('../models/Item');
// const logo = require('../src/images/logo.png')

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Veggies', sortOrder: 10},
    {name: 'Fruit', sortOrder: 20},
    {name: 'Desserts', sortOrder: 30},
    {name: 'Cold Brew Tea', sortOrder: 40},
    {name: 'Fruit Basket', sortOrder: 50},
    {name: 'Veggie Tray', sortOrder: 60},
    {name: 'Subscription', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Turnips', img: '../src/images/logo.png', category: categories[0]._id, price: 3.95},
    {name: 'Carrots', img: './src/images/turnip', category: categories[0]._id, price: 2.95},
    {name: 'Sweet Potato', img: './src/images/turnip', category: categories[0]._id, price: 0.95},
    {name: 'Spinach', img: './src/images/turnip', category: categories[0]._id, price: 1.25},
    {name: 'Zucunni', img: './src/images/turnip', category: categories[0]._id, price: 1.05},
    {name: 'Strawberries', img: './src/images/turnip', category: categories[1]._id, price: 7.95},
    {name: 'Bananas', img: '', category: categories[1], price: 1.95},
    {name: 'Grapes', img: '', category: categories[1], price: 4.95},
    {name: 'Lychee', img: '', category: categories[1], price: 3.95},
    {name: 'Blueberry', img: '', category: categories[1], price: 7.95},
    {name: 'Kiwi', img: '', category: categories[1], price: 1.95},
    {name: 'Watermelon', img: '', category: categories[1], price: 4.95},
    {name: 'Pineapple', img: '', category: categories[1], price: 3.95},
    {name: 'Ice Cream', img: '', category: categories[2], price: 1.95},
    {name: 'Giant cookie', img: '', category: categories[2], price: 0.95},
    {name: 'Macroons', img: '', category: categories[2], price: 2.95},
    {name: 'Strawberry Shortcake', img: '', category: categories[2], price: 3.95},
    {name: 'Bubble-Tea-Mix', img: '', category: categories[3], price: 0.95},
    {name: 'Iced Chai-Mix', img: '', category: categories[3], price: 0.95},
    {name: 'Berry Blast Plate', img: '', category: categories[4], price: 8.95},
    {name: 'Banana Boat', img: '', category: categories[4], price: 3.95},
    {name: 'Cheese Please', img: '', category: categories[5], price: 7.95},
    {name: 'A Vegans Dream', img: '', category: categories[5], price: 7.95},
    {name: '2 Baskets of fruit a week', img: '', category: categories[6], price: 17.95},
    {name: '2 Baskets of veggues a week', img: '', category: categories[6], price: 15.95},
  ]);

  console.log(items)

  process.exit();

})();