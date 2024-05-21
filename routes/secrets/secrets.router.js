const secretsController = require('../../controllers/secretsController.js');

const auth = require('../../middleware/auth.js');

const secretsRouter = require('koa-router')({
    prefix: '/secrets'
});

secretsRouter.get('/', auth(), secretsController.getAll);
secretsRouter.get('/get/:key', auth(), secretsController.get);
secretsRouter.post('/set', auth(), secretsController.put);
secretsRouter.delete('/delete/:key', auth(), secretsController.deleteKey);

module.exports = secretsRouter;
