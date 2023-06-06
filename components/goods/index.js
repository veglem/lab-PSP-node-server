export class Goods {
    constructor(parent, data) {
        this.parent = parent;
        this.data = data;
    }

    getHTML() {
        let answer =`<div class="accordion" id="accordion-${this.data.id}">`
        this.data.data.forEach((item) => {
            answer += 
                `<div class="accordion-item" id="good-item-${this.data.id}-${item.id}">
                    <h2 class="accordion-header" id="heading-${this.data.id}-${item.id}">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${this.data.id}-${item.id}" aria-expanded="false" aria-controls="collapse-${this.id}-${item.id}">
                            ${item.name}
                        </button>
                    </h2>
                    <div id="collapse-${this.data.id}-${item.id}" class="accordion-collapse collapse" aria-labelledby="heading-${this.data.id}-${item.id}" data-bs-parent="#accordion-${this.data.id}-${item.id}">
                        <div class="accordion-body">
                            Единиц товара в наличии: ${item.num}
                            <button class="btn btn-outline-success" id="button-price-${this.data.id}-${item.id}" style="position: relative; left: 15%;" disabled>
                                ${item.price}
                            </button>
                        </div>
                    </div>
                </div>`
        })
        answer += `</div>`
        return answer
    }

    render() {
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
    }
}