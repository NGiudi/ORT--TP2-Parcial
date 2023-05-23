import express from "express";

import { fileURLToPath } from "url";
import path from "path";

import { NotasRoute } from "./routes/NotasRoute.js";

const PORT = 3005;

/* fix para poder ver el html */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* config */
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/public/index.html");
});

app.use("/notas", new NotasRoute().start());

const server = app.listen(PORT, () => {
	console.log(`Servidor iniciado en el port ${PORT}`);
});

server.on("error", (err) => {
	console.error(`Hubo un error en el servidor: ${err}.`);
});