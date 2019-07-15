require('dotenv').config();

module.exports = {
  db: {
    string: process.env.DATABASE_STRING
  },
  server: {
    port: process.env.SERVER_PORT
  }
};
