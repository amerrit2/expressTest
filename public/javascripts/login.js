$(function(){

	$('#w_loginButton').click(function(){

		console.log("WE GOT A SUBMIT!");
	});

	$('.ui.form').form({
		fields: {
			email: ['email'],
			password: ['minLength[6]']
		}
	});

});