const rolesQueries = require('../../querys/rolesQueries');
const db = require('../../config/db.config');

exports.getAllRoles = async (req, res) => {
    try {
        const [results] = await db.execute(rolesQueries.getAllRoles);
        res.status(200).json(results);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'error to get roles' });
    }
}