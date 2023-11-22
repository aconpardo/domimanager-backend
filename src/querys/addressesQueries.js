const addressesQueries = {
    getAllAddresses: 'SELECT * FROM domicilio order by num_domicilio asc',
    getAddressByNum: 'SELECT * FROM domicilio WHERE num_domicilio = ?',
}

module.exports = addressesQueries;