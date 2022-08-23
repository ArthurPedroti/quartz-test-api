module.exports = {
  apps : [{
    name: 'quartz-test-api',
    script: 'yarn start',
    env: {
      NODE_ENV: "production",
    }
    // instances : "1",
    // exec_mode : "cluster"
  }]
};
