const db = require('../data/dbConfig');
const Users = require('./usersModel');

// test model


// take the database to initial state
beforeEach(async () => {
  await db('Users').truncate();
});

describe('Users.insert',()=>{
    it('should add users to db', async() => {
        //check if truncation works
        let allUsers = await Users.getAllUsers()
        expect(allUsers).toHaveLength(0)
    })
})