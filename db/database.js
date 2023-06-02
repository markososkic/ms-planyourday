const mongoose = require("mongoose");

const dbConnection = () => {

    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    mongoose.connect(process.env.DATABASE, options);
}

module.exports = dbConnection;