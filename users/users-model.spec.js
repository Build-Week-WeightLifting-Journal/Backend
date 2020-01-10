const Users = require("./users-model.js")
const db = require('../database/db-config.js')

describe('The Users Model', () => {
    
    beforeEach(async () => {
        await db('users').del();
    })
    describe('the add function', () => {
        it('should add a new user', async ()=>{
            const userData = [{username: 'maudegregori', password: 'degregori', email: 'mdegregori@gmail.com'},{username: 'newguy', password: 'newguy', email: "newguy@gmail.com"}]
            await Users.add(userData)
            
            const users = await db('users')
            console.log('users', users)
            expect(users.length).toBe(2);
            expect(users[0].username).toBe('maudegregori')
            expect(users[0].password).toBe('degregori')
            expect(users[0].email).toBe('mdegregori@gmail.com')
            expect(users[1].username).toBe('newguy')
            expect(users[1].password).toBe('newguy')
            expect(users[1].email).toBe('newguy@gmail.com')


        })

    })


})

