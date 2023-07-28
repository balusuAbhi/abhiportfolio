const mongoose = require("mongoose");

const connectDB = async function () {
  try {
    const con = await mongoose.connect("mongodb://localhost:27017/portfolio", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`connected to database ${con.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};
module.exports = connectDB;