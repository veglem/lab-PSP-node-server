const express = require('express');
const {StocksController} = require('./StocksController');

const stocksRouter = express.Router();

stocksRouter.get('/', StocksController.findStocks);
stocksRouter.get('/:id', StocksController.findStockById);
stocksRouter.post('/', StocksController.addStock);
stocksRouter.delete('/:id', StocksController.deleteStock);

module.exports = stocksRouter;