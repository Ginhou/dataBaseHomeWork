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

  // READ
  static fetchAll() {
    return db.execute('SELECT * FROM product');
  }

  static fetchBySeries(series) {
    return db.execute('SELECT * FROM product where series = ?',[series]);
  }

  static fetchByPNo(pno) {
    return db.execute('SELECT * FROM product where pNo = ?',[pno]);
  }

};
