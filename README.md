# landspeed.js

A simple [WMS](http://www.opengeospatial.org/standards/wms) server written in [node.js](http://nodejs.org/)

Only supports WMS 1.1 GetMap requests (bbox, width, height, and srs).


## Requirements

 * Node.js >= 0.6.x (http://nodejs.org/)
 
 * Mapnik >= 2.x (https://github.com/mapnik/mapnik)

 * node-mapnik (Node.js bindings to Mapnik)


## Install

Use npm to install `node-mapnik` and `eio` locally:

    npm install

## Run

    ./server.js <stylesheet.xml> <port> <concurrency>