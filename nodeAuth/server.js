const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./app/routes/solera.routes.js")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}.`);
});