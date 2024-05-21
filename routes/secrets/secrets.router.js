const secretsController = require('../../controllers/secretsController.js');

const auth = require('../../middleware/auth.js');
const error_handler = require('../../utils/errorHandler.js');

const secretsRouter = require('koa-router')({
    prefix: '/secrets'
});

//secretsRouter.get('/', auth(), secretsController.getAll, error_handler());
secretsRouter.get('/get/:key', auth(), secretsController.get, error_handler());
secretsRouter.post('/set', auth(), secretsController.put, error_handler());
//secretsRouter.delete('/delete/:key', auth(), secretsController.delete, error_handler());

module.exports = secretsRouter;
