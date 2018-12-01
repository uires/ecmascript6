class NegociacaoController {
	constructor() {
		let $ = document.querySelector.bind(document);
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
		this._listaNegociacoes = new ListaNeogociacao();
	}

	adicionarNegociacao(event) {
		event.preventDefault();
		this._listaNegociacoes.add(this._criarNegociacao());
		this._limparFormulario();
	}


	_criarNegociacao() {
		let negociacao = new Negociacao(new Date(DateHelper.tranformStringToDate(this._inputData.value))
					, this._inputQuantidade.value, this._inputValor.value);
		return negociacao;
	}

	_limparFormulario() {
		this._inputData.value = '';
		this._inputValor.value = 0.0;
		this._inputQuantidade.value = 1;
		this._inputData.focus();
	}
}