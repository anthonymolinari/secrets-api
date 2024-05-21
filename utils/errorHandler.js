module.exports = () => {
    return (error) => {
        console.log('error handler: ', error);
        ctx.status = 500;
        ctx.body = error;
    }
}
