#!/usr/bin/env node

const http = require('http');
global.key = require('./keys').default;
const app = require('./main');

const port = (process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);
server.listen(port);