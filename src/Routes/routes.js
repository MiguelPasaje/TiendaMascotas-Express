import { Router } from 'express';
import { getMascotas, postMascotas, putMascotas, deleteMascotas } from '../controllers/ControllerMascota.js';
import { getAnimals, postAnimal, putAnimal, deleteAnimal } from '../controllers/ControllerTipoAnimal.js';




const router = Router();

router.get('/', (req, res) => {
  res.send("Hola estamos en Index");
});

router.get('/mascotas', getMascotas);
router.get('/mascotas/:id', getMascotas);
router.post('/mascotas', postMascotas);
router.put('/mascotas/:id', putMascotas);
router.delete('/mascotas/:id', deleteMascotas);


router.get('/Animals', getAnimals);
router.get('/Animal/:id', getAnimals);
router.post('/Animal', postAnimal);
router.put('/Animal/:id', putAnimal);
router.delete('/Animal/:id', deleteAnimal);


export default router;