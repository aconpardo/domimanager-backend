const userQueries = require('./../../querys/userQueries');
const db = require('../../config/db.config');

exports.updateUser = async (req, res) => {
    try {
        const { nombre, apellido, rut, password, rol_asignado } = req.body;
        const userExist = await db.execute(userQueries.getUserByRut, [rut]);
        if (userExist[0].length > 0) {
            await db.execute(userQueries.updateUser, [nombre, apellido, password, rol_asignado, rut]);
            res.status(201).json({ message: 'user update success' });
        } else {
            res.status(500).json({ error: 'error in update user, user not found' });
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'error in update user' });
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const id = req.query.id;
        const [results] = await db.execute(userQueries.deleteUser, [id]);
        res.status(201).json({ message: 'user delete success' });
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'error in delete user' });
    }
}

exports.getUserByAny = async (req, res) => {
    try {
        const { field } = req.query;
        if(field){
            const valorBusqueda = `${field}%`;
            const [results] = await db.execute(userQueries.getUserByAny, [valorBusqueda, valorBusqueda, valorBusqueda]);
            res.status(200).json(results);
        } else {
            const [results] = await db.execute(userQueries.getAllUsers);
            res.status(200).json(results);
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'error to get user, not found' });
    }
}