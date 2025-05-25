const http = require('http');
const fs = require('fs');
const url = require('url')

const server = http.createServer((req, res) => {
    console.log('New request coming');
    const newUrl = url.parse(req.url,true)
    console.log(newUrl.query.username)
    if(req.url === '/'){
        res.end('home page')
    }
       else if(req.url === '/about'){
        res.end('about')
    }
    else{
        res.end('no rute found')
    }
});

server.listen(3000, () => {
    console.log('Server started on port 3000');
});
