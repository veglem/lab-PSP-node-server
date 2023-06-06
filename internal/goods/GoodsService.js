const {GoodsDAO} = require('./GoodsDAO');

class GoodsService {
    static findGoods(id) {
        if (id !== undefined) {
            return GoodsDAO.findById(id).toJSON();
        }

        return GoodsDAO.find().map((item) => item.toJSON());
    }

    static addGood(item) {
        return GoodsDAO.insert(item).toJSON();
    }

    static deleteGood(id) {
        return GoodsDAO.delete(id).map((item) => item.toJSON());
    }
}

module.exports = {
    GoodsService,
}