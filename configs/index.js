import parseDashboard from './parse-dashboard';
import parseServer from './parse-server';


const configs = {
  environment: process.env.NODE_ENV || 'development',
};


export default {
  parseDashboard,
  parseServer,
  ...configs,
};

