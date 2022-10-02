import { Mascota } from '../Models/Mascota.js';

const getMascotas = async (req, res) => {
  try {
    const mascotas = await Mascota.findAll({
      order: [
        ['id', 'ASC']
      ]
    });
    res.status(200).json(mascotas);
  } catch (error) {
    res.status(400).json({ mensaje: `${error}` });
  }

}

const postMascotas = async (req, res) => {
  try {
    const { id, nombre } = req.body;

    const newMascota = await Mascota.create({
      id,
      nombre
    });

    res.status(200).json(newMascota);
  } catch (error) {
    res.status(400).json({ mensaje: `${error}` });
  }

}

const putMascotas = async (req, res) => {
  try {

    const { id } = req.params;
    const { nombre } = req.body;
    const oldMascota = await Mascota.findByPk(id);
    oldMascota.nombre = nombre;
    const modMascota = await oldMascota.save();

    res.status(200).json(modMascota);

  } catch (error) {
    res.status(400).json({ mensaje: `${error}` });
  }
}

const deleteMascotas = async (req, res) => {
  try {

    const { id } = req.params;

    const respueta = await Mascota.destroy({
      where: {
        id
      }
    });

    res.status(200).json({
      body: {
        id
      }
    });

  } catch (error) {
    res.status(400).json({ mensaje: `${error}` });
  }

}


export {
  getMascotas,
  postMascotas,
  putMascotas,
  deleteMascotas
}