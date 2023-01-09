var mongoose = require("mongoose");
var connectDB = async () => {
  await mongoose.connect(
    // "mongodb+srv://sakthi:sakthi@enthusia.xzi3zhw.mongodb.net/test",
    "mongodb+srv://surendhar:surendhar@cluster0.fyt3kru.mongodb.net/reg",
    {
      useNewUrlParser: true,
    }
  );
  console.log("Connected to DB");
};

module.exports = connectDB;
