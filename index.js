module.exports = checkSignIn

function checkSignIn(session, route, res){
  if(session){
    return true;
  }
  else{
    res.redirect(route);
  }
}
