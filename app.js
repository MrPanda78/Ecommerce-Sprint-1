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

app.get("/product", (req, res) => {

    const product = {
        name: "Whiskey Jack Daniels Honey 750ml",
        price: "19.900",
        images: [
            "/images/whisky.webp",
            "/images/whisky.webp",
            "/images/whisky.webp"
        ],
        description: `Un verdaderamente fabuloso licor de whisky Blenders Pride. Está hecho con una mezcla de ricas especias y suave, miel tersa y el resultado es delicioso sobre hielo o café.

        Aroma de caramelo y roble carbonizado, un poco de flor naranja, miel de manuka y vainilla.

        Boca: grueso y cremoso, con notas de vainilla, roble tostado, miel de nuevo, un poco de albaricoque también.

        Acabado: De buena longitud - redondeado y rico.

        No incluye vasos, la foto es sólo ilustrativa.`
    };

    const interests = [
        { name: 'Whiskey Blenders Pride 750ml', image: '/images/whisky.webp', points: '19.900' },
        { name: 'Nombre del producto o servicio', image: '/images/fondo_blanco_negro.webp', points: 'XX.XXX' },
        { name: 'Nombre del producto o servicio', image: '/images/fondo_blanco_negro.webp', points: 'XX.XXX' },
        { name: 'Nombre del producto o servicio', image: '/images/fondo_blanco_negro.webp', points: 'XX.XXX' }
    ];

    res.render("pages/product", {
        loggedIn: 1,
        product,
        interests
    });
});

app.get("/cart", (req, res) => {
    const productsCart = [
        { name: 'Whiskey Blenders Pride 750ml', image: '/images/coca_cola_lata.webp', points: '19.900' },
        { name: 'Whiskey Blenders Pride 750ml', image: '/images/whisky.webp', points: '1.000' }
    ];

    res.render("pages/cart", { loggedIn: 1, productsCart });
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