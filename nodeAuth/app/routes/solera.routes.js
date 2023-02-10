module.exports = app => {
    const tutorials = require("../controllers/solera.controller.js");
  
    var router = require("express").Router();  
    
    router.post("/", tutorials.findUser);
    app.use('/api', router); 
};