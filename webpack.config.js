const path = require('path');

module.exports = {
    context: path.join(__dirname, "."),
    entry: './server.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "secrets-api.bundle.js"
    },
    target: "node",
    mode: "production"
};
