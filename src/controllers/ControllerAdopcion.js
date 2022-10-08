import { Adopcion } from '../Models/Adopcion.js';

const getAdopciones = async (req, res) => {
    //res.send('getAdopcion de gets')
    try {
        const solicutudes = await Adopcion.findAll({
            order: [
                ['id', 'ASC']
            ]
        })
        res.status(200).json(solicutudes);

    } catch (error) {
        res.status(400).json({ mensaje: `${error}` })
    }

}

const getAdopcion = async (req, res) => {
    //res.send('getAdopcion de get')
    try {
        const { id } = req.params
        const oneSolicitud = await Adopcion.findOne({
            where: {
                id
            }
        })
        if (!oneSolicitud) {
            return res.status(404).json({ mensaje: 'No Existe solicitud de Adopcion' });
        }

        res.status(200).json(oneSolicitud);

    } catch (error) {
        res.status(400).json({ mensaje: `${error}` })
    }



}

const postAdopcion = async (req, res) => {
    //res.send('getAdopcion de post')
    try {
        const { nombre, correo, telefono } = req.body
        const { idMascota } = req.params
        //res.send({ nombre, correo, telefono, idMascota })
        const newSolicitudAdopcion = await Adopcion.create({
            nombre, correo, telefono, idMascota
        })
        console.log(newSolicitudAdopcion)
    } catch (error) {
        res.status(500).json({ mensaje: error })

    }

}

const putAdopcion = async (req, res) => {
    res.send('getAdopcion de put')

}

const deleteAdopcion = async (req, res) => {
    res.send('getAdopcion de delete')
}


export {
    getAdopciones,
    getAdopcion,
    postAdopcion,
    putAdopcion,
    deleteAdopcion
}

// ### proyecto realizado por: *Miguel Andres Pasaje*
