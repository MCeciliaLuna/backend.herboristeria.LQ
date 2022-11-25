const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config()

const connectDb = async () => {
  const database = process.env.DB
  try {
   mongoose.connect(database)
   console.log('Db conectada')
 } catch (error) {
   console.error(error)
 }
}

module.exports = connectDb;