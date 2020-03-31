'use strict';

const Service = require('egg').Service;

class AccountService extends Service {
  async getAcctgrp() {
    const mySqlClient = this.app.mysql.get('db1');
    const account_grp = await mySqlClient.query(`select * from account_grp`);
    return account_grp;
  }
  async getAcct() {
    const mySqlClient = this.app.mysql.get('db1');
    const account = await mySqlClient.query(`select * from account`);
    return account;
  }
  async getAcctLayer() {
    const mySqlClient = this.app.mysql.get('db1');
    const account = await mySqlClient.query(`select * from account_layer`);
    return account;
  }
  

}

module.exports = AccountService;
