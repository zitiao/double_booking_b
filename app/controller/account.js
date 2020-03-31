'use strict';

const Controller = require('egg').Controller;

class AccountController extends Controller {
    async getAcctgrp() {
        const ctx = this.ctx;
        var list = await this.service.account.getAcctgrp();
        ctx.body = JSON.stringify(list);
    }
    async getAcct() {
        const ctx = this.ctx;
        var list = await this.service.account.getAcct();
        ctx.body = JSON.stringify(list);
    }
    async getAcctLayer() {
        const ctx = this.ctx;
        var list = await this.service.account.getAcctLayer();
        ctx.body = JSON.stringify(list);
    }
}

module.exports = AccountController;
