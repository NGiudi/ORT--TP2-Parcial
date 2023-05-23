import { NotasService } from "../services/NotasService.js";

export class NotasController {
	constructor() {
		this.service = new NotasService();
	}
  
	obtenerCantidad = async (req, res) => {
		const cantidad = await this.service.obtenerCantidad();
		return res.status(200).json({ cantidad });
	};

	obtenerListado = async (req, res) => {
		const notas = await this.service.obtenerListado();
		return res.status(200).json({ notas });
	};

	obtenerMinMax = async (req, res) => {
		const mimmax = await this.service.obtenerMinMax();
		return res.status(200).json(mimmax);
	};

	obtenerPromedio = async (req, res) => {
		const promedio = await this.service.obtenerPromedio();
		return res.status(200).json({ promedio });
	};

	ingresarNota = async (req, res) => {
		const { nota } = req.body;
		await this.service.ingresarNota(nota);
		return res.status(201).json({ nota });
	};
}