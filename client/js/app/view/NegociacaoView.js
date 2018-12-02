class NegociacaoView {
	constructor(element) {
		this._element = element;
	}

	_template(negociacoes) {
		return `
		 <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            <tbody>
            	${
            		negociacoes.map((n) => {
            			return `
            				<tr>
            					<td>${DateHelper.transformDateToString(n.data)}</td>
            					<td>${n.quantidade} un.</td>
            					<td>R$ ${n.valor}</td>
            					<td>${n.volume} vl.</td>
            				</tr>
            			`;
            		}).join('')}
            </tbody>
            <tfoot>
            	<td colspan="3"></td>
            	<td><h4>Total: </h4> ${negociacoes.reduce((total, n) => total += n.volume, 0.0)} vl.</td>
            </tfoot>
        </table>
        `;
	}

	update(negociacoes) {
		this._element.innerHTML = this._template(negociacoes);
	}
}