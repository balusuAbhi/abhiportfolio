const express = require('express');
const {handleHome,handleContact,handleForm, handleResume} = require('./controller');
const router = express.Router();
const connectDB = require('./database/databaseModel'); 


//connectDB
connectDB();

router.get('/', handleHome);
router.get('/contact',handleContact);
router.get('/resume', handleResume);

//form data
router.post('/sendData', handleForm)

module.exports = router;