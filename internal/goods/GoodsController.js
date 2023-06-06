const {GoodsService} = require('./GoodsService');

class GoodsController {
    static findGoods(req, res) {
        try {
            res.send(GoodsService.findGoods());
        } catch (err) {
            res.status(400).send({status: 'Bad Request', message: err.message})
        }
    }

    static findGoodById(req, res) {
        try {
            const id = Number.parseInt(req.params.id);
            res.send(GoodsService.findGoods(id))
        } catch (err) {
            res.status(400).send({status: 'Bad Request', message: err.message})
        }
    }

    static addGood(req, res) {
        try {
            res.send(GoodsService.addGood(req.body));
        } catch (err) {
            res.status(400).send({status: 'Bad Request', message: err.message})
        }
    }

    static deleteGood(req, res) {
        try {
            const id = Number.parseInt(req.params.id);
            res.send(GoodsService.deleteGood(id));
        } catch (err) {
            res.status(400).send({status: 'Bad Request', message: err.message})
        }
    }
}

module.exports = {
    GoodsController,
};