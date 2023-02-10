const User = require("../models/solera.model.js");

exports.findUser = (req, res) => {

    if(typeof req.body.usuario === 'undefined' || typeof req.body.password === 'undefined') 
        return res.status(200).send({message: `Parametros Invalidos`});

    const {usuario, password} = req.body;

    User.findByUserAndCompare(usuario, password, (err, data) => {
        if(err) {            
            if (err.found === "not") 
                res.status(200).send({message: `Usuario y/o password incorrecta.`});
            else 
                res.status(500).send({message: `Error al buscar el usuario: ${req.body.usuario}`});
            
        }else res.send(data);
    });
};