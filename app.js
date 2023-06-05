'use strict';

module.exports = app => {
  /* 同步数据库表 */
  if (app.config.env === 'local' || app.config.env === 'unittest') {
    app.beforeStart(async () => {
      // force为true时会强制重置数据库表
      await app.model.sync({ force: false });
    });
  }
}