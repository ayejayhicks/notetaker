const path = require('path');
const fs = require('fs')

module.exports = (app) => {

    app.get('/api/notes', (req, res) => {

        fs.readFile('./db/db.json', 'utf8', function(err, data) {
            res.send(data)
        })
    }) ;

}