const express = require("express");
// const getUsers = require("../controllers/user");
const { getUsers, handleLogin, handleRegister } = require("../controllers/user");
const userRoute = express.Router();

// userRoute
//     .route('/')
//     .get(() => console.log("user get"));

userRoute.route('/').get(getUsers);
userRoute.route('/register').post(handleRegister);
userRoute.route('/').post(handleLogin);

module.exports = userRoute;