import MongoClient from "mongodb";

export async function connect() {
  try {
    const client = await MongoClient.connect("mongodb://localhost:27017",
    {useUnifiedTopology: true}
    );
    const db = client.db("practicas");
    console.log('Base de datos conectada exitosamente')
    return db;
  } catch (error) {
      console.error(error);
  }
}
