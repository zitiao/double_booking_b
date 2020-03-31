'use strict';

const Controller = require('egg').Controller;

class AcctDocController extends Controller {
    async addAcctDoc() {
        const ctx = this.ctx;
        var list = await this.service.acctDoc.addAcctDoc(ctx.request.body);
        ctx.body = JSON.stringify(list);
    }
    async getAcctDoc() {
        const ctx = this.ctx;
        var list = await this.service.acctDoc.getAcctDoc();
        ctx.body = JSON.stringify(list);
    }
    async getSummary() {
        const ctx = this.ctx;
        var list = await this.service.acctDoc.getSummary();
        ctx.body = JSON.stringify(list);
    }
    
    
}

module.exports = AcctDocController;
