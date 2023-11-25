var express = require('express');
var router = express.Router();
const Donor= require('../models/Donor');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// get donors route
router.get('/getdonors',function(req,res,next){
  res.render('getdonors');
})
//be a donor route
router.get('/beadonor',function(req,res,next){
  res.render('beadonor')
})

//blog route
router.get('/blogs',function(req,res,next){
  res.render('blogs')
})

//handle form submission
router.post('/submit-form', async (req, res) => {
  try {
    const {
      name,
      phoneNumber,
      email,
      gender,
      bloodGroup,
      state,
      address,
    } = req.body;

    // Create a new donor using the Donor model
    const newDonor = new Donor({
      name,
      phoneNumber,
      email,
      gender,
      bloodGroup,
      state,
      address,
    });

    // Save the donor to the database
    await newDonor.save();

    res.status(200).render('formsucces');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});





// Add a new route to see all donors
router.get('/seealldonors', async (req, res) => {
  try {
    const allDonors = await Donor.find();
    console.log(allDonors);
    res.status(200).json(allDonors);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});




module.exports = router;
