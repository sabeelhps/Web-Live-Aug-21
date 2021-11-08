const mongoose = require('mongoose');
const Product = require('./models/product');


const DUMMY_PRODUCTS = [
    {
        name: 'Iphone',
        price: 100,
        desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system"
    },
    {
        name: 'Macbook Air',
        price: 200,
        desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system"
    },
    {
        name: 'Apple Watch Series-6',
        price: 150.60,
        desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system"
    },
    {
        name: 'Reebok Shoes',
        price: 80.40,
        desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system"
    },
    {
        name: 'Jeans',
        price: 20.40,
        desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system"
    },
];

async function seedDB() {
    await Product.deleteMany({});
    
    await Product.insertMany(DUMMY_PRODUCTS);
    console.log('DB Seeded');
}

module.exports = seedDB;

