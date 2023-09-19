const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = async function () {
  try {
    const con = await mongoose.connect(process.env.MONGOOSE_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`connected to database ${con.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};
module.exports = connectDB;