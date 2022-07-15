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

    //Check if user exist
    const userExist = await User.findOne({email})

    if(userExist){
        res.status(400)
        throw Error('User already exists')
    }

    //Hash Password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Create User
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
        })
    } else {
        res.status(400)
        throw Error('invalid user data')
    }
})

//@desc     Login User
//@route    POST /api/login
//@Access   Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    //check for user email
    const user = await User.findOne({email})

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token : generateToken(user._id),
        })
    } else {
        res.status(400)
        throw Error('Invalid credentials')
    }
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