const http = require('http');
const fs = require('fs');
const url = require('url');


const server = http.createServer((req, res)=>{
    const pathName = req.url;

    if(pathName === '/' || pathName === '/about'){
        res.write("<h1>This is about page</h1>")
        res.end();
    }else if(pathName === '/producat'){
        res.write("<h1>That is Prodicat page in node JS </h1>")
        res.end();
    }else if(pathName === '/api'){
        // JSON  ALYNMALY
        fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data)=>{
            const apiData = JSON.parse(data)
            console.log(apiData)
            
        })

        res.end("<h1>API Page</h1>");
       
    }
    
    else{
        res.write("<h1>404 not found</h1>")
        res.end()
    }
})


server.listen(8000, 'localhost', ()=>{
    console.log("8000 localhost start")
})
