const db = require('../database/database.js');

const getAll = (ctx) => {
    return new Promise( async (resolve, reject) => {
        console.log('all keys endpoint hit');
        const keys = await db.keys().all();
        console.log(keys);
        ctx.status = 200;
        ctx.body = keys;
        resolve();
    })
}

const get = (ctx) => {
    return new Promise( (resolve, reject) => {
        const key = ctx.request.params.key;
        console.log('lookup key: ', key);
        db.get( key, (error, value) => {
            if (error) {
                console.log(error);
                ctx.status = 500;
                ctx.body = 'key not found';
                reject();
            }
            ctx.status = 200;
            console.log(value);
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
        const { key, value } = ctx.request.body;
        if ( key === undefined || value === undefined) {
            ctx.status = 500;
            ctx.body = 'invalid input';
            return reject();
        }

        db.put(key, value, (error) => {
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

const deleteKey = (ctx) => {
    return new Promise( (resolve, reject) => {
        const { key } = ctx.request.body;
        if ( key === undefined ) {
            ctx.status = 500;
            ctx.body = 'invalid input';
            return reject();
        }
        db.del(key, (error) => {
            if ( error ) {
                console.log(error);
                ctx.status = 500;
                ctx.body = 'key not found';
                reject();
            }
            ctx.status = 200;
            ctx.body = 'ok';
            resolve();
        });
    });
}

module.exports = {
    get,
    put,
    deleteKey,
    getAll
};
