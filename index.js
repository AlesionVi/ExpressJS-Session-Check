module.exports = checkSignIn

function checkSignIn(session, route){
  if(session){
    return true;
  }
  else{
    res.redirect(route);
  }
}
