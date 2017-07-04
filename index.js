const ParseDashboard = require('parse-dashboard');
const express = require('express');
const httpServer = require('http');
const morgan = require('morgan');
const { ParseServer } = require('parse-server'); // eslint-disable-line import/no-extraneous-dependencies

const configs = require('./configs');

const app = express();


const morganConfig = ':date[iso] [:remote-addr] [:method - :url :status :res[content-length] :response-time[0] ms]';
app.use(morgan(morganConfig));


const api = new ParseServer(configs.parseServer);
app.use(configs.parseServer.mountPath, api);

const dashboard = new ParseDashboard(configs.parseDashboard);
app.use('/dashboard', dashboard);

app.use('/bla', (req, res) => res.send({ asdf: 'asdf' }));

const startMessage = `Running at ${configs.parseServer.serverURL} in environment ${configs.environment}.`;
const server = httpServer.createServer(app);
server.listen(configs.parseServer.port, () => console.log(startMessage));

ParseServer.createLiveQueryServer(server);

