const router = require('express').Router();


const authRouter = require('../auth/auth-router.js')
const workoutRouter = require('../workouts /workout-router.js')
const exerciseRouter = require('../exercises/exercise-router.js')
const userRouter = require('../users/users-router.js')


router.use('/auth', authRouter);
router.use('/workouts', workoutRouter);
router.use('/exercises', exerciseRouter)
router.use('/user', userRouter)


module.exports = router;
