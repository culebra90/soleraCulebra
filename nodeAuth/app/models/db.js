const mysql = require('mysql2/promise');
const dbConfig = require("../config/db.config.js");

const connQuery = async(queryStrim, params) => {
    try{

        const conn = await mysql.createConnection(dbConfig);  

        const [rows] = await conn.execute(queryStrim, params);

        conn.end();

        return rows[0];

    }catch(err){

        console.log("err conn: ", err)
        return err;
    }    
}

module.exports = connQuery;