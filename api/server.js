const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const jokesRouter = require('../jokes/jokes-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
  res.send('Welcome!')
})

server.use('/api/auth', authRouter);
server.use('/api/jokes', authenticate, jokesRouter);

server.use(
  (err, req, res, next) => res.status(500).json({ 
    message: 'An internal error occurred. Please try again later. If problems persist, please contact customer support at help!@lambdasupport.com.' 
  })
)

module.exports = server;
