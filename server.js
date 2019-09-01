#!/usr/bin/env node

const http = require('http');
global.key = require('./keys');
const app = require('./main');

const port = (process.env.PORT || '8080');
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
