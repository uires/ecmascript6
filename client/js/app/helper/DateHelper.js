class DateHelper {

	constructor() { throw new Error("Este objeto não pode ser instanciado!"); }

	static tranformStringToDate(string) {
		return new Date(...string.split("-").map((item, indice) => item - indice % 2));
	}

	static transformDateToString(date) {
		if(!/\d{4}-\d{2}-\d{2}-/.test(date)) {

		}
		return `${date.getDate()}/${date.getMonth() + 1}/${date.getUTCFullYear()}`;
	}
}