const express = require('express');
const cors = require('cors');
const propylsionTypesRoutes = require('./routes/commons')

const app = express();

app.use(cors());
app.use(express.json());

app.use(propylsionTypesRoutes);

const port = 3009;

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});
