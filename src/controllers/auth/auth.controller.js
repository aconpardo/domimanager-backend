const db = require('../../config/db.config');
const authQueries = require('../../querys/authQueries');
const userQueries = require('../../querys/userQueries');
const jwt = require("jsonwebtoken");
const secret = require('../../config/jwt.config');
exports.register = async (req, res) => {
    try {
        const { nombre_usuario, password, rut, nombre, apellido,  rol_asignado } = req.body;
        const userAndRutExist = await db.execute(userQueries.getUserByRutAndUser, [rut, nombre_usuario]);
        if(userAndRutExist[0].length > 0){
            res.status(500).json({ error: 'error in register user, user exist' });
        } else {
            const [results] = await db.execute(authQueries.register, [nombre_usuario, password, rut, nombre, apellido, rol_asignado]);
            res.status(201).json({ message: 'user register success' });
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'error in register user' });
    }
};

exports.login = async (req, res) => {
    const { nombre_usuario, password } = req.body;
    try {
        const [results] = await db.execute(authQueries.selectUserById, [nombre_usuario, password]);
        if (results.length === 1) {
            const token = jwt.sign({ username: nombre_usuario }, secret, { expiresIn: '8h' });
            res.status(200).json({ message: 'success', token: token, rol: results[0].rol_asignado });
        } else {
            res.status(401).json({ error: 'user or password incorrect' });
        }
    } catch (error) {
        res.status(500).json({ error: 'error to login' });
    }
};

exports.logout = (req, res) => {
    res.status(200).json({ message: 'Successful Logout' });
};

