module.exports = {
  apps : [{
    name: 'quartz-test-api',
    script: 'yarn start',
    interpreter: 'node@16.14.1',
    env: {
      NODE_ENV: "production",
    }
    // instances : "1",
    // exec_mode : "cluster"
  }]
};
