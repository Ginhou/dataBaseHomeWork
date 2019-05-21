const db = require('../../../util/database');

module.exports = class Post {
  constructor(first_name,last_name, email, country,address,town,zip_code,order_comment) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.country = country
    this.address = address;
    this.town = town
    this.zip_code = zip_code;
    this.order_comment = order_comment
    
  }

  //write
  static checkout(req) {
    return db.execute('INSERT INTO checkout ( first_name, last_name, email,country,address,town,zip_code,order_comment,mId) VALUES (?,?,?,?,?,?,?,?,?)'
    ,[req.body.first_name,req.body.last_name,req.body.email,req.body.country,req.body.address,req.body.town,req.body.zip_code,req.body.order_comment,req.cookies.mId]);
  }

};

