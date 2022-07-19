const express = require('express');
const authRouter = require('./database/routers/authRouter');
const userRouter = require('./database/routers/userRouter');

// ...

const app = express();

app.use(express.json());

app.use('/login', authRouter);
app.use('/user', userRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
