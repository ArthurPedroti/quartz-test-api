module.exports = {
  apps : [{
    name: 'quartz-test-api',
    script: 'server.js',
    env: {
      NODE_ENV: "production",
    },
    instances : "5",
    exec_mode : "cluster"
  }]
};
