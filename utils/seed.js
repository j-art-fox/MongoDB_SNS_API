const { User } = require('../models');
const connection = require('../config/connection');
const randomNames = require('random-name') ;

connection.on('error', (err) => err);

connection.once('open', async () => {
    await User.deleteMany({});
    const users = [];
    for (let i = 0; i < 50; i++) {
        users.push(randomNames())
    }
    await User.collection.insertMany(users);
    console.table(users);
});