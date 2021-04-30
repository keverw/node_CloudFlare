(function ()
{
	function isEmpty(obj)
	{
		return Object.keys(obj).length === 0;
	}

	var ranges = {};

	function load(callback) //Load the config
	{
		var fs = require('fs');
		fs.readFile(__dirname + '/ranges.json', 'utf8', function (err, data)
		{
			if (err)
			{
				callback(true, err);
			}
			else
			{
				ranges = JSON.parse(data);
				callback(false, null);
			}
		});
	}

	function check(req)
	{
		var ip_address = (req.connection.remoteAddress ? req.connection.remoteAddress : req.remoteAddress);
		if (typeof req.headers['cf-connecting-ip'] === 'undefined')
		{
			return false;
		}
		else
		{
			var range_check = require('range_check');
			if (range_check.isIP(ip_address))
			{
				var ip_ver = range_check.version(ip_address);
				if (ip_ver === 4)
				{
					return range_check.inRange(ip_address, ranges.v4);
				}
				else if (ip_ver === 6)
				{
					return range_check.inRange(ip_address, ranges.v6);
				}
				else
				{
					return false;
				}
			}
			else
			{
				return false;
			}
		}
	}

	function get(req)
	{
		var ip_address = (req.connection.remoteAddress ? req.connection.remoteAddress : req.remoteAddress);
		if (typeof req.headers['cf-connecting-ip'] === 'undefined')
		{
			return ip_address;
		}
		else
		{
			return req.headers['cf-connecting-ip'];
		}
	}

	// Export public API
	var node_CloudFlare = {};

	node_CloudFlare.load = load;
	node_CloudFlare.check = check;
	node_CloudFlare.get = get;

	module.exports = node_CloudFlare;
}());
