const express = require('express');
const authRouter = require('./database/routers/authRouter');

// ...

const app = express();

app.use(express.json());

app.use('/login', authRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
