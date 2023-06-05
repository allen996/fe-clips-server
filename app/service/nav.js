'use strict';

const Service = require('egg').Service;

class NavService extends Service {
  /* 创建导航 */
  async createNav(nav) {
    const { ctx } = this;
    const { Nav } = ctx.model;
    await Nav.create({ nav });
  }

  /* 获取所有导航 */
  async getAllNav() {
    const { ctx } = this;
    const { Nav } = ctx.model;
    return await Nav.findAll({
      attributes: ['id', 'nav']
    });
  }
}

module.exports = NavService;