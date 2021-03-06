var express = require('express');
var pg      = require('pg');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/db', function(req, res){
	
	pg.connect(process.env.DATABASE_URL, function(err, client, done){
		client.query("SELECT * FROM test_table", function(erro, result){
			done();
			if(err){
				console.error(err);res.send("Error " + err);
			}else{
				res.render('pages/db', {results: result.rows});
			}
		});
	});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});