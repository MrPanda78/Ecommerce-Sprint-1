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
    const interests = [
        { name: 'Whiskey Blenders Pride 750ml', image: '/images/whisky.webp', points: '19.900' },
        { name: 'Nombre del producto o servicio', image: '/images/fondo_blanco_negro.webp', points: 'XX.XXX' },
        { name: 'Nombre del producto o servicio', image: '/images/fondo_blanco_negro.webp', points: 'XX.XXX' },
        { name: 'Nombre del producto o servicio', image: '/images/fondo_blanco_negro.webp', points: 'XX.XXX' }
    ];

    const mostRequested = [
        { name: 'Coca Cola Lata 220ml - Pack original x8', image: '/images/coca_cola_lata.webp', points: '760' },
        { name: 'Nombre del producto o servicio', image: '/images/fondo_blanco_negro.webp', points: 'XX.XXX' },
        { name: 'Nombre del producto o servicio', image: '/images/fondo_blanco_negro.webp', points: 'XX.XXX' },
        { name: 'Nombre del producto o servicio', image: '/images/fondo_blanco_negro.webp', points: 'XX.XXX' },
        { name: 'Nombre del producto o servicio', image: '/images/fondo_blanco_negro.webp', points: 'XX.XXX' },
        { name: 'Nombre del producto o servicio', image: '/images/fondo_blanco_negro.webp', points: 'XX.XXX' },
        { name: 'Nombre del producto o servicio', image: '/images/fondo_blanco_negro.webp', points: 'XX.XXX' },
        { name: 'Nombre del producto o servicio', image: '/images/fondo_blanco_negro.webp', points: 'XX.XXX' }
    ];

    res.render("pages/index", { loggedIn: 1, interests, mostRequested });
});

app.get("/products", (req, res) => {
    res.render("pages/products", { loggedIn: 1 });
});

app.get("/cart", (req, res) => {
    res.render("pages/cart", { loggedIn: 1 });
});

app.get("/checkout", (req, res) => {
    res.render("pages/checkout", { loggedIn: 1 });
});

app.get("/register", (req, res) => {
    res.render("pages/register", { loggedIn: 0 });
});

app.get("/login", (req, res) => {
    res.render("pages/login", { loggedIn: 0 });
});

// Iniciamos el servidor
app.listen(port, () => {
    console.log(`Aplicación funcionando en el puerto ${port}`);
});