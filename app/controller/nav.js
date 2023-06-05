'use strict';

const { Controller } = require('egg');

class NavController extends Controller {
  /* 创建导航 */
  async createNav() {
    const { ctx, service } = this;
    const { nav } = ctx.request.body;
    try {
      await service.nav.createNav(nav)
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

  /* 获取导航 */
  async getAllNav() {
    const { ctx, service } = this;
    try {
      const data = await service.nav.getAllNav();
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

module.exports = NavController;
