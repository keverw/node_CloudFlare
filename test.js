// Load the http module to create an http server.
var http = require('http');
var cf = require('./node_CloudFlare.js');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (req, res)
{
    if (req.url === '/favicon.ico')
    { //Thank's https://gist.github.com/763822
        res.writeHead(200, {
            'Content-Type': 'image/x-icon'
        });
        res.end();
        return;
    }

    res.writeHead(200, {
        "Content-Type": "text/plain"
    });

	if (cf.check(req)) //CF
	{
		res.end(cf.get(req));
	}
	else //not CF
	{
		var ip_address = (req.connection.remoteAddress ? req.connection.remoteAddress : req.remoteAddress);
		res.end(ip_address);
	}
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