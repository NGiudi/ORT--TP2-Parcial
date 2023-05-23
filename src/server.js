import express from "express";

import { NotasRoute } from "./routes/NotasRoute.js";

const PORT = 3005;

/* config */
const app = express();
app.use(express.json());

app.use("/notas", new NotasRoute().start());

const server = app.listen(PORT, () => {
	console.log(`Servidor iniciado en el port ${PORT}`);
});

server.on("error", (err) => {
	console.error(`Hubo un error en el servidor: ${err}.`);
});