const db = require('../database/database.js');

const getAll = (ctx) => {
    return new Promise( async (resolve, __) => {
        const keys = await db.keys().all();
        ctx.status = 200;
        ctx.body = keys;
        resolve(0);
    });
}

const get = (ctx) => {
    return new Promise( (resolve, reject) => {
        const key = ctx.request.params.key;
        db.get( key, (error, value) => {
            if (error) {
                console.log(error);
                ctx.status = 500;
                ctx.body = 'key not found';
                reject(1);
            }
            ctx.status = 200;
            console.log(value);
            ctx.body = {
                key: key,
                value: value
            };
            resolve(0);
        });
    });
}

const put = (ctx) => {
    return new Promise( async (resolve, reject) => {
        const { key, value } = ctx.request.body;
        if ( key === undefined || value === undefined) {
            ctx.status = 500;
            ctx.body = 'invalid input';
            return reject(1);
        }

        db.put(key, value, (error) => {
            if ( error ) {
                console.log(error);
                reject(error);
            }
            ctx.status = 200;
            ctx.body = 'ok';
            resolve(0);
        });
    });
}

const deleteKey = (ctx) => {
    return new Promise( (resolve, reject) => {
        const { key } = ctx.request.params;
        if ( key === undefined ) {
            ctx.status = 500;
            ctx.body = 'invalid input';
            reject(1);
        }
        db.del(key, (error) => {
            if ( error ) {
                console.log(error);
                ctx.status = 500;
                ctx.body = 'key not found';
                reject(2);
            }
            ctx.status = 200;
            ctx.body = 'ok';
            resolve(0);
        });
    });
}

module.exports = {
    get,
    put,
    deleteKey,
    getAll
};
