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
        json = { hostname: os.hostname(),
        platform: os.platform(),
        architecture: os.arch(),
        numberOfCPUS: os.cpus(),
        
        networkInterfaces: os.networkInterfaces(),
        uptime: os.uptime()
    }
    json = JSON.stringify(json)
    fs.writeFile('./osinfo.json', json, (err) => {
        if (!err) {console.log('Your OS info has been saved successfullyoo!')}
        res.writeHead(201, {'Content-Type': 'text/plain text'})
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