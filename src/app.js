import express from "express";
import cors from "cors";
import morgan from "morgan";
import usuariosRoutes from "./routes/usuarios.routes.js"
import viewsRoutes from "./routes/views.routes.js"
import { create } from "express-handlebars";

import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));


const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));  //captura en req.query
app.use(cors());
app.use(morgan("tiny"));

//configuracion handlebars
const hbs = create({
  partialsDir: [path.resolve(__dirname, "./views/partials/")],
});

// configuracion handelbars motor de plantillas
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "./views"));

//ENDPOINTS
app.use("/api/v1/usuarios", usuariosRoutes)

//rutas de vistas
app.use("/", viewsRoutes);

//RUTAS NO DEFINIDAS
app.all("*", (req, res) => {
  res.status(404).send("ruta no encontrada")
})

export default app;
