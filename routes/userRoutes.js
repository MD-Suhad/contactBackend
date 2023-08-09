const express = require('express');
const asyncHandler = require("express-async-handler");
const { 
   registerUser, 
   loginUser, 
   currentUser } = 
   require('../controller/userController');
const validateToken = require('../middleware/validateTokenHandler');




const router = express.Router();

router.post("/register",registerUser)

router.post("/login",loginUser);

router.get("/current" ,validateToken ,currentUser);
 
module.exports = router;