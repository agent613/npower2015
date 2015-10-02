//import framework for building RESTful services
var restify = require('restify');

//create the server and listen on a port for incoming requests
var server = restify.createServer();
server.listen(process.env.port||1337, function() {
  console.log('%s listening at %s', server.name, server.url);
});


//create route for searching songs
server.get('/mytunes/:searchText', respond);
function respond(req, res, next) {
  res.send(searchSongs(req.params.searchText));
  next();
}

var songs = [ { title: "Can't buy me love", artist: "The Beatles"}, {title: "Can't Feel my Face", artist: "The Weeknd"}, {title: "Hotel California", artist: "Eagles"}]

var searchSongs = function(searchText){ return songs.filter(function(song){ return song.title.toLowerCase().match(searchText.toLowerCase()) })};





//create route for serving the app
server.get(/\/app\/?.*/, restify.serveStatic({
  directory: './static',
  default: 'index.html'
}));










/*var songs = [
	{title: "Can't buy me love", artist: "Beatles"},
	{title: "Hotel California", artist: "Eagles"}
];

var searchSongs = function(searchText){
	return songs.filter(function(song){return song.title.toLowerCase().match(searchText.toLowerCase());});	
};*/