let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'us-cdbr-east-04.cleardb.com',
    user: 'bb35afa5fe01c5',
    password: 'a77550ac',
    database: 'heroku_5d92d94f28c72d1'

});
connection.connect((err)=>{
    if(err){
        console.log("Hubo un gran error");
    }else{
        console.log("Se conecto a la base de datos");
    }
});

module.exports = connection;