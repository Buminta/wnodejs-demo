//all vars global in 'vars'
vars.socket.on("test", function(data){
	console.log(data);
	console.log(vars.session);

	//call model on socket
	// var modelDemo = router.getModel('demo', 'auth_users');
	// console.log(modelDemo);
});