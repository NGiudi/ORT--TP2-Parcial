import express from "express";

import { NotasController } from "../controllers/NotasController.js";

export class NotasRoute {
	constructor() {
		this.router = express.Router();
		this.controller = new NotasController();
	}

	start() {
		this.router.get("/listado",  this.controller.obtenerListado);
		this.router.get("/promedio", this.controller.obtenerPromedio);
		this.router.get("/minmax",   this.controller.obtenerMinMax);
		this.router.get("/cantidad", this.controller.obtenerCantidad);

		this.router.post("/ingresar", this.controller.ingresarNota);
    
		return this.router;
	}
}