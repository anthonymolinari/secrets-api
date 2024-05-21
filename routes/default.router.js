const router = require('koa-router')({
    prefix: '/api/v1'
});

// health check
router.get('/', (ctx) => {
    console.log('base route hit');
    ctx.status = 200;
    ctx.body = 'ok';
})

// import routes
const secretsRouter = require('./secrets/secrets.router.js');

router.use(
    secretsRouter.routes(),
);

module.exports = (app) => {
    app.use(router.routes());
    app.use(router.allowedMethods());
}
