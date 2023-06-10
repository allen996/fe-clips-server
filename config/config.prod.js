config.sequelize = {
  dialect: 'mysql',
  host: process.env.db_host,
  port: process.env.db_port,
  database: 'fe-clips',
  username: process.env.db_username,
  password: process.env.db_pwd,
  timezone: '+08:00'
};