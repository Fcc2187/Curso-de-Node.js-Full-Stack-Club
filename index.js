//const {Person} = require('./person');
const dotenv = require('dotenv');
const connectToDatabase = require('./modules/src/database/connect');

dotenv.config();

connectToDatabase();


//require('./modules/fs');
//require('./modules/http');

require('./modules/express');

//const person = new Person('Alice');
