import {Sequelize} from 'sequelize';

const db = new Sequelize('database_crud', 'root', 'SoyHenry', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db;