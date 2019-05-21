const db = require('../../../util/database');

module.exports = class Post {
  constructor(username, email, password, login_state) {
    this.username = username;
    this.email = email;
    this.password = password
    this.login_state = login_state;
  }

  //read
  static getMemberName(username) {
    return db.execute('select * from member where username = ?',[username]);
  }
  //write
  static signUp(req) {
    return db.execute('INSERT INTO  member ( username, email, password) VALUES (?,?,?)',[req.body.username,req.body.email,req.body.password]);
  }

};