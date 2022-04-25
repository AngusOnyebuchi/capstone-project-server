const http = require('http')

const fs = require('fs')
const os = require('os')

const host = '127.0.0.1'
const port = '5000'

const server = http.createServer((req,res)=> {
    const url = req.url

    if (url === '/') {
        fs.readFile('./pages/index.html', function(err, data) {
            res.writeHead(200, {'Content-type': 'text/html'})
            res.write(data)
            return res.end()
        })
    } 
    else if (url === '/about') {
        fs.readFile('./pages/about.html', function(err, data) {
            res.writeHead(200, {'Content-type': 'text/html'})
            res.write(data)
            return res.end()
        })
    }
    else if (url === '/sys') {
        fs.readFile('/index.html', function(err, data) {
            res.writeHead(201, {'Content-type': 'text/plain'})
            res.write(data)
            return res.end()
        })
    }
    else {
        fs.readFile('./pages/404.html', function(err, data) {
            res.writeHead(404, {'Content-type': 'text/html'})
            res.write(data)
            return res.end()
        })
    }
})

server.listen(port, host, () => {
    console.log(`"Running at ${host}:${port}"`)
})