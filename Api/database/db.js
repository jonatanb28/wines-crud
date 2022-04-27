import {Sequelize} from 'sequelize';

const db = new Sequelize('heroku_adaf35e517ce1e5', 'bca6d519d5c372', '65bc54b4', {
    host: 'us-cdbr-east-05.cleardb.net',
    dialect: 'mysql'
})


export default db;