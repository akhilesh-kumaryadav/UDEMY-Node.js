const express = require('express');
const bodyParcer = require('body-parser');

const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');

const app = express();

app.use(bodyParcer.urlencoded({extended : false}));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(indexRouter.router);
app.use(userRouter);

app.listen(3000);