class Negociacao {
	constructor(data, quantidade, valor) {
		this._data = data;
		this._quantidade = quantidade;
		this._valor = valor;		
	}

	getData() {
		return this._data;
	}

	setData(data) {
		this._data = data;
	}

	getQuantidade() {
		return this._quantidade;
	}

	setQuantidade(quantidade) {
		this._quantidade = quantidade;
	}

	getValor() {
		return this._valor;
	}

	setValor(valor) {
		this._valor = valor;
	}

	getVolume() {
		return this._quantidade * this._valor;
	}
}
