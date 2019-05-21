const db = require('../../../util/database');

module.exports = class Post {
  constructor(username, email, password, login_state) {
    this.username = pnusernameame;
    this.email = email;
    this.password = password
    this.login_state = login_state;
  }

  // READ
  static fetchMember(req) {
    let username = req.body.username;
    let password = req.body.pass;

    return db.execute('SELECT * FROM member where username=? and password =?',[username,password]);
  }

  //write 
  // static updataState() {
  //   return db.execute('UPDATE member SET login_state = ?',[1]);
  // }

};
