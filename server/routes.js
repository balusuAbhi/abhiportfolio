const express = require('express');
const {handleHome,handleContact,handleForm} = require('./controller');
const router = express.Router();
const connectDB = require('./database/databaseModel'); 


//connectDB
connectDB();

router.get('/', handleHome);
router.get('/contact',handleContact);

//form data
router.post('/sendData', handleForm)

module.exports = router;