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

  static fetchCartProductByMid(mId) {
    return db.execute('SELECT * FROM cart where mId = ?',[mId]);
  }


  //write
  static postAddcart(pNo,quantity,mId,total) {
    return db.execute('INSERT INTO  cart (quantity, pNo, mId,total) VALUES (?,?,?,?)',[quantity,pNo,mId,total]);
  }

  //delect
  static deleteCartProduct(pId) {
    return db.execute('DELETE FROM cart WHERE pId = ?;',[pId]);
  }

};
