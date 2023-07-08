import Usuario from "../models/usuario.models.js";

export const getAllUsuarios = async (req, res) => {
  try {
    let usuarios = await Usuario.findAll();
    res.send({ code: 200, message: "OKJ", usuarios });
  } catch (error) {
    res.estatus(500).send({code:500,message:error})
  }
};
