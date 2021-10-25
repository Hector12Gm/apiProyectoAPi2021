let connection = require('../connection/connection');

let signup = (data,cb)=>{
    connection.query("INSERT INTO users VALUES (?,?,?,?)",data,cb);
}
let login = (data,cb)=>{
    connection.query("SELECT count(nombre_usuario) as 'count' FROM users WHERE nombre_usuario = ? AND password = ? ",data,cb);
}
module.exports = {signup,login};