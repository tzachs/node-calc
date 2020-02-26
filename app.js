const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/add/:num1/:num2', function(req, res) {
  var result = parseInt(req.params.num1) + parseInt(req.params.num2);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ result: result}));
});
 
app.listen(3000)
