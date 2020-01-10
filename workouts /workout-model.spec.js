const Workouts = require("./workout-model.js")
const Users = require('../users/users-model.js')
const db = require('../database/db-config.js')

describe('The Workout Model', () => {
    
    beforeEach(async () => {
        //wipe db
        await db('workout').del();
        await db('users').del();
    })
    describe('the add function', () => {
        it('should add a new workout', async ()=>{
            const userData = [{id: 1, username: 'maudegregori55', password: 'degregori', email: 'mdegregori55@gmail.com'}]
            await Users.add(userData)
            const workoutData = [{date: 19960809, name: 'My favorite chest workout', description: 'description goes here', user_id: 1}, {date: 19960810, name: 'My favorite leg workout', description: 'description goes here', user_id: 1}]
            await Workouts.add(workoutData)

            const workout = await db('workout')
            expect(workout.length).toBe(2);
            
        })


    })

    describe('the delete function', () => {

        it('should resolve to a newly deleted workout', async () => {
            //test setup
            const workoutData = {date: 19960809, name: 'My favorite chest workout', description: 'description goes here', user_id: 1}
            const workout = await Workouts.remove(workoutData);

            expect(workout).toEqual(0)
        })
    })

    // describe('the edit function', () => {

    //     it('should resolve to a newly edited workout', async () => {
    //         const workoutData = {date: 19960809, name: 'My favorite chest workout', description: 'description goes here', user_id: 1}
    //         const workoutData2 = {date: 19960809, name: 'My second favorite chest workout', description: 'description goes here', user_id: 1}
    //         const workout = await Workouts.update(workoutData.name).to(workoutData2.name)

    //         expect(workout[0].name).toBe('My second favorite chest workout')
    //     })
    // })
})

