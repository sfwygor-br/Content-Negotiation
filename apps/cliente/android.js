let http = require('http');
http.get('http://localhost', function(res){
    res.on('data', function(chunk){
        console.log('' + chunk);
    });

    res.on('end', function(){

    });
});