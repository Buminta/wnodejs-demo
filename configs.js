module.exports = {
	listen_port: 3001,
	defaultApp: "demo",
	database: {
		host: "127.0.0.1",
		name: "msocial"
	},
	sercurity: {
		key: "express.sid",
		secret: "1234567890QWERTY"
	},
	// socket_path: "/socket_app.js" // If dose'nt using u can comment line here
	// var global for using: socket, session
}