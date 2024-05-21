const token = process.env.TOKEN

module.exports = () => {
    return async (ctx, next) => {
        console.log('auth middleware called...');
        if (ctx.request.query.token === token) {
            return next();
        }
        ctx.status = 500;
        ctx.body = 'invalid token';
    }
}
