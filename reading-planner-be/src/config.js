require('dotenv').config();

module.exports = {
  db: {
    string: process.env.MONGO_URI
  },
  server: {
    port: process.env.SERVER_PORT
  }
};
