import { NotasService } from "../services/NotasService.js";

export class NotasController {
	constructor() {
		this.service = new NotasService();
	}
  
	obtenerCantidad = async (req, res) => {
		try {
			const cantidad = await this.service.obtenerCantidad();
			return res.status(200).json({ cantidad });
		} catch {
			return res.status(500).json({ message: "Error en el servidor" });
		}
	};

	obtenerListado = async (req, res) => {
		try {
			const notas = await this.service.obtenerListado();
			return res.status(200).json({ notas });
		} catch {
			return res.status(500).json({ message: "Error en el servidor" });
		}
	};

	obtenerMinMax = async (req, res) => {
		try {
			const mimmax = await this.service.obtenerMinMax();
			return res.status(200).json(mimmax);
		} catch {
			return res.status(500).json({ message: "Error en el servidor" });
		}
	};

	obtenerPromedio = async (req, res) => {
		try {
			const promedio = await this.service.obtenerPromedio();
			return res.status(200).json({ promedio });
		} catch {
			return res.status(500).json({ message: "Error en el servidor" });
		}
	};

	ingresarNota = async (req, res) => {
		try {
			const { nota } = req.body;
			await this.service.ingresarNota(nota);
			return res.status(201).json({ nota });
		} catch {
			return res.status(500).json({ message: "Error en el servidor" });
		}
	};
}