const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

//@desc     Register User
//@route    POST /api/goals
//@Access   Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password){
        res.status(400)
        throw Error('Please add all fields')
    }
    res.json({ Message: "Register Pengguna"})
})

//@desc     Login User
//@route    POST /api/login
//@Access   Public
const loginUser = asyncHandler(async (req, res) => {
    res.json({ Message: "Login Pengguna"})
})

//@desc     Get User Dtaa
//@route    GET /api/users/me
//@Access   Public
const getMe = asyncHandler(async (req, res) => {
    res.json({ Message: "Pengguna display"})
})

module.exports = { 
    registerUser,
    loginUser,
    getMe
 }