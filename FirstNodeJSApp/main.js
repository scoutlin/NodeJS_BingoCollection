console.log("Start");
console.log("__dirname: " + __dirname);
var express = require('express');
var app = express();
var fs = require("fs");

//Set Public Folder
app.use(express.static(__dirname + '/Public'));


//Get Process
app.get('/', function (req, res) {




   res.send("Fuck");
})

app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + "/Views/" + "Index/" + "index.html" );
})

app.get('/chat.html', function (req, res) {
    res.sendFile(__dirname + "/Views/" + "Chat/" + "chat.html");
})







app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.send( data );
   });
})


app.get('/process_get', function (req, res) {
   //Print req
   console.log("req: " + req);

   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log("response: " + response);
   //res.end(JSON.stringify(response));
   res.send("MHXX is goooooooooooooood!!");
})



var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})