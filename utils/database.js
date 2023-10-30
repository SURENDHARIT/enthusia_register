var mongoose = require("mongoose");
var connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://surendhar:surendhar@cluster0.fyt3kru.mongodb.net/prelims",
    {
      useNewUrlParser: true,
    }
  );
  console.log("Connected to DB");
};

module.exports = connectDB;
