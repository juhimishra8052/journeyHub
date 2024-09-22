const express=require('express');
const router=express.Router();
const {registration,getUser,updateuser,deleteuser}=require('../controllers/registerController');
const { get } = require('mongoose');

router.post('/registration',registration);
router.get('/getuser',getUser);
router.put('/update/:id',updateuser);
router.delete('/deleteuser/:id',deleteuser);

module.exports=router;