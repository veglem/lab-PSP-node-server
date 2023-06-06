import { ProductCard } from "../../components/product-card";
import { Message } from "../../components/message";
import { ProductPage } from "../product";
import { manager } from "../../modules/DataManager.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent
    }

    get pageRoot() {
        return document.getElementById('main-page')
    }

    static getData() {
        return manager.get('http://localhost:8000/stocks/', (data) => {
            return data
        })
    }

    getHTML() {
        return (
            `
                <h1>Добро пожаловать!</h1>
                <h1>Смотрите продукты на нашем сайте :D</h1>
                <div id="main-page" class="d-flex flex-wrap"><div/>
            `
        )
    }

    clickButton(e) {
        const buttonId = e.target.dataset.id
    
        const productPage = new ProductPage(this.parent, buttonId)
        productPage.render()
    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        
        MainPage.getData().then((data) =>{
            data.forEach((item) => {
                const button = new ProductCard(this.pageRoot, item)
                button.render(this.clickButton.bind(this))
            })
        })

        const message = new Message(this.parent)
        message.render()
    }
}