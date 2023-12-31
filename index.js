import "dotenv/config"
import db from "./src/database/database.js"
import app from "./src/app.js"

//configuta
const PORT = process.env.PORT || 3000;

const main = async () => {
  try {
    await db.connect();
    console.log("conectado")
    app.listen(PORT, () => {
      console.log("servidor escuchando en puerto " + PORT)
    })
  } catch (error) {
    console.log(error)
  }
}

main();