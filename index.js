const express = require('express');
const stocks = require('./internal/stocks');
const stocksRouter = require('./internal/stocks');
const goods = require('./internal/goods');
const goodsRouter = require('./internal/goods');

const app = express();

const host = 'localhost';
const port = 8000;

app.use(express.json());

app.use('/stocks', stocksRouter);
app.use('/goods', goodsRouter)

app.listen(port, host, () => {
    console.log(`Сервер запущен по адресу http://${host}:${port}`);
});