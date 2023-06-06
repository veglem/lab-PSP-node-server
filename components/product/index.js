export class Product {
    constructor(parent, data) {
        this.parent = parent
        this.data = data
    }

    getHTML() {
        return (
            `
                <div class="card mb-3" style="width: 540px;" id="card-2-id">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${this.data.src}" class="img-fluid" alt="картинка">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${this.data.name}</h5>
                                <p class="card-text">В наличии ${this.data.num} видов товара "${this.data.name}"</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        )
    }

    render() {
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
    }
}