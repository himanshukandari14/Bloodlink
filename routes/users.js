var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;


const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/donorform")

//schema matlab aapko ye batana banne walla har document mei kya kya hoga

const donorschema= mongoose.Schema({
  name:String,
  phonenumber:Number,
  bloodgroup:String,
  email:String,
  state:String,
});

module.exports = mongoose.model("user",donorschema);
