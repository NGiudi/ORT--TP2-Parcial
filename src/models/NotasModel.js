import { File } from "./File.js";

export class NotasModel {
	constructor() {
		this.notasFile = new File("./src/assets/notas.json");
	}

	obtenerCantidad = async () => {
		const listado = await this.notasFile.obtenerData();
		return listado.length;
	};

	obtenerListado = async () => {
		const listado = await this.notasFile.obtenerData();
		return listado;
	};

	ingresarNota = async (nota) => {
		const listado = await this.notasFile.obtenerData();
		listado.push({ nota });
		this.notasFile.guardarData(listado);
	};
}