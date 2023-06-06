const {DBConnector} = require('../../modules/DBConnector');

class GoodsRepository {
    static db = new DBConnector('goods.json');

    static read() {
        const file = this.db.readFile();

        return JSON.parse(file);
    }

    static write(json) {
        this.db.writeFile(JSON.stringify(json));
    }
}

module.exports = {
    GoodsRepository,
}