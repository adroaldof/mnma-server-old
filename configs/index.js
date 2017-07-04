const parseDashboard = require('./parse-dashboard');
const parseServer = require('./parse-server');


const configs = {
  environment: process.env.NODE_ENV || 'development',
};


module.exports = {
  parseDashboard,
  parseServer,
  configs,
};

