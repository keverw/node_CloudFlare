//CloudFlare IP Ranges from https://www.cloudflare.com/ips
var v4 = ['204.93.240.0/24', '204.93.177.0/24', '199.27.128.0/21', '173.245.48.0/20', '103.22.200.0/22', '141.101.64.0/18', '108.162.192.0/18', '190.93.240.0/20'];
var v6 = ['2400:cb00::/32', '2606:4700::/32', '2803:f800::/32'];

var fs = require('fs');

var ranges = {};

ranges.v4 = v4;
ranges.v6 = v6;

var file_contents = JSON.stringify(ranges);

fs.writeFile('./ranges.json', file_contents, 'utf8', function (err)
{
    if (err)
    {
        console.log(err);
    }
    else
    {
        console.log('Wrote config file');
    }
});