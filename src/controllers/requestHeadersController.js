exports.index = (req, res) => {
	let ipAddress= req.connection.remoteAddress.split(':');
	res.json({
		ipaddress: ipAddress[ipAddress.length-1],
		language: req.headers['accept-language'],
		software: req.headers['user-agent']
	});
};