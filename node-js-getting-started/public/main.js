$(function(){

	$('#button_yolo').click(function(args){
		console.log("ARGS: ", args);
		console.log("WHAT IN DFASDFTHE HOLY FUCK!");

		$.get('/db', function(data){
			$(".result").html(data);
		});

	});
});