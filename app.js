const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Configurar el directorio de recursos estáticos
app.use(express.static('public'));

// Ruta para la página de inicio
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Ruta para la página de contacto
app.get('/contacto', (req, res) => {
    res.sendFile(__dirname + '/public/contacto.html');
});

// Ruta para la página de nosotros
app.get('/nosotros', (req, res) => {
    res.sendFile(__dirname + '/public/nosotros.html');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
