#!/usr/bin/env node

var http = require('http');
var url = require('url');

var stylesheet = process.argv[2];
var port = +process.argv[3] || 8000;
var concurrency = parseInt(process.argv[4] || 32, 10);

if (!stylesheet) {
   console.warn('usage: ./server.js <stylesheet> <port>');
   process.exit(1);
}

var renderer = require('./renderer')({
    stylesheet: stylesheet,
    concurrency: concurrency
});

var server = http.createServer(function(req, res) {
    var uri = url.parse(req.url.toLowerCase(), true);

    renderer(uri.query, function(err, tile) {
        if (err) {
            res.writeHead(500, {
                'Content-Type': 'text/plain; charset=utf-8'
            });
            res.end(err.stack);
        } else {
            res.writeHead(200, {
                'Content-Length': tile.length,
                'Content-Type': 'image/png'
            });
            res.end(tile);
        }
    });
});

server.listen(port, function() {
    var address = server.address();
    console.warn('Listening at %s:%d', address.address, address.port);
});
