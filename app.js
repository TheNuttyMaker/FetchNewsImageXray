// var Xray = require("x-ray");
// var xray = new Xray;

// xray('https://www.inshorts.com/en/read/', 'title')
// .write('results.json');


var Xray = require("x-ray");
var xray = new Xray;

// xray('https://www.inshorts.com/en/read/', 'a', [{a:'', href:'@href'}])
// .write('results.json');

//xray('https://www.inshorts.com/en/read/', 'title')(function(err, title) {
	xray('https://www.inshorts.com/en/read/', '.news-card-image',[['img@src']]	)(function(err, title) {

  //console.log(title); // Google

  if(err){
  	console.log(err);
  }
  else{
  	console.log(title);
  }
  
})
.write('results.json');