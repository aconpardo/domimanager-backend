const visitsQueries = {
    registerVisit: 'INSERT INTO visitas (rut_visita, nom_visita, ape_visita, veh_visita, fecha_entrada, hr_entrada, tipo_visita_id, visita_domicilio_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
    registerExit: 'UPDATE visitas SET fecha_salida = ?, hr_salida = ?, activo = 0 WHERE id_visita = ?',
    getVisits: 'SELECT * FROM visitas',
    getVisitsByDate: 'SELECT * FROM visitas WHERE fecha_entrada = ?',
    getVisitByRut: 'SELECT * FROM visitas WHERE rut_visita = ? and activo = 1 order by fecha_entrada desc , hr_entrada desc limit 1',
    getTypeVisits: 'SELECT * FROM tipo_visita order by id_tipo_visita asc',
    getVisitsByAny: 'SELECT * FROM visitas WHERE rut_visita like ? or nom_visita like ? or ape_visita like ? or veh_visita like ?',
    getVisitsByDates: 'SELECT v.*, d.nombre_de_sector FROM visitas v INNER JOIN domicilio d ON v.visita_domicilio_id = d.num_domicilio WHERE v.fecha_entrada BETWEEN ? AND ? order by v.fecha_entrada desc, v.hr_entrada desc',
    getVisitsPagination: 'SELECT v.*, d.nombre_de_sector FROM visitas v INNER JOIN domicilio d ON v.visita_domicilio_id = d.num_domicilio order by v.fecha_entrada desc, v.hr_entrada desc LIMIT ?, ?',
    getVisitsTotalRegisters: 'SELECT COUNT(*) as total FROM visitas',
}

module.exports = visitsQueries;