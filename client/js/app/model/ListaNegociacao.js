class ListaNeogociacao {

	constructor() {
		this._negociacoes = [];
	}

	add(negociacao) {
		this._negociacoes.push(negociacao);
	}
	get negociacoes() {
		return this._negociacoes;
	}
}