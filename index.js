const express = require('express');
const app = express();
const routes = require('./src/routes/Routes');

//app.use(routes);

app.listen(8080, (error) => {
    if (error) {
        console.log('Erro na aplicação.');
    } else {
        console.log('App rodando na 8080.');
    }
});