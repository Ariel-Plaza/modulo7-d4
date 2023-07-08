//orden de las rutas que llevan al controlador

import { Router } from "express";
import { getAllUsuarios } from "../controllers/usuarios.controllers.js";
const router = Router();

// define the home page route
router.get("/", getAllUsuarios);

export default router;