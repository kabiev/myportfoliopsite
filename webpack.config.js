const path = require('path');

const paths = {
    src: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist')
};

Object.assign(paths.src, {
    pug: path.resolve(paths.src,'pages/')
})

module.exports = {
    context: paths.src,
    entry: './',
    output: {
        path: paths.dist,
        filename: './js/app.js'
    }
};