const path = require('path')

module.exports =(app)=> {

//Test, walk through

    app.get('/test', (req, res) => {
        res.send('<h1>Hi Alaina!!</h1>')
    })

    app.get('/', (req,res) => {
       res.sendFile(path.join(__dirname, '../public/index.html' ))
    })
}