const userQueries = {
    updateUser: 'UPDATE usuario SET nombre = ?, apellido = ?, password = ?, rol_asignado = ? WHERE rut = ?',
    deleteUser: 'DELETE FROM usuario WHERE id = ?',
    getUserByAny: 'SELECT * FROM usuario WHERE nombre like ? or apellido like ? or rut like ? ',
    getUserByRut: 'SELECT * FROM usuario WHERE rut = ?',
    getUserByRutAndUser: 'SELECT * FROM usuario WHERE rut = ? or nombre_usuario = ?',
    
}

module.exports = userQueries;