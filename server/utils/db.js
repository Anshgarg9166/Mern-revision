const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;
//const URI = "mongodb://127.0.0.1:27017/mern_admin";

const connectDb = async () => {
    try{
        await mongoose.connect(URI);
        console.log("connection is successful");
    }
    catch(error){
        console.error("database connection failed",error);
        process.exit(0);

    }
};

module.exports = connectDb;