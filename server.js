const Koa = require('koa');
const app = new Koa();

// environment variables
require('dotenv').config()
const PORT = process.env.API_PORT || 3000;

// init database 
const db = require('./database/database.js');

// body parser
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

// load api routes
require('./routes/default.router')(app);

app.listen(PORT, () => {
    console.log(`api server listening on port: ${PORT}`);
});
