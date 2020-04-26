import { Router } from "express";
import { connect } from "../database";
import { ObjectId } from "mongodb";

const router = Router();

//Conexion a la base de datos.

//Obtener toda la lista de tareas:
router.get("/", async (req, res) => {
  const db = await connect();
  const tasks = await db.collection("tasks").find({}).toArray();
  console.log(tasks);
  res.json(tasks);
});
//Obtener una tarea por Id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const db = await connect();
  const task = await db.collection("tasks").findOne({ _id: ObjectId(id) });
  res.json(task);
});

//Insertar una nueva tarea:
router.post("/", async (req, res) => {
  const db = await connect();
  const task = {
    title: req.body.title,
    description: req.body.description,
  };
  const result = await db.collection("tasks").insertOne(task);
  res.json("Registro insertado: " + result.ops[0]);
});

//Eliminar Task por Id
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const db = await connect();
  const result = await db.collection("tasks").deleteOne({ _id: ObjectId(id) });
  res.json({
    message: `Tarea ${id} eliminada`,
    result,
  });
});


//Actualizar Task por Id
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const newDatatask = {
    title: req.body.title,
    description: req.body.description
  }
  const db = await connect();
  const result = await db.collection("tasks").updateOne({ _id: ObjectId(id) }, {$set: newDatatask});
  res.json({
    message: `Tarea ${id} actualizada`,
    result,
  });
});

export default router;
