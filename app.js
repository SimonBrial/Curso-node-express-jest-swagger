require('dotenv').config()
const express = require('express');
const cors = require('cors');
const dbConnection = require('./config/mongo');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('storage'));


const port = process.env.PORT || 3000;

// Aqui invocamos a las rutas
// http://localhost/api/v1/...
app.use('/api', require('./routes'));

app.listen(port, () => 
    console.log(`Server listening on port ${port}`)
);

dbConnection();