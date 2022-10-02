import { Router } from 'express';
import { getMascotas, getMascota, postMascotas, putMascotas, deleteMascotas } from '../controllers/ControllerMascota.js';
import { getAnimals, getAnimal, postAnimal, putAnimal, deleteAnimal } from '../controllers/ControllerTipoAnimal.js';




const router = Router();

router.get('/', (req, res) => {
  res.send("Hola estamos en Index");
});

router.get('/mascotas', getMascotas);
router.get('/mascota/:id', getMascota);
router.post('/mascotas', postMascotas);
router.put('/mascotas/:id', putMascotas);
router.delete('/mascotas/:id', deleteMascotas);


router.get('/Animals', getAnimals);
router.get('/Animal/:id', getAnimal);
router.post('/Animal', postAnimal);
router.put('/Animal/:id', putAnimal);
router.delete('/Animal/:id', deleteAnimal);


export default router;