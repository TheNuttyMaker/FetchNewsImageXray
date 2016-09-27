var Xray = require("x-ray");
var xray = new Xray({
  filters: {
    trim: function (value) {
      return typeof value === 'string' ? value.trim() : value
    },
    reverse: function (value) {
      return typeof value === 'string' ? value.split('').reverse().join('') : value
    },
    slice: function (value) {
      var start = value.indexOf("'");
      var end = value.lastIndexOf("?");
      return typeof value === 'string' ? value.slice(start+1, end) : value
    }
  }
});

var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
	res.send('<html><head></head><body><h1>Hello world!</h1></body></html>');
});

app.get('/api', function(req, res) {
	res.json({ firstname: 'Prashant', lastname: 'Yadav' });
});

app.get('/api/inshorts', function(req, res, next){

	 xray('https://www.inshorts.com/en/read/', '.news-card',[{
	 	image: 'div.news-card-image@style  | slice',
	 	title: '.news-card-title span',
	 	content:'.news-card-content div',
	 	author: '.news-card-author-time span.author',
	 	time:'.news-card-author-time span.time',
	 	// date: xray('.news-card-author-time span', 'span@content'),
	 	footer: xray('.read-more', 'a@href')

	 }]).write().pipe(res);

});

app.listen(port);
console.log("listening on localhost:3000/api/inshorts");