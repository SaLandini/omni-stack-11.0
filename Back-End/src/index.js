const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/*
    GET:Busca uma informação do back-end
    POST: Cria uma informação do back-end
    PUT: Altera uma informação do back-end
    DELETE: Deleta uma informação do back-end
*/

/*
    Tipos de parametro:

    -Query: Parâmetros nomeados enviados na rota após o  simbulo de interrogação (Filtros, paginação) 
    -Route: Parâmetros utilizados para indentificar recursos
    -Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/


app.listen(3333);
