# landspeed.js

A simple [WMS](http://www.opengeospatial.org/standards/wms) server written in [node.js](http://nodejs.org/)

Only supports WMS 1.1 GetMap requests (bbox, width, height, and srs).


## Requirements

 * Node.js 0.4.x (http://nodejs.org/)
 
 * Mapnik trunk (http://trac.mapnik.org/wiki/Mapnik2)

 * NPM (Node package manager)


## Install

Install npm if you don't have it already:

    wget http://npmjs.org/install.sh
    sudo sh install.sh


Use npm to install `node-mapnik` and `eio` locally:

    npm install


## Run

    ./server.js <stylesheet.xml> <port> <concurrency>