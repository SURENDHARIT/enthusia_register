var mongoose = require("mongoose");
var connectDB = async () => {
  await mongoose.connect(
//     "mongodb+srv://sakthi:sakthi@enthusia.xzi3zhw.mongodb.net/test",
    mongodb+srv://surendhar:surendhar@enthusia.fyt3kru.mongodb.net/prelims,
    {
      useNewUrlParser: true,
    }
  );
  console.log("Connected to DB");
};

module.exports = connectDB;
