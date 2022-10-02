import { Animal } from '../Models/tipoAnimal.js';

const getAnimals = async (req, res) => {

    try {
        const animales = await Animal.findAll({
            order: [
                ['id', 'ASC']
            ]
        })
        res.status(200).json(animales);
        // res.send('getAnimals de Animales')

    } catch (error) {
        res.status(400).json({ mensaje: `${error}` })
    }

}

const postAnimal = async (req, res) => {

    try {
        const { tipo_animal, descripcion } = req.body

        const newAnimal = await Animal.create({
            tipo_animal,
            descripcion
        })

        console.log(newAnimal)

        //res.send('postAnimal de Animales')
    } catch (error) {
        res.status(400).json({ mensaje: `${error}` })
    }


}

const putAnimal = async (req, res) => {
    res.send('putAnimal de Animales')

}

const deleteAnimal = async (req, res) => {
    res.send('deleteAnimal de Animales')
}


export {
    getAnimals,
    postAnimal,
    putAnimal,
    deleteAnimal
}