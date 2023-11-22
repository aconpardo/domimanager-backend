const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());


const apiRoutes = require('./routes/index.js');

app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log(`Servidor en ejecución en el puerto ${port}`);
});
