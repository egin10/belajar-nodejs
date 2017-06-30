module.exports = {
    isLogin: function(req, res, next){
      if(req.session.isLogin){
        next();
      } else {
        res.redirect('/login');
      }
    }
}
