var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json())

require('./app/routes')(app);

app.listen(port, function(){
	console.log('app is listening on ' + port);
})