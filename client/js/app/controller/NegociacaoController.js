class NegociacaoController {
	constructor() {
		let $ = document.querySelector.bind(document);
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
	}

	adicionarNegociacao(event) {
		event.preventDefault();

		console.log(this._inputData.value);
	}
}