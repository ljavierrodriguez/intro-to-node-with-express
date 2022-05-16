const route = require('express').Router();

route.get('/:id', (req, res) => {
    const { id } = req.params;
    const { type, lastname } = req.query; // ?type=node&lastname=Prueba;
    res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
</head>
<body>
    <h2>Hola Mundo (${type}) ID: (${id}) </h2>
    <form action="/prueba" method="post">
        <input type="text" name="nombre" placeholder="Ingrese Nombre" value="${lastname}" />
        <button>Enviar</button>
    </form>
</body>
</html>
    `)
})

route.post('/prueba', (req, res) => {
   console.log(req.body);
   res.send(`Hola ${req.body.nombre}`)
})

/* route.put('/prueba/:id', (req, res) => {

});

route.delete('/prueba/:id', (req, res) => {
    
}); */

module.exports = route;