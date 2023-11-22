const addressQueries = require('../../querys/addressesQueries');
const db = require('../../config/db.config');

exports.getAllAddresses = async (req, res) => {
    try {
        const [results] = await db.execute(addressQueries.getAllAddresses);
        res.status(200).json(results);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'error to get addresses' });
    }
}

exports.getAddressByNum = async (req, res) => {
    try {
        const id = req.query.num;
        const [results] = await db.execute(addressQueries.getAddressByNum, [id]);
        res.status(200).json(results);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'error to get address, not found' });
    }
}