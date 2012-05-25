#node_CloudFlare#

**DO NOT USE - NOT READY FOR PRODUCTION**

A simple module to check if CloudFlare is connecting and get the real IP address.

##Setup##
todo

##Example##
Load config
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


##Legal Stuffs##
CloudFlare is an registered trademark of CloudFlare, Inc. This work is not endorsed by CloudFlare, Inc.

Node.js is an registered trademark of Joyent. This work is not endorsed by Joyent.