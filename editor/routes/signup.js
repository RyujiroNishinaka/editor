var express = require('express');
var router = express.Router();
var collection = require( '../mongo' );
var Messages = require('../constant').Messages;


/**
 * GET: /signup
 */
router.get('/', function(req, res, next) {
  //console.log("http get: /signup", util.getLastCall());
  console.log("http get: /signup");
  
  // signup画面の表示
  res.params.title = 'サインアップ';
  return res.render('signup', res.params);
});


/**
 * POST: /signup/complete
 */
router.post('/complete', function(req, res, next) {
  console.log("http post: /signup/complete");

  // ID重複の確認
  collection('users').findOne({userId: req.body.userId}, function(err, user){
    if(!user){
      // 重複無し分岐
      password = req.body.password;
      //// パスワードのハッシュ化
      //req.body.password = bcrypt.hashSync(req.body.password, salt);
      // 登録処理
      collection('users').insertOne(req.body).then(function(r){
        console.log("signup: DB insertion completed");
        // ユーザーページへリダイレクト TODO：ここで認証処理もおこなう
        req.body.password = password;
        return res.redirect('/index');
      });
    } else {
      // 重複あり分岐
      res.params.title = 'サインアップ';
      res.params.userId_used = req.body.userId;
      return res.render('signup', res.params);
    }
  });
});


module.exports = router;