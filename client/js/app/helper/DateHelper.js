class DateHelper {

	constructor() { throw new Error("Este objeto não pode ser instanciado!"); }

	static tranformStringToDate(string) {
		return new Date(...string.split("-").map((item, indice) => item - indice % 2));
	}

	static transformDateToString(date) {
		return `${date.getDate()}/${date.getMonth() + 1}/${date.getUTCFullYear()}`;
	}
}