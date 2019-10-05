const db = require('../data/dbConfig');

const getAllUsers = async () => {
    return await db('Users')
}
module.exports ={getAllUsers}