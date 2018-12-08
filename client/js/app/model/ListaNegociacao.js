class ListaNeogociacao {

	constructor() {
		this._negociacoes = [];
	}

	add(negociacao) {
		this._negociacoes.push(negociacao);
	}
	get negociacoes() {
		// Representação de uma programação defensiva, retornando uma cópia da lista.
		return [].concat(this._negociacoes);
	}
}