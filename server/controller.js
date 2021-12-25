require('dotenv').config()
const {CONNECTION_STRING} = process.env;
const Sequelize = require('sequelize')
const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});

module.exports = {
    testRun: (req, res)=>{
        const {test} = req.body
        sequelize.query(
            `CREATE TABLE workouts (
                 workout_id SERIAL PRIMARY KEY
                 workout_name VARCHAR(20)
                 );
                 
                 INSERT INTO workouts (workout_name)
                 VALUES ('${test}')`)
            .then(dbRes =>{
                res.status(200).send(dbRes)
            }).catch(err => console.log(err))
    }
}