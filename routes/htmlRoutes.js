const path = require('path')

module.exports =(app)=> {


    app.get('/test', (req, res) => {
        res.send('<h1>Hi Alaina!!</h1>')
    })

    app.get('/', (req,res) => {
       res.sendFile(path.join(__dirname, '../public/index.html' ))
    })

}

//CRUD
//Create
//Read
//Update
//Delete

//REQUEST METHODS 
//POST ---> Create
//GET ---> Read
//PUT ---> Update
//DELETE ---> Delete


//fs (file syste)
//fs.readFile
//fs.writeFile
//fs.appendFile

//SERVER - esxpress
//req (request object)
//req.body
//req.params
//req.query

//res (response object)
//res.send
//res.end
//res.render
//res.sendFile
//res.redirect

