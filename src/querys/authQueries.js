const userQueries = {
    register: 'INSERT INTO usuario (nombre_usuario, password, rut, nombre, apellido, rol_asignado) VALUES (?, ?, ?, ?, ?, ?)',
    selectUserById: 'SELECT * FROM usuario WHERE nombre_usuario = ? AND password = ?',
    getUsers: 'SELECT * FROM usuario'
    
};

module.exports = userQueries;