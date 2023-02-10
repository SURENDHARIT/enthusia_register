var mongoose = require("mongoose");
var connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://sakthi:sakthi@enthusia.xzi3zhw.mongodb.net/test",
    {
      useNewUrlParser: true,
    }
  );
  console.log("Connected to DB");
};

module.exports = connectDB;
