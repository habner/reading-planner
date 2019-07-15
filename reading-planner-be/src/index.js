const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const config = require('./config');

mongoose.connect(config.db.string, { useNewUrlParser: true });

app.use((req, res, next) => {
  req.io = io;
  next();
});
app.use(express.json());
app.use(cors());

server.listen(config.server.port);
