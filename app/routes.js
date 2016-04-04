var config = require('../config/config')
var request = require('request');

module.exports = function(app){

	// app.get('*', function(req, res){
	// 	res.redirect('/');
	// })

	app.get('/news', function(req, res, next){
		request(config.baseUrl + '/all?api-key=' + config.token, function(err, news, body){
			// console.log(JSON.stringify(body, null, 4));
			res.json(body);
		})
	})

	app.get('/news/more', function(req, res, next){
		var offset = req.query.offset;
		console.log('offset: ' + offset);

		request(config.baseUrl + '/all?api-key=' + config.token + '&offset=' + offset, function(err, news, body){
						
			res.json(body);
		})
	})
}