const path = require('path');
const fs = require('fs');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

module.exports = (app) => {

    app.get('/api/notes', (req, res) => {
        fs.readFile('./db/db.json', 'utf8', function (err, data) {
            res.send(data)
        })
    });


    // app.post('/api/notes', (req, res) => {
    //     const newNote = req.body;
    //     console.log(newNote);
    //     try {
    //         readFileAsync('./db/db.json', 'utf8')
    //         .then(function (err, data) {
    //             if (err) {
    //                 console.log("throwing....")
    //                 throw err;
    //             }
    //             else {
    //                 console.log(data);
    //                 res.json(data);
    //             }
    //         });
    //     } catch (error) {
    //         console.log("we hit the catch!")
    //         console.log(error);
    //         res.status(500).json(error);
    //     }
        
    // })

    // app.post('/api/notes', (req, res) => {
    //     const newNote = req.body;
    //     console.log(newNote);

    //         readFileAsync('./db/db.json', 'utf8')
    //         .then((err, data) => {
    //             if (err) {
    //                 console.log("throwing....")
    //                 throw err;
    //             }
    //             else {
    //                 console.log(data);
    //                 res.json(data);
    //             }
    //         })
    //         .catch(err => res.status(500).send(err));
        
    // })

    app.post('/api/notes', async (req, res) => {
        const newNote = req.body;
        console.log(newNote);
    
        //wrap our code in try/catch so we can handle any errors that may occur
        try {
            //use 'await' to handle our asynchronous reading of a file
            const data = JSON.parse(await readFileAsync('./db/db.json', 'utf8'));  
            
            //do something with the data
            data.push(req.body);

            //write to the "db"
            const result = await writeFileAsync('./db/db.json');
            console.log(result);
            
            console.log(data);
            res.json(data);
    
        } catch (err) {
            console.log("we hit the catch!");
            //if there was an error thrown, we handle it here
            res.status(500).send(err);
        }
    });
}