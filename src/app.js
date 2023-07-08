import express from "express";
import cors from "cors";
import morgan from "morgan";
import usuariosRoutes from "./routes/usuarios.routes.js"


const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));  //captura en req.query
app.use(cors());
app.use(morgan("tiny"));

//ENDPOINTS

app.use("/api/v1/usuarios", usuariosRoutes)







//rutas no definidas
app.all("*", (req, res) => {
  res.status(404).send("ruta no encontrada")
})


export default app;
