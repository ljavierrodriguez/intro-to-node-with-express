const { request } = require('express');
const express = require('express');
const main = require('./routes/main');
const app = express();

app.use(express.urlencoded({ extended: true}))
app.use(express.json());

app.use('/', main);

app.listen(9001, () => {
    console.log('Server listening on Port http://localhost:9001');
})

