const moment = require('moment');

const login = require('../../../models/doc/admin/login.js');


exports.gotoLogin = (req, res, next) => {
    res.render('doc/admin/login');
};

exports.postLogin = (req, res, next) => {
    let username = req.body.username;
    let password = req.body.pass;
    var data;

    login.fetchMember(req).then(([rows]) => {

        for (let p of rows) {
            p.date = moment(p.date).format('MMM D, YYYY');
        }
        //console.log(JSON.stringify(rows));

        data=rows;

        
        if(data=="")
        {   
            console.log("login  error");
             res.redirect('/member');
        }
        else if(data[0].username == username && data[0].password == password){ 
            console.log("login sucess");

            res.cookie('username', data[0].username, { signed: false, maxAge:6000*1000});
                
            res.cookie('isLogin', true , { signed: false, maxAge:6000*1000});

            res.cookie('mId', data[0].mid , { signed: false, maxAge:6000*1000});

            
            // let username = req.Cookies.username;
                
            // let isLogin = req.Cookies.isLogin;
            
            res.redirect('/');

        }
        else{   

            console.log("YYYYYYY");
            // res.render('../public/login', {
            //     data: rows,
            // });
        }
        
    })
    .catch(err => console.log(err));


};
