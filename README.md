# ExpressJS-Session-Check
This is a simple tool to check if your session variable is not null and redirect to the specified location.

## Installation
```bash
npm i expressjs-session-check
```

## Usage
Specify the location of your views directory
```javascript
const sessionCheck = require('expressjs-session-check')
```

How to use it in your code:
```javascript
const checkSignIn = require('expressjs-session-check');

router.get('/SessionTest', function(req, res, next) {
  user = req.session.user;
  checkSignIn(user,"/RedirectRoute");
  res.render('Session/index',{title:"Session Test"})
});
```


## License

  [MIT](LICENSE)
  



