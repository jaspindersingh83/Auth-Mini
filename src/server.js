const bodyParser = require('body-parser');
const express = require('express');
const session = require('express-session');

const cors = require('cors');

const corsOptions = {
  "origin": "http://localhost:3000",
  "credentials": true
};
server.use(cors(corsOptions));
const STATUS_USER_ERROR = 422;
const bcrypt = require('bcrypt');

const BCRYPT_COST = 11;
const User = require('./user');

const server = express();
// to enable parsing of json bodies for post requests
server.use(bodyParser.json());
server.use(session({
  secret: 'e5SPiqsEtjexkTj3Xqovsjzq8ovjfgVDFMfUzSmJO21dtXs4re',
  saveUninitialized: true,
  resave: false
}));

/* Sends the given err, a string or an object, to the client. Sets the status
 * code appropriately. */
const sendUserError = (err, res) => {
  res.status(STATUS_USER_ERROR);
  if (err && err.message) {
    res.json({ message: err.message, stack: err.stack });
  } else {
    res.json({ error: err });
  }
};

const loggedIn = (req, res, next) => {
  if (req.session.user) {
    req.user = req.session.user;
    next();
  } else {
    sendUserError(new Error('Not logged in'), res);
  }
};

const hashingPassword = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    return sendUserError(new Error('Please send a valid password'), res);
  }
  bcrypt.hash(password, BCRYPT_COST, (err, hash) => {
    req.hashedPassword = hash;
    next();
  });
};

async function matchPassword(req, res, next) {
  const { username, password } = req.body;
  if (!password) {
    return sendUserError(new Error('Please send a valid password'), res);
  }
  try {
    const result = await User.findOne({ username });
    // result = {'username' : 'Jason', passwordHash : 'Aaron'}
    bcrypt.compare(password, result.passwordHash, (error, response) => {
      if (!response) {
        return sendUserError(new Error('Password dont match'), res);
      }
      req.session.user = result.username;
      next();
    });
  } catch (error) {
    sendUserError(new Error('User Not found'), res);
  }
}
server.post('/users', hashingPassword, async (req, res) => {
  const { username } = req.body;
  const { hashedPassword } = req;
  try {
    const result = await User.create({ username, passwordHash: hashedPassword })
    res.status(200).json(result);
  } catch (error) {
    sendUserError(error, res);
  }
});

server.post('/login', matchPassword, (req, res) => {
  res.status(200).json({ success: true });
});
// TODO: implement routes
server.post('/logout', (req, res) => {
  req.session.user = null;
  res.status(200).json({ success: true });
});

// TODO: add local middleware to this route to ensure the user is logged in
server.get('/me', loggedIn, (req, res) => {
  // Do NOT modify this route handler in any way.
  res.json(req.user);
});
server.get('/restricted/*', loggedIn, (req, res, next) => {
  next();
});

module.exports = { server };
