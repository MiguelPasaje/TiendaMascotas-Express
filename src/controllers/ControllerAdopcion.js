import { Adopcion } from '../Models/Adopcion.js';

const getAdopciones = async (req, res) => {
    res.send('getAdopcion de gets')

}

const getAdopcion = async (req, res) => {
    res.send('getAdopcion de get')

}

const postAdopcion = async (req, res) => {
    res.send('getAdopcion de post')


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
