// Importamos la dependencia
const express = require('express');

// Instanciamos nuestra app
const app = express();

// Seteamos el puerto
const port = 3000;

// Configuraciones para trabajar con EJS
app.set("view engine", "ejs");
app.use(express.static('public'));

// Creamos una ruta con contenido
app.get("/", (req, res) => {
    res.render("pages/login");
});

// Iniciamos el servidor
app.listen(port, () => {
    console.log(`Aplicación funcionando en el puerto ${port}`);
});