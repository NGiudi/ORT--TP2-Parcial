import { NotasModel } from "../models/NotasModel.js";

export class NotasService {
	constructor() {
		this.model = new NotasModel();
	}

	#obtenerMaximo = (l) => {
		let maximo = 0;

		for (let i=0; i < l.length; i++) {
			if (l[i].nota > maximo) maximo = l[i].nota;
		}

		return maximo;
	};

	#obtenerMinimo = (l) => {
		let minimo = 11;

		for (let i=0; i < l.length; i++) {
			if (l[i].nota < minimo) minimo = l[i].nota;
		}

		return minimo;
	};

	obtenerCantidad = async () => {
		const cantidad = await this.model.obtenerCantidad();
		return cantidad;
	};

	obtenerListado = async () => {
		let listado = await this.model.obtenerListado();		
		return listado.map((notaObj) => notaObj.nota);
	};

	obtenerMinMax = async () => {
		const listado = await this.model.obtenerListado();
		
		return {
			maximo: this.#obtenerMaximo(listado),
			minimo:	this.#obtenerMinimo(listado),
		};
	};

	obtenerPromedio = async () => {
		const listado = await this.model.obtenerListado();
		const acc = listado.reduce((acc, objNota) => acc + objNota.nota, 0);
		return acc / listado.length;
	};

	ingresarNota = async (nota) => {
		await this.model.ingresarNota(nota);
	};
}