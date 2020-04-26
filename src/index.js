import "@babel/polyfill";
import app from "./server";

const PORT = app.get("PORT");

async function Main() {
  await app.listen(PORT);
  console.log("Servidor corriendo en el puerto: " + PORT);
}

Main();
