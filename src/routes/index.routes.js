import { Router } from "express";

const router = Router();

router.get('/', (req,res) => {
    res.send('Bienvenido a mi API de prácticas.')
});


export default router;