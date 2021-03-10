const fs = require('fs');
const path = require('path')
const uuid = require ('uuid')

module.exports =(app) => {

//Test, walk through

    app.get('/test', (req, res) => {
        res.send('<h1>Hi Alaina!!</h1>')
    })


    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    app.get('/api/notes',(req, res) => {
        fs.readFile('./db/db.json', 'utf8', function(err, data){
            res.send(data)
        })
    })

    app.post('/api/notes', (req, res) => {
        fs.readFile('./db/db.json', 'utf8', function(err, data) {
        res.send("test")
        console.log(req.body);

        })
    })

    app.get('/', (req, res) => {
       res.sendFile(path.join(__dirname, '../public/index.html'));
    });
};