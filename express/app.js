const http = require('http')
const {readFileSync} = require('index.html')

const homePage = readFileSync('./index.html')

const server = http.createServer((request, response) =>{
    const url = request.url;

    if(url === '/'){
        response.writeHead(200,{'content-type' : 'text/html'})

        response.write(homePage);
        response.end();
    }else if(url === '/about'){
        response.writeHead(200,{'content-type' : 'text/html'})

        response.write('<h1>about page</h1>');
        response.end();
    }else{
        response.writeHead(404, {'content-type' : 'text/html'})
        response.write('page doesnt exist')
        response.end()
    }
}).listen(5000);