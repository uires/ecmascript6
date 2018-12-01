class NegociacaoController {
	constructor() {
		let $ = document.querySelector.bind(document);
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
	}

	adicionarNegociacao(event) {
		event.preventDefault();
		let negociacao = new Negociacao(new Date(DateHelper.tranformStringToDate(this._inputData.value))
					, this._inputQuantidade.value, this._inputValor.value);
		console.log(DateHelper.transformDateToString(negociacao.data));
	}
}