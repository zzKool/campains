// Figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
	//prod
	modules.exports = require('./prod');
} else {
	//dev
	module.exports = require('./dev');
}
