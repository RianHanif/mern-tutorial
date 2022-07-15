//@desc     Get goals
//@route    GET /api/goals
//@Access   Private
const getGoals = (req,res) => {
    if(!req.body.text){
        res.status(400).json({message: 'Please add a text field'})
    }

    res.status(200).json({message: 'Get Goals'})
}

//@desc     set goals
//@route    POST /api/goals
//@Access   Private
const setGoal = (req,res) => {
    res.status(200).json({message: 'Set Goal'})
}

//@desc     Update goals
//@route    PUT /api/goals/:id
//@Access   Private
const updateGoal = (req,res) => {
    res.status(200).json({message: `Update Goal ${req.params.id}`})
}

//@desc     Delete goals
//@route    DELETE /api/goals/:id
//@Access   Private
const deleteGoal = (req,res) => {
    res.status(200).json({message: `Delete Goal ${req.params.id}`})
}


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}