const {StocksRepository} = require('./StocksRepository');

class StocksDAO {
    constructor(id, name, num, src, nov) {
        this.id = id
        this.name = name
        this.num = num
        this.src = src
        this.nov = nov
    }

    static _validateId(id) {
        const numberId = Number.parseInt(id)
        if (Number.isNaN(numberId)) {
            throw new Error('invalidate id')
        }
    }

    static _validate(stock) {
        if (
            stock.id === undefined ||
            stock.name === undefined ||
            stock.num === undefined ||
            stock.src === undefined ||
            stock.nov === undefined
        ) {
            throw new Error('invalidate stock data')
        }

        this._validateId(stock.id)
    }

    static find() {
        const stocks = StocksRepository.read()

        return stocks.map(({id, name, num, src, nov}) => {
            return new this(id, name, num, src, nov)
        })
    }

    static findById(id) {
        this._validateId(id)

        const stocks = StocksRepository.read()
        const stock = stocks.find((s) => s.id === id)

        return new this(stock.id, stock.name, stock.num, stock.src, stock.nov)
    }

    static insert(stock) {
        this._validate(stock)

        const stocks = StocksRepository.read()
        StocksRepository.write([...stocks, stock])

        return new this(stock.id, stock.name, stock.num, stock.src. stock.nov)
    }

    static delete(id) {
        this._validateId(id)

        const stocks = StocksRepository.read()
        const filteredStocks = stocks.filter((s) => s.id !== id)

        StocksRepository.write(filteredStocks)

        return filteredStocks.map(({id, name, num, src, nov}) => {
            return new this(id, name, num, src, nov)
        })
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            num: this.num,
            src: this.src,
            nov: this.nov,
        }
    }
}

module.exports = {
    StocksDAO,
}