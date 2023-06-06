export class ProductCard {
    constructor(parent, data) {
        this.parent = parent
        this.data = data
    }

    getHTML() {
        // <span class="badge text-bg-dark">${this.data.num}</span>
        let result = `
                <div class="card" style="width: 300px;">
                    <img class="card-img-top" src="${this.data.src}" alt="картинка" style="height: 200px">
                    <div class="card-body">
                        <button class="btn btn-primary" id="click-button-${this.data.id}" data-id="${this.data.id}">${this.data.name + ' '}</button>`
        if (this.data.nov === "true") {
            result += `<button class="btn btn-outline-danger" id="new-${this.data.id}" style="position: relative; left: 15%;" disabled>Новинка!</button>`
        }
        result += `</div>
                </div>
            `
        return result
    }

    addListeners(listener) {
        document
            .getElementById(`click-button-${this.data.id}`)
            .addEventListener("click", listener)
    }

    render(listener) {
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(listener)
    }
}