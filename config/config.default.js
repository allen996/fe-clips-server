/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1685952100378_6723';

  // add your middleware config here
  config.middleware = [];

  // Egg.js默认启用了一些安全策略来防止常见的 Web 攻击，要求 POST 请求包含一个有效的 CSRF Token，以防止 CSRF 攻击。否则，服务器会返回 403 错误。
  config.security = {
    csrf: {
      enable: false
    }
  }

  config.sequelize = {
    dialect: 'mysql',
    host: 'localhost',
    port: '3306',
    database: 'fe-clips',
    username: 'root',
    password: '123456',
    timezone: '+08:00'
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    cluster: {
      listen: {
        path: '',
        port: 80,
        hostname: '0.0.0.0',
      },
    },
  };

  return {
    ...config,
    ...userConfig
  };
};
