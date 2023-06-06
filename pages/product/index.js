import { Product } from "../../components/product/index.js";
import { MainPage } from "../main/index.js";
import { BackButton } from "../../components/back-button/index.js";
import { Goods } from "../../components/goods/index.js";
import { manager } from "../../modules/DataManager.js";

export class ProductPage {
    constructor(parent, id) {
        this.parent = parent
        this.id = id
    }

    getDataProduct(){
        return manager.get(`http://localhost:8000/stocks/${this.id}`, (data) => {
            return data
        })
    }

    getDataGoods() {
        return manager.get(`http://localhost:8000/goods/${this.id}`, (data) => {
            return data
        })
    }

    get pageRoot() {
        return document.getElementById('product-page')
    }

    getHTML() {
        return (
            `
                <h1>Результаты поиска:</h1>
                <div id="product-page"></div>
            `
        )
    }

    clickBack() {
        const mainPage = new MainPage(this.parent)
        mainPage.render()
    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        this.getDataProduct().then((dataProduct) => {
            const product = new Product(this.pageRoot, dataProduct)
            product.render()
        })
        
        const backButton = new BackButton(this.pageRoot)
        backButton.render(this.clickBack.bind(this))

        this.getDataGoods().then((dataGoods) => {
            const goods = new Goods(this.pageRoot, dataGoods)
            goods.render()
        })
    }
}