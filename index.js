 module.exports = {
  checkSignIn: function(session, route){
    if(session){
      return true;
    }
    else{
      res.redirect(route);
    }
  },
}