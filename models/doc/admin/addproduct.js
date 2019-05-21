const db = require('../../../util/database');

module.exports = class Post {
  constructor(pname, manufacturer, unitprice, series, description, url) {
    this.pname = pname;
    this.manufacturer = manufacturer;
    this.unitprice = unitprice
    this.series = series;
    this.datdescriptione = description;
    this.url = url;
  }



  //write 
  static addproduct(req) {
    let pname = req.body.pname;
    let manufacturer = req.body.manufacturer;
    let unitprice = req.body.unitprice;
    let series = req.body.series;
    let description = req.body.description;
    let url = req.body.url;

    return db.execute('INSERT INTO product (pname, manufacturer, unitprice, series, description, url) VALUES (?, ?, ?, ?, ?, ?)', [pname, manufacturer, unitprice, series, description, url]);
  }

};