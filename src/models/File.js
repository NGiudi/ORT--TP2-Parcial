import fs from "fs";

export class File {
	constructor(urlArchivo) {
		this.urlArchivo = urlArchivo;
	}

	/**
    Lee un archivo y devuelve el contenido del mismo.
    @return {any} información parseada.
  */
	obtenerData = async () => {
		const data = await fs.promises.readFile(this.urlArchivo, "utf-8");
		return JSON.parse(data);
	};

	/**
    Graba un texto en un archivo.
    @param {any} data información que se quiere guardar en el archivo.
  */
	guardarData = (data) => {
		const texto = JSON.stringify(data);
		return fs.promises.writeFile(this.urlArchivo, texto);
	};
}
