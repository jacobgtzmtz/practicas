//importamos express y lo asignamos a una variable.
import express, {json} from 'express';
import routes from "./routes/index.routes";
import TaskRoutes from "./routes/tasks.routes";

const app = express();

//Settings
app.set('PORT', process.env.PORT || 3000);

//middlewares
app.use(json());

//Routes
app.use(routes);
app.use('/tasks', TaskRoutes)


export default app;