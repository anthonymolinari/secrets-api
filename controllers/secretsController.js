const db = require('../database/database.js');

const get = (ctx) => {
    return new Promise( async (resolve, reject) => {
        const key = ctx.request.params.key;
        console.log('lookup key: ', key);
        db.get(key, ( error, value) => {
            if (error) {
                reject(error);
            }
            ctx.status = 200;
            ctx.body = {
                key: key,
                value: value
            };
            resolve();
        });
    });
}

const put = (ctx) => {
    return new Promise( async (resolve, reject) => {
        console.log('creating key...')
        db.put(ctx.request.body.key, ctx.requests.body.value, (error) => {
            if ( error ) {
                console.log(error);
                reject(error);
            }
            ctx.status = 200;
            ctx.body = 'ok';
            resolve();
        });
    });
}

module.exports = {
    get,
    put
};
