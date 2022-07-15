//@desc     Register User
//@route    POST /api/goals
//@Access   Public
const registerUser = (req, res) => {
    res.json({ Message: "Register Pengguna"})
}

//@desc     Login User
//@route    POST /api/login
//@Access   Public
const loginUser = (req, res) => {
    res.json({ Message: "Login Pengguna"})
}

//@desc     Get User Dtaa
//@route    GET /api/users/me
//@Access   Public
const getMe = (req, res) => {
    res.json({ Message: "Pengguna display"})
}

module.exports = { 
    registerUser,
    loginUser,
    getMe
 }