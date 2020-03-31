/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1584001788596_1240';
  config.security = {
    csrf: {
      enable: false
      //ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
    },
  };
  config.cluster = {
    listen: {
      path: '',
      port: 7010,
      // hostname: '0.0.0.0',
    }
  };

  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };

  config.mysql = {
    clients: {
      // clientId, 获取client实例，需要通过 app.mysql.get('clientId') 获取
      db1: {
        // host
        host: 'rm-uf6r8za7q9lz8n3px0o.mysql.rds.aliyuncs.com',
        // 端口号
        port: '3306',
        // 用户名
        user: 'xiongyong',
        // 密码
        password: 'xiongyong2310504',
        // 数据库名
        database: 'myBudget',

      },
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
