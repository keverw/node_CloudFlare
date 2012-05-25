// Load the http module to create an http server.
var http = require('http');
var cf = require('./node_CloudFlare.js');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response)
{
    if (request.url === '/favicon.ico')
    { //Thank's https://gist.github.com/763822
        response.writeHead(200, {
            'Content-Type': 'image/x-icon'
        });
        response.end();
        return;
    }

    response.writeHead(200, {
        "Content-Type": "text/plain"
    });

    console.log(cf.check(request, 'is'));
    //console.log(cf.check(request, 'real'));
    response.end("Hello World\n");
});

cf.load(function (error, fs_error)
{
	if (fs_error)
	{
		throw new Error(err);
	}
    server.listen(8880);
	console.log('Server running.');
});