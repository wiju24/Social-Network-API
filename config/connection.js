const mongoose = require('mongoose');

const connectionString = 
    process.env.MONGODB_URI || 'mongodb://localhost:27017/socialnetwork';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    // userUnifiedTopology: true,
});

module.exports = mongoose.connection;
