'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  /* Nav API */
  router.post('/api/nav', controller.nav.createNav);
  router.get('/api/nav', controller.nav.getAllNav);

  /* Link API */
  router.post('/api/link', controller.link.createLink);
  router.get('/api/link', controller.link.getAllLink);
};
