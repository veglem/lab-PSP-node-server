const express = require('express');
const {GoodsController} = require('./GoodsController');

const goodsRouter = express.Router();

goodsRouter.get('/', GoodsController.findGoods);
goodsRouter.get('/:id', GoodsController.findGoodById);
goodsRouter.post('/', GoodsController.addGood);
goodsRouter.delete('/:id', GoodsController.deleteGood);

module.exports = goodsRouter;