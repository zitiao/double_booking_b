'use strict';

const Controller = require('egg').Controller;
let axios = require('axios');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('index')
  }
  async test() {
    const { ctx } = this;
    const list = await this.service.attendance.testtttt(ctx.request.body);
    console.log(list)
    ctx.body = 'hi, egg';
  }  
}

module.exports = HomeController;
