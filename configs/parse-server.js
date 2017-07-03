const suffix = `_${String(process.env.NODE_ENV).toUpperCase()}` || '';

export default {
  allowClientClassCreation: false,
  appId: process.env.APP_ID || 'ioS51qwgmWqf31tVuZs97QKcDjv5VyzY7A9d9rcq',
  appName: process.env.APP_NAME || 'Server Dev',
  cloud: process.env.CLOUD_MAIN || './cloud/main.js',
  databaseURI: process.env[`DATABASE_URI${suffix}`] || 'mongodb://b2b_staging:b2b_staging@ds135912.mlab.com:35912/b2b-staging',
  fileKey: process.env.FILE_KEY || 'fileKey',
  masterKey: process.env.MASTER_KEY || 'AKIAI4EDN7ZEF7YSAZCA',
  mountPath: process.env.PARSE_MOUNT || '/parse',
  port: process.env.SERVER_PORT || '1337',
  publicServerURL: process.env[`SERVER_URL${suffix}`] || 'http://localhost:1337/parse',
  serverURL: process.env[`SERVER_URL${suffix}`] || 'http://localhost:1337/parse',
  logLevel: process.env.LOG_LEVEL || '1',
  liveQuery: {
    classNames: [],
  },
};
