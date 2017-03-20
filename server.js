var express = require('express');

//Create our app
var app = express();
//Use the port environment variable(handled by heroku) if it exists, else use port 3000
const PORT = process.env.PORT || 3000;

//Express middleware to transform https requests to http, this is in order for
//the open weather map API to work(only supports http requests)
app.use(function(req, res, next){
  if(req.headers['x-fowarded-proto'] === 'https'){
    res.redirect('http://' + req.hostname + req.url);
  }else{
    next();
  }
});

//Tell express which folder to serve
app.use(express.static('public'));

//Run server on port 3000 and call the function when is up
app.listen(PORT, function(){
  console.log('Express server is up on port ' + PORT);
});
