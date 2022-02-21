const express = require ('express');

const mojocontroller = require('../controller/mojocontroller');

const mojorouter = express.Router();

mojorouter.get('/:mojo', mojocontroller);

module.exports = mojorouter;