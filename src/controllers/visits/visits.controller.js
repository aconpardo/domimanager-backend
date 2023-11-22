const visitQueries = require('../../querys/visitsQueries');
const db = require('../../config/db.config');

exports.registerVisit = async (req, res) => {
    try {
        const { rut_visita, nom_visita, ape_visita, veh_visita, fecha_entrada, hr_entrada, tipo_visita_id, visita_domicilio_id } = req.body;
        const [results] = await db.execute(visitQueries.registerVisit, [rut_visita, nom_visita, ape_visita, veh_visita, fecha_entrada, hr_entrada, tipo_visita_id, visita_domicilio_id]);
        res.status(201).json({ message: 'visit register success' });
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'error in register visit' });
    }
}

exports.registerExitVisit = async (req, res) => {
    try {
        const { fecha_salida, hr_salida, id_visita } = req.body;
        const [results] = await db.execute(visitQueries.registerExit, [fecha_salida, hr_salida, id_visita]);
        res.status(201).json({ message: 'visit exit register success' });
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'error in register exit visit' });
    }
}

exports.getVisits = async (req, res) => {
    try {
        const [results] = await db.execute(visitQueries.getVisits);
        res.status(200).json(results);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'error to get visits' });
    }
}

exports.getVisitByRut = async (req, res) => {
    try {
        const rut = req.query.rut;
        const [results] = await db.execute(visitQueries.getVisitByRut, [rut]);
        res.status(200).json(results);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'error to get visits, not found' });
    }
}

exports.getTypeVisits = async (req, res) => {
    try {
        const [results] = await db.execute(visitQueries.getTypeVisits);
        res.status(200).json(results);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'error to get type visits' });
    }
}

exports.getVisitsByAny = async (req, res) => {
    try {
        const { field } = req.query;
        if(field){
            const valorBusqueda = `${field}%`;
            const [results] = await db.execute(visitQueries.getVisitsByAny, [valorBusqueda, valorBusqueda, valorBusqueda, valorBusqueda]);
            res.status(200).json(results);
        } else {
            const [results] = await db.execute(visitQueries.getVisits);
            res.status(200).json(results);
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'error to get visits, not found' });
    }
}

exports.getVisitsByDates = async (req, res) => {
    try {
        const { fecha_desde, fecha_hasta } = req.query;
        const [results] = await db.execute(visitQueries.getVisitsByDates, [fecha_desde, fecha_hasta]);
        if(results.length === 0){
            res.status(200).json({ message: 'visits not found in dates' });
        } else {
            res.status(200).json(results);
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'error to get visits, not found in dates' });
    }
}

exports.getVisitsPagination = async (req, res) => {
    try {
        const { page, max_register } = req.query;
        const totalVisits = await db.execute(visitQueries.getVisitsTotalRegisters);
        const total = totalVisits[0][0].total;
        const total_pages = Math.ceil(total / max_register);
        const offset = (page - 1) * max_register;
        const query = `SELECT v.*, d.nombre_de_sector FROM visitas v INNER JOIN domicilio d ON v.visita_domicilio_id = d.num_domicilio order by v.fecha_entrada desc, v.hr_entrada desc LIMIT ${offset}, ${max_register}`

        const [results] = await db.execute(query);
        if(results.length === 0){
            res.status(200).json({ message: 'visits not found in dates' });
        } else {
            res.status(200).json({ total, total_pages, results });
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'error to get visits, not found in dates' });
    }
}