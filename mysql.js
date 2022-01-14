const mysql = require('mysql');
const conection = mysql.createConnection({
    host: 'localhost',
    user: 'Harold',
    password: '1234',
    database: 'db_labsimulation'
});

conection.connect((err)=>{
    if(err) throw err
    console.log('La conexión funciona!');
});

conection.query('SELECT * FROM usuario',(err,rows)=>{
    if(err) throw err
    console.log('Los datos de la tabla son estas:');
    console.log(rows);
});
conection.end();