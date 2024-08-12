const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type': 'text/html'})
    const pathName = req.url;

    if(pathName === '/'){
        fs.readFile(path.join(__dirname, 'index.html'), 'utf-8', (err, data)=>{
            if(err) throw err;
            res.end(data)
        })
    }else if(pathName === '/photo'){
        fs.readFile(path.join(__dirname, 'photo.html'), 'utf-8', (err, data)=>{
            if(err) throw err;
            res.end(data)
        })
    }

})

server.listen(3000, '127.0.0.1', ()=>{
    console.log('port isledi')
})


