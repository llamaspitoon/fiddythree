module.exports = {
	secret: process.env.SECRET,
	db: process.env.DB || 'your-mongodb-connection-string'
};
