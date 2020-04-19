const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
    console.log(`MongoDB connected on host ${conn.connection.host.cyan.bold}`);
  } catch (error) {
    console.log(`Error occured: ${error}`.red.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
