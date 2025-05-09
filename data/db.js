const mysql = require('mysql2')

// variabile di connesione
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Albertocadorin28',
    database: 'blog_schema'
})

connection.connect((err) => {
    if (err) throw err
    console.log('MySQL server')
})

module.exports = connection