'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.home.index);

  router.get('/app/account/getAcctgrp', controller.account.getAcctgrp);
  router.get('/app/account/getAcct', controller.account.getAcct);
  router.get('/app/account/getAcctLayer', controller.account.getAcctLayer);

  router.post('/app/acctDoc/addAcctDoc', controller.acctDoc.addAcctDoc);
  router.post('/app/acctDoc/getAcctDoc', controller.acctDoc.getAcctDoc);
  router.post('/app/acctDoc/getSummary', controller.acctDoc.getSummary);

};
