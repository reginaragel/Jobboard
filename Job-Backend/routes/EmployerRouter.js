const router=require('express').Router();
const EmployerControl=require('../controllers/EmployerControl');


router.post('/empsignup',EmployerControl.empsignup);
router.post('/emplogin',EmployerControl.emplogin);


module.exports=router;