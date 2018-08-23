const path = require('path')
const config = {
    entry:path.resolve(__dirname,'src/index.js'),
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                text:/ \.js$/,
                loder:'babel-loder'
            }
        ]
    }
}

module.exports = config 