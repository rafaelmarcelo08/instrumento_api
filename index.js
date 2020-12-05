const express = require('express');
const app = express();

/**Conexão com o banco de dados */
const db = require('./src/repository/DataBase');

app.get('/', (req, res) => {
    console.log('Testado a aplicação');
});

app.listen(8080, (error) => {
    if (error) {
        console.log('Erro na aplicação.');
    } else {
        console.log('App rodando na 8080.');
    }
});