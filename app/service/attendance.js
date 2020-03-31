const Service = require('egg').Service;

class AttendanceService extends Service {

    async getAttendanceDetail() {
        const mySqlClient = this.app.mysql.get('db1');
        const outerResult = await mySqlClient.query(`select * from account_grp`);
        return outerResult;
    }

    async testtttt() {
        
        const mySqlClient = this.app.mysql.get('db1');
        console.log(mySqlClient)
        const outerResult = await mySqlClient.query(`select * from account_grp`);
        console.log(outerResult)
        return outerResult;
    }

}

module.exports = AttendanceService;
