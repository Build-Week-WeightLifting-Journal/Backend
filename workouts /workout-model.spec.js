const Workouts = require("./workout-model.js")
const Users = require('../users/users-model.js')
const db = require('../database/db-config.js')

describe('The Workout Model', () => {
    
    beforeEach(async () => {
        //wipe db
        // await db('workout').del();
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

    // describe('the delete function', () => {
    //     it('should delete a workout', async ()=> {
    //         await Workouts.add({date: 19960809, name: 'My favorite workout about to be deleted', description: 'description goes here', user_id: 1})
    //         await workouts.remove(1);

    //         const CarData = await db('workout')
    //         expect(CarData).toHaveLength(2)
    //     })

    //     it('should resolve to a newly delete car', async () => {
    //         //test setup
    //         const carData = {make: "mazda", model: "3", year: 1990}
    //         const car = await Cars.remove(carData);

    //         expect(car).toEqual(0)
    //     })
    // })
})

