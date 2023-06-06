const {GoodsRepository} = require('./GoodsRepository');

class GoodsDAO {
    constructor(id, data) {
        this.id = id;
        this.data = data
    }

    static _validateId(id) {
        const numberId = Number.parseInt(id);
        if (Number.isNaN(numberId)) {
            throw new Error('invalidate id');
        }
    }

    static _validate(good) {
        if (
            good.id === undefined ||
            good.name === undefined ||
            good.num === undefined ||
            good.price === undefined
        ) {
            throw new Error('invalidate stock data');
        }

        this._validateId(good.id);
    }

    static find() {
        const goods = GoodsRepository.read();

        return goods.map(({id, data}) => {
            return new this(id, data);
        });
    }

    static findById(id) {
        this._validateId(id);

        const goods = GoodsRepository.read();
        const item = goods.find((s) => s.id === id);

        return new this(item.id, item.data);
    }

    static insert(item) {
        this._validateId(item.id)
        item.data.forEach((good) => {
            this._validate(good);
        })

        const goods = GoodsRepository.read();
        GoodsRepository.write([...goods, item]);

        return new this(item.id, item.data);
    }

    static delete(id) {
        this._validateId(id);

        const goods = GoodsRepository.read();
        const filteredGoods = goods.filter((s) => s.id !== id);

        GoodsRepository.write(filteredGoods);

        return filteredGoods.map(({id, data}) => {
            return new this(id, data);
        });
    }

    toJSON() {
        return {
            id: this.id,
            data: this.data
        }
    }
}

module.exports = {
    GoodsDAO,
}