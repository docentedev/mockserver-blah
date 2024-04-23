const express = require('express');
const cors = require('cors');
const commonsRoutes = require('./routes/commons')

const app = express();

app.use(cors());
app.use(express.json());

app.use(commonsRoutes);

const port = 3009;

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});
