# landspeed.js

A simple [WMS](http://www.opengeospatial.org/standards/wms) server written in [node.js](http://nodejs.org/)

Only supports WMS 1.1 GetMap requests (bbox, width, height, and srs).


## Requirements

 - Node.js 0.10.x (http://nodejs.org/)
 - node-mapnik (Node.js bindings to Mapnik)

## Install

To install do:

    git clone https://github.com/mapbox/landspeed.js.git
    cd landspeed.js
    npm install

## Run

Usage:

    ./server.js <stylesheet.xml> <port> <concurrency>

## Demo

OS X:

    open demo/leaflet.html && ./server.js demo/world_latlon.xml

Linux:

    xdg-open demo/leaflet.html && ./server.js demo/world_latlon.xml
