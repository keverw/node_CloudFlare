var http = require('http');
var cf = require('./node_CloudFlare.js');

// Configure our HTTP server to respond with the users IP address.
var server = http.createServer(function (req, res)
{
	if (cf.check(req)) //CF
	{
		req.real_ip = cf.get(req);
		req.connection.__defineGetter__('remoteAddress', function ()
		{
			return req.real_ip;
		});
	}

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

	var ip_address = (req.connection.remoteAddress ? req.connection.remoteAddress : req.remoteAddress);
	res.end('Your IP: ' + ip_address);
});

cf.load(function (error, fs_error) //Loads the ranges and then starts the webserver.
{
	if (fs_error)
	{
		throw new Error(fs_error);
	}
	server.listen(8880);
	console.log('Server running.');
});