// knexfile.js
const path = require('path')

module.exports = {
    development: {
        client: 'mysql',
        connection: {
            host: process.env.DB_HOST,
            database: process.env.DB_DATABASE,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
        },
        migrations: {
            directory: path.join(__dirname, 'db', 'migrations'),
            tableName: 'migrations'
        }
    },
    production: {
        client: 'mysql',
        connection: {
            host: process.env.DB_HOST,
            database: process.env.DB_DATABASE,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
        },
        migrations: {
            directory: path.join(__dirname, 'db', 'migrations'),
            tableName: 'migrations'
        }
    }
};