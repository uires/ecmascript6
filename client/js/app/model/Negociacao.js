class Negociacao {
	constructor(data, quantidade, valor) {
		this._data = data;
		this._quantidade = quantidade;
		this._valor = valor;		
	}

	get data() {
		return this._data;
	}

	setData(data) {
		this._data = data;
	}

	get quantidade() {
		return this._quantidade;
	}

	setQuantidade(quantidade) {
		this._quantidade = quantidade;
	}

	get valor() {
		return this._valor;
	}

	setValor(valor) {
		this._valor = valor;
	}

	get volume() {
		return this._quantidade * this._valor;
	}
}
