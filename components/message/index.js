export class Message {
    constructor(parent) {
        this.parent = parent
    }

    getHTML() {
        return (
            `
            <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" id="toast-id">
                <div class="toast-header">
                    <img src="https://i.postimg.cc/RV2JzmXd/4.jpg" class="rounded me-2" alt="камень"  width="30", height="30">
                    <strong class="me-auto">Помощник Stonks</strong>
                    <small>уведомление</small>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Закрыть"></button>
                </div>
                <div class="toast-body">Приветствую вас в нашем каталоге товаров!</div>
            </div>
            `
        )
    }

    render() {
        this.parent.insertAdjacentHTML('beforeend', this.getHTML())
        const toast = new bootstrap.Toast(document.getElementById('toast-id'))
        toast.show()
    }
}