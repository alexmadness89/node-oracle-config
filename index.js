const configDev = {
  db: {
    main: {
      dialect: 'oracle',
      database: 'XE',
      username: 'hr',
      password: 'oracle',
      host: 'localhost',
      port: 49161,
      pool: {
        maxConnections: 5,
        maxIdleTime: 3000,
      },
    },
  },
  api: {
    secret: 'n0d3-0r4cl3',
    port: 8080,
  },
}

module.exports = configDev