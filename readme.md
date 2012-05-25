#node_CloudFlare#

A simple module to check if CloudFlare is connecting and get the real IP address.

##Install##

    npm install node_CloudFlare


##Example##
**Load config**
```
var cf = require('./node_CloudFlare.js');
cf.load(function (error, fs_error)
{
	if (fs_error)
	{
		throw new Error(err);
	}
    server.listen(8880);
	console.log('Server running.');
});

```
**Check:**

```
var ip_address = (req.connection.remoteAddress ? req.connection.remoteAddress : req.remoteAddress);
	if (cf.check(req)) //CF
	{
		res.end('CF IP: ' + ip_address + '\nYour IP: ' + cf.get(req));
	}
	else //not CF
	{	
		res.end(ip_address);
	}
```

Check out `example.js` for a full working demo

##Legal Stuffs##
CloudFlare is an registered trademark of CloudFlare, Inc. This work is not endorsed by CloudFlare, Inc.

Node.js is an registered trademark of Joyent. This work is not endorsed by Joyent.