var config = require('../config/config')
var request = require('request');

module.exports = function(app){

	

	app.get('/gif', function(req, res, next){
		request(config.baseUrl + 'test' + '&api_key=' + config.apiKey + '&limit=1', function(err, gif, body){
			res.json(body);
		})
	})

	app.get('/gif/search', function(req, res, next){
		console.log('hitting search');
		var searchText = req.query.query;
		request(config.baseUrl + searchText + '&api_key=' + config.apiKey + '&limit=1', function(err, gif, body){
			res.json(body);
		})
	})
}