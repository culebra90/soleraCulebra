const connQuery = require("./db.js");
const comparePass = require("../utils/compare.bcrypt");

const User = (usuario) => {
    this.id = usuario.id;
    this.password = usuario.password;
    this.username = usuario.username;
    this.fullname = usuario.fullname;
    this.createdAt = usuario.createdAt;
    this.updatedAt = usuario.updatedAt;
};

User.findByUserAndCompare = async (usuario, password, result) => { 
    try{

        const resultQuery = await connQuery("select * from Users u WHERE u.username = ?", [usuario]);        
        const samePass = (resultQuery) ? await comparePass(password, resultQuery.password) : false;

        (samePass && resultQuery.fullname) 
            ? result(null, {nombreCompleto: resultQuery.fullname}) 
            : result({found: 'not'}, null) 

    }catch(err){
        console.log("err ", err);
        result(err, null);
        return;
    }    
};

module.exports = User;