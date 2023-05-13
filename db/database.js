const mongoose = require("mongoose");



const dbConnection = () => {

    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    mongoose.connect("mongodb+srv://" + process.env.DATABASE + "@cluster0.oabosth.mongodb.net/?retryWrites=true&w=majority", options);
}



module.exports = dbConnection;