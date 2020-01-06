const router = require('express').Router();

// const authRouter = require('../auth/auth-router.js');
// const usersRouter = require('../users/user-router.js');
const authRouter = require('../auth/auth-router.js')
const workoutRouter = require('../workouts /workout-router.js')
const exerciseRouter = require('../exercises/exercise-router.js')


router.use('/auth', authRouter);
router.use('/workouts', workoutRouter);
router.use('/exercises', exerciseRouter)


module.exports = router;
