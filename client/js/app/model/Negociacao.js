class Negociacao {
	constructor(data, quantidade, valor) {
		this._data = new Date(data.getTime());
		this._quantidade = quantidade;
		this._valor = valor;
		Object.freeze(this);
	}

	get data() {
		return this._data;
	}

	get quantidade() {
		return this._quantidade;
	}

	get valor() {
		return this._valor;
	}

	get volume() {
		return this._quantidade * this._valor;
	}

	toString() {
		return "[ Data: " + data.value + ", Quantidade: " + quantidade.value + ", Valor: R$" + valor.value + " ]";
	}
}
