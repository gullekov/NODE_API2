const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('<h1>Hello express js it me!!222</h1>')
})




const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>console.log(`Start 5000 port ${PORT}`));