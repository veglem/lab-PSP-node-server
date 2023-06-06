const express = require('express');

const app = express();

const host = 'localhost';
const port = 8080;

app.use(express.static(__dirname));

app.listen(port, host, () => {
    console.log(`Сервер запущен по адресу http://${host}:${port}`);
});