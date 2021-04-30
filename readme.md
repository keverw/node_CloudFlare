[![Build Status](https://travis-ci.org/keverw/node_CloudFlare.svg)](https://travis-ci.org/keverw/node_CloudFlare)

# node_CloudFlare 0.0.6

A simple module to check if [CloudFlare](https://www.cloudflare.com/) is connecting and get the real IP address.

## Install
To install node_CloudFlare on your Node.js server use npm

    npm install node_cloudflare

All lowercase! NPM is case sensitive.

## Example
**Load config**
```
var cf = require('node_cloudflare');
cf.load(function (error, fs_error)
{
	if (fs_error)
	{
		throw new Error(fs_error);
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

Check out `example.js` for a another working exmaple that overrides the `req.connection.remoteAddress` getter. 

## Dependencies
Range Check - [https://github.com/keverw/range_check](https://github.com/keverw/range_check)

## Legal Stuffs
CloudFlare is an registered trademark of CloudFlare, Inc. This work is not endorsed by CloudFlare, Inc.

Node.js is an registered trademark of Joyent. This work is not endorsed by Joyent.
