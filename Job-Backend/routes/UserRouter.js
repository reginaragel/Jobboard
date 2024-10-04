const router=require('express').Router();
const UserControl=require('../controllers/UserControl');


router.post('/signup',UserControl.signup);
router.post('/login',UserControl.login)

module.exports=router;