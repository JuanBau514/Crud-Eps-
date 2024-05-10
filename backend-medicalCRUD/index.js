
import server from './server/server.js';

const port = process.env.PORT_SERVER;

server.listen(port, () => {
    console.log( `REST API funcionando en el puerto ${port}` );
});

server.get('/', (req, res) => {
    res.send('¡Hola! El servidor está funcionando correctamente.');
});


  