var songs = [
	{title: "Can't buy me love", artist: "Beatles"},
	{title: "Hotel California", artist: "Eagles"}
];

var searchSongs = function(searchText){
	return songs.filter(function(song){return song.title.toLowerCase().match(searchText.toLowerCase());});	
};

var restify = require('restify');

function respond(req, res, next) {
  res.send(searchSongs(req.params.searchText));
  next();
}

var server = restify.createServer();
server.get('/mytunes/:searchText', respond);

server.get(/\/app\/?.*/, restify.serveStatic({
  directory: './static',
  default: 'index.html'
}));


server.listen(process.env.port||1337, function() {
  console.log('%s listening at %s', server.name, server.url);
});