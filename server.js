//bring in the node modules that we need
const fs = require('fs');
const express = require('express');
const server = express();
const portNumber=80
//define and activate the server
server.use(express.static('public', {
    extensions: ['html']
}));

server.listen(portNumber, err => console.log(err || `Server is Active on Port ${portNumber}`));

let paths = {
    content: 'data/inhalt.json'
}


//function for read and write

// FUNKTIONEN
const loadFile = pfad => {
    return new Promise((resolve, reject) => {
        fs.readFile(
            pfad,
            (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    data = data.toString();
                    resolve(data);
                }
            }
        )
    })
}
const saveFile = (pfad, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(
            pfad,
            data,
            err => {
                if (err) {
                    reject();
                } else {
                    resolve();
                }
            }
        )
    })
}




//Json usage 
server.use(express.json());


server.post('./save_data', (req, res) => {
    saveFile(paths.content, JSON.stringify(req.body)).then(
        () => res.send('ok')
    ).catch(
        () => res.send('unok')
    )
})



