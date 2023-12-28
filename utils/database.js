var mongoose = require("mongoose");
var connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://surendhar:surendhar413@cluster0.fyt3kru.mongodb.net/prelims",
    {
      useNewUrlParser: true,
    }
  );
  console.log("Connected to DB");
};

module.exports = connectDB;
