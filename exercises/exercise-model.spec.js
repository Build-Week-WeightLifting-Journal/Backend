const Exercise = require("./exercise-model.js")
const db = require("../database/db-config.js")

const Workouts = require("../workouts /workout-model.js")
const Users = require('../users/users-model.js')


describe('The Exercise Model', () => {
    
    beforeEach(async () => {
        await db('exercise').del();
        await db('workout').del();
        await db('users').del();
    })
    describe('the add function', () => {
        it('should add a new exercise', async ()=>{
            const userData = [{id: 1, username: 'maudegregori55', password: 'degregori', email: 'mdegregori55@gmail.com'}]
            await Users.add(userData)
            const workoutData = [{id:1, date: 19960809, name: 'My favorite chest workout', description: 'description goes here', user_id: 1}]
            await Workouts.add(workoutData)

            const exerciseData = [{name: "My monday bench press", sets:3, reps:5, weight:185, workout_id: 1}]
            await Exercise.add(exerciseData)
            

            const exercise = await db('exercise')
            console.log('exercise', exercise)
            expect(exercise.length).toBe(1);
            expect(exercise[0].name).toBe('My monday bench press')
            expect(exercise[0].sets).toBe(3)
            expect(exercise[0].reps).toBe(5)
            expect(exercise[0].weight).toBe(185)
            expect(exercise[0].workout_id).toBe(1)

        })


    })

    describe('the delete function', () => {

        it('should resolve to a newly deleted exercise', async () => {
            //test setup
            const exerciseData = [{name: "My monday bench press", sets:3, reps:5, weight:185, workout_id: 1}]
            const exercise = await Exercise.remove(exerciseData)

            expect(exercise).toEqual(0)
        })
    })


})

