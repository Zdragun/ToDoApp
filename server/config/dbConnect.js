const mongoose = require("mongoose")


const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.CONNECT);
        console.log("Database launched successfully");
    } catch (error) {
        console.log("Some problems with connection to DataBases", error);
    }
}


module.exports = dbConnection;