let m_user = require('../models/m_user');

let login = async (req,res)=>{
    const {nombre, password} = req.body;
    m_user.login([nombre,password],(err,rows)=>{
        if(err){
            console.log(err);
           return res.status(500).send({message: "Error fatal"});
        }else{
            const RowDataPacket = rows[0];
            const {count}= RowDataPacket;
            console.log(count);
            if(count == 1){
               return res.status(200).send({message:"Logeado bien"})
            }else{
               return  res.status(404).send({message: "El usuario no existe"});
            }
        }
    });
}

let signup = async (req,res)=>{

    const {correo, name,password,telfono} = req.body;
    m_user.signup([name,password,correo,telfono],(err,rows)=>{
        if(err){
            return res.status(500).send({message: "Error fatal"});
        }else{
            if(rows.affectedRows > 0){
                return res.status(200).send({message:"Bien"});
            }else{
                return res.status(500).send({message:"Bien"});
            }
        }
    });

}
module.exports = {login,signup}