'use strict';

const { Controller } = require('egg');

class LinkController extends Controller {
  /* 创建链接 */
  async createLink() {
    const { ctx, service } = this;
    const { link, navId } = ctx.request.body;
    try {
      await service.link.createLink(link, navId)
      ctx.body = {
        code: 200,
        message: '操作成功'
      };
    } catch (err) {
      ctx.body = {
        code: 400,
        message: '操作失败'
      };
    }
  }

  /* 获取所有链接 */
  async getAllLink() {
    const { ctx, service } = this;
    try {
      const data = await service.link.getAllLink();
      ctx.body = {
        code: 200,
        data,
        message: '操作成功'
      };
    } catch (err) {
      ctx.body = {
        code: 400,
        message: '操作失败'
      };
    }
  }
}

module.exports = LinkController;
