'use strict';

const Service = require('egg').Service;

class LinkService extends Service {
  /* 创建链接 */
  async createLink(link, navId) {
    const { ctx } = this;
    const { Link } = ctx.model;
    await Link.create({ link, navId });
  }

  /* 获取所有链接 */
  async getAllLink() {
    const { ctx } = this;
    const { Link } = ctx.model;
    return await Link.findAll();
  }
}

module.exports = LinkService;