const path = require('path');

module.exports = {
    entry: {
        index: './src/assets/js/index.js',
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/js'),
    },
};
