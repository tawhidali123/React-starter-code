const path = require('path')

module.exports = {
    mode: 'development',

    entry: [
        './app/app.jsx'
    ],
    
    output: {
        path: path.resolve(__dirname, 'public/bundle'),
        filename: 'dist.js'
    }

}