'use strict';

const Service = require('egg').Service;
const moment = require('moment');

class AcctDocService extends Service {
    async addAcctDoc(req) {
        const { title, date, outerItemArray, innerItemArray } = req;
        const mySqlClient = this.app.mysql.get('db1');

        let queryString = `
            insert into accounting_document_h (create_datetime,document_date,title)
            values('${moment().format('YYYY-MM-DD HH:mm:ss')}','${moment(date).format('YYYY-MM-DD')}','${title}');         
        `

        const headerResult = await mySqlClient.query(queryString);
        const { insertId } = headerResult;

        let itemQueryString = `
            insert into accounting_document_i (accounting_document_id,accounting_document_item_id,dr_cr_flag,account_id,amouunt,title)
            values
                ${outerItemArray.map((o, index) => `('${insertId}','${index}','o','${o.account}','${o.amount}','${o.title}')`)},
                ${innerItemArray.map((o, index) => `('${insertId}','${index}','i','${o.account}','${o.amount}','${o.title}')`)}
        `;
        const itemResult = await mySqlClient.query(itemQueryString);
    }

    async getAcctDoc() {

        const mySqlClient = this.app.mysql.get('db1');

        let queryString = `
            select 
                i.title,
                h.document_date,
                i.amouunt,
                i.dr_cr_flag,
                a.account_txt,
                l.account_layer1,
                l.account_layer2,
                l.account_layer3
            from accounting_document_h h
            INNER JOIN accounting_document_i i ON h.accounting_document_id= i.accounting_document_id
            INNER JOIN account a on a.account_id= i.account_id
            INNER JOIN account_layer l ON a.account_layer_id= l.account_layer_id
            order by h.create_datetime desc, i.title, i.dr_cr_flag desc
        `

        const result = await mySqlClient.query(queryString);
        return result;
    }

    async getSummary() {

        const mySqlClient = this.app.mysql.get('db1');

        let queryString = `
            select 
                i.account_id,
                a.account_txt,
                l.account_layer1,
                l.account_layer2,
                l.account_layer3,
                sum(CASE WHEN i.dr_cr_flag= 'i' then i.amouunt END) totalOut,
                sum(CASE WHEN i.dr_cr_flag= 'o' then i.amouunt END) totalIn
            from accounting_document_h h
            INNER JOIN accounting_document_i i on h.accounting_document_id= i.accounting_document_id
            inner join account a on a.account_id= i.account_id
            inner join account_layer l on a.account_layer_id= l.account_layer_id
            group by i.account_id
            order by i.account_id,
                    i.dr_cr_flag
        `

        const result = await mySqlClient.query(queryString);
        return result;
    }
    
}

module.exports = AcctDocService;