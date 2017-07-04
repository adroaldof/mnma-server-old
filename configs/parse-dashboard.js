const suffix = `_${String(process.env.NODE_ENV).toUpperCase()}` || '';

module.exports = {
  apps: [
    {
      appId: process.env.APP_ID || 'ioS51qwgmWqf31tVuZs97QKcDjv5VyzY7A9d9rcq',
      appName: process.env.APP_NAME || 'Server Dev',
      masterKey: process.env.MASTER_KEY || 'AKIAI4EDN7ZEF7YSAZCA',
      mountPath: process.env.PARSE_MOUNT || '/dashboard',
      serverURL: process.env[`SERVER_URL${suffix}`] || 'http://localhost:1337/parse',
    },
  ],
};
